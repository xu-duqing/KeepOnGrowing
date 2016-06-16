/**
 * Created by Guang on 16/5/19.
 */

import {KEEP,LOGIN} from './types';
var Parse = require('parse/react-native');


function addKeep(object){
    console.log(object);

    return async dispatch =>{
        dispatch({
            type:KEEP.ADD_KEEP
        });

        const user = await Parse.User.currentAsync();

        if (user){
            object.setACL(new Parse.ACL(user));
            object.save(null,{
                success: function (keepFirst) {
                    dispatch(addSuccess(keepFirst));
                    dispatch(loadKeep())
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

function addFirst(first:{}){

    return  (dispatch,getState) => {
        let KeepFirst = Parse.Object.extend("KeepFirst");
        let keepFirst = new KeepFirst();

        keepFirst.set("keynote",first.keynote);
        keepFirst.set("description",first.description);
        keepFirst.set("startTime",first.startTime);

        dispatch(addKeep(keepFirst));
    }
}

function addHeight(height:{}){

    return dispatch =>{
        let Keep = Parse.Object.extend("KeepHeight");
        let keep = new Keep();

        keep.set("height",height.height);
        keep.set("startTime",height.startTime);

        dispatch(addKeep(keep));
    }
}

function addWeight(weight:{}){

    return dispatch =>{
        let Keep = Parse.Object.extend("KeepWeight");
        let keep = new Keep();

        keep.set("weight",weight.weight);
        keep.set("startTime",weight.startTime);

        dispatch(addKeep(keep));

    }
}


function addPowderedMilk(milk:{}){

    return dispatch =>{
        let Keep = Parse.Object.extend("KeepPowderedMilk");
        let keep = new Keep();

        keep.set("volume",milk.volume);
        keep.set("startTime",milk.startTime);

        dispatch(addKeep(keep));

    }
}


function addBreastMilk(milk:{}){

    return dispatch =>{
        let Keep = Parse.Object.extend("KeepBreastMilk");
        let keep = new Keep();

        keep.set("endTime",milk.endTime);
        keep.set("startTime",milk.startTime);

        dispatch(addKeep(keep));

    }
}

function addSleep(sleep:{}){

    return dispatch =>{
        let Keep = Parse.Object.extend("KeepSleep");
        let keep = new Keep();

        keep.set("endTime",sleep.endTime);
        keep.set("startTime",sleep.startTime);

        dispatch(addKeep(keep));

    }
}

function addShit(shit:{}){

    return dispatch =>{
        let Keep = Parse.Object.extend("KeepShit");
        let keep = new Keep();

        keep.set("startTime",shit.startTime);

        dispatch(addKeep(keep));

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
            dispatch({
                type:KEEP.LEAD_SUCCESS,
                keeps:mergeKeep(value)
            })
        })

    }
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