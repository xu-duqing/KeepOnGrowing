/**
 * Created by Guang on 16/5/19.
 */

import {KEEP,LOGIN} from './types';
var Parse = require('parse/react-native');


function addKeep(object){

    return async dispatch =>{
        dispatch({
            type:KEEP.ADD_KEEP
        });

        const user = await Parse.User.currentAsync();

        if (user){
            object.setACL(new Parse.ACL(user));
            object.save(null,{
                success: function (keepFirst) {
                    dispatch(addSuccess(keepFirst))
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
    addPowderedMilk
};