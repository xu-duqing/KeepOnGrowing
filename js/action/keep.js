/**
 * Created by Guang on 16/5/19.
 */

import {KEEP,LOGIN} from './types';
var Parse = require('parse/react-native');


function addKeep(object,onFinish){
    console.log(object);

    return async (dispatch,getState) =>{
        dispatch({
            type:KEEP.ADD_KEEP
        });

        const user = await Parse.User.currentAsync();

        if (user){
            //fixme 暂时不做孩子切换所以选择第一个
            object.set('child',getState().child.childs[0].id);
            object.setACL(new Parse.ACL(user));
            object.save(null,{
                success: function (keepFirst) {
                    dispatch(addSuccess(keepFirst));
                    dispatch(loadKeep())
                    onFinish && onFinish()
                },
                error: function (keepFirst, error) {
                    console.log(error);
                    dispatch(addError(error))
                }
            });
        }else {
            //没有登录跳转到登录页面
            dispatch({
                type:LOGIN.LOGOUT
            })
        }
    }

}

function addFirst(first:{},onFinish){

    return  (dispatch,getState) => {
        let KeepFirst = Parse.Object.extend("KeepFirst");
        let keepFirst = new KeepFirst();

        keepFirst.set("keynote",first.keynote);
        keepFirst.set("description",first.description);
        keepFirst.set("startTime",first.startTime);

        dispatch(addKeep(keepFirst,onFinish));
    }
}

function addHeight(height:{},onFinish){

    return dispatch =>{
        let Keep = Parse.Object.extend("KeepHeight");
        let keep = new Keep();

        keep.set("height",height.height);
        keep.set("startTime",height.startTime);

        dispatch(addKeep(keep,onFinish));
    }
}

function addWeight(weight:{},onFinish){

    return dispatch =>{
        let Keep = Parse.Object.extend("KeepWeight");
        let keep = new Keep();

        keep.set("weight",weight.weight);
        keep.set("startTime",weight.startTime);

        dispatch(addKeep(keep,onFinish));

    }
}


function addPowderedMilk(milk:{},onFinish){

    return dispatch =>{
        let Keep = Parse.Object.extend("KeepPowderedMilk");
        let keep = new Keep();

        keep.set("volume",milk.volume);
        keep.set("startTime",milk.startTime);

        dispatch(addKeep(keep,onFinish));

    }
}


function addBreastMilk(milk:{},onFinish){

    return dispatch =>{
        let Keep = Parse.Object.extend("KeepBreastMilk");
        let keep = new Keep();

        keep.set("endTime",milk.endTime);
        keep.set("startTime",milk.startTime);

        dispatch(addKeep(keep,onFinish));

    }
}

function addSleep(sleep:{},onFinish){

    return dispatch =>{
        let Keep = Parse.Object.extend("KeepSleep");
        let keep = new Keep();

        keep.set("endTime",sleep.endTime);
        keep.set("startTime",sleep.startTime);

        dispatch(addKeep(keep,onFinish));

    }
}

function addShit(shit:{},onFinish){

    return dispatch =>{
        let Keep = Parse.Object.extend("KeepShit");
        let keep = new Keep();

        keep.set("startTime",shit.startTime);

        dispatch(addKeep(keep,onFinish));

    }
}

function loadKeep(){
    return dispatch =>{
        dispatch({
            type:KEEP.LEAD_KEEP
        });

        Promise.all([
            queryKeep("KeepFirst"),
            queryKeep("KeepPowderedMilk"),
            queryKeep("KeepHeight"),
            queryKeep("KeepBreastMilk"),
            queryKeep("KeepShit"),
            queryKeep("KeepSleep"),
            queryKeep("KeepWeight")
        ]).then(value =>{
            let keeps = mergeKeep(value);
            let heights = buildHeights(keeps).reverse();
            let weights = buildWeights(keeps).reverse();
            dispatch({
                type:KEEP.LEAD_SUCCESS,
                keeps,
                heights,
                weights,
                lastHeight:heights[0][1],
                lastWeight:weights[0][1]
            })
        })

    }
}

function buildHeights(keeps){
    let heights = [];
    keeps.forEach(keep =>{
        if(keep.type === 'height'){
            let date = new Date(keep.startTime);
            heights.push([`${date.getMonth() + 1}/${date.getDate()}`,keep.height])
        }
    });
    heights.push(['   ',0]);
    return heights;
}



function buildWeights(keeps){
    let weights = [];
    keeps.forEach(keep =>{
        if(keep.type === 'weight'){
            let date = new Date(keep.startTime);
            weights.push([`${date.getMonth() + 1}/${date.getDate()}`,keep.weight])
        }
    });

    weights.push(['   ',0]);
    return weights;
}

/**
 *
 * @param objects
 * @returns {Array}
 */
function mergeKeep(objects:Array){
    let keeps = [];

    objects.forEach(array =>{
        array.forEach(keep =>{
            switch (keep.className){
                case "KeepFirst":
                    keeps.push(parsingFirst(keep));
                    break;
                case "KeepPowderedMilk":
                    keeps.push(parsingPowderedMilk(keep));
                    break;
                case "KeepHeight":
                    keeps.push(parsingHeight(keep));
                    break;
                case "KeepBreastMilk":
                    keeps.push(parsingBreastMilk(keep));
                    break;
                case "KeepShit":
                    keeps.push(parsingShit(keep));
                    break;
                case "KeepSleep":
                    keeps.push(parsingSleep(keep));
                    break;
                case "KeepWeight":
                    keeps.push(parsingWeight(keep));
                    break;
                default:
                    break;
            }
        })
    });

    //排序
    keeps.sort((a,b) =>{
        return b.startTime - a.startTime;
    });

    return keeps
}

function parsingFirst(keep){
    return {
        type:'first',
        startTime:keep.get('startTime'),
        keynote:keep.get('keynote'),
        description:keep.get('description'),
    }
}

function parsingPowderedMilk(keep){
    return {
        type:'powderedMilk',
        startTime:keep.get('startTime'),
        volume:keep.get('volume'),
    }
}

function parsingHeight(keep){
    return {
        type:'height',
        startTime:keep.get('startTime'),
        height:keep.get('height'),
    }
}

function parsingBreastMilk(keep){
    return {
        type:'breastMilk',
        startTime:keep.get('startTime'),
        endTime:keep.get('endTime'),
    }
}

function parsingShit(keep){
    return {
        type:'shit',
        startTime:keep.get('startTime'),
    }
}

function parsingSleep(keep){
    return {
        type:'sleep',
        startTime:keep.get('startTime'),
        endTime:keep.get('endTime'),
    }
}

function parsingWeight(keep){
    return {
        type:'weight',
        startTime:keep.get('startTime'),
        weight:keep.get('weight'),
    }
}


function queryKeep(className:String){
    return new Promise((resolve, reject) =>{
        let query = new Parse.Query(className);

        query.find().then(function(results) {
            resolve(results)
        },function(error){
            console.log(error);
            reject(error)
        });
    })
}

function addSuccess(keep){
    return{
        type:KEEP.ADD_SUCCESS,
        keep
    }
}

function addError(error){
    return{
        type:KEEP.ADD_ERROR,
        error
    }
}

function keepClear(){
    return{
        type:KEEP.KEEP_CLEAR
    }
}

module.exports = {
    addFirst,
    keepClear,
    addHeight,
    addWeight,
    addShit,
    addSleep,
    addBreastMilk,
    addPowderedMilk,
    loadKeep
};