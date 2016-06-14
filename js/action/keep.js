/**
 * Created by Guang on 16/5/19.
 */

import {KEEP,LOGIN} from './types';
var Parse = require('parse/react-native');


function addFirst(first:{}){

    return async (dispatch,getState) => {
        dispatch({
            type:KEEP.ADD_KEEP
        });

        const user = await Parse.User.currentAsync();
        if(user){
            let KeepFirst = Parse.Object.extend("KeepFirst");
            let keepFirst = new KeepFirst();

            keepFirst.set("keynote",first.keynote);
            keepFirst.set("description",first.description);
            keepFirst.set("startTime",first.startTime);
            keepFirst.setACL(new Parse.ACL(user));

            keepFirst.save(null,{
                success: function (keepFirst) {
                    dispatch(addSuccess(keepFirst))
                },
                error: function (keepFirst, error) {
                    console.log(error);
                    dispatch(addError(error))
                }
            });
        } else {
            //没有登录跳转到登录页面
            dispatch({
                type:LOGIN.LOGOUT
            })
        }
    }
}

function addHeight(height:{}){

    return async (dispatch,getState) => {
        dispatch({
            type:KEEP.ADD_KEEP
        });

        const user = await Parse.User.currentAsync();
        if(user){
            let KeepHeight = Parse.Object.extend("KeepHeight");
            let keepHeight = new KeepHeight();

            keepHeight.set("height",height.height);
            keepHeight.set("startTime",height.startTime);
            keepHeight.setACL(new Parse.ACL(user));

            keepHeight.save(null,{
                success: function (keep) {
                    dispatch(addSuccess(keep))
                },
                error: function (keepFirst, error) {
                    console.log(error);
                    dispatch(addError(error))
                }
            });
        } else {
            //没有登录跳转到登录页面
            dispatch({
                type:LOGIN.LOGOUT
            })
        }
    }
}

function addWeight(weight:{}){

    return async (dispatch,getState) => {
        dispatch({
            type:KEEP.ADD_KEEP
        });

        const user = await Parse.User.currentAsync();
        if(user){
            let KeepWeight = Parse.Object.extend("KeepWeight");
            let keepWeight = new KeepWeight();

            keepWeight.set("weight",weight.weight);
            keepWeight.set("startTime",weight.startTime);
            keepWeight.setACL(new Parse.ACL(user));

            keepWeight.save(null,{
                success: function (keep) {
                    dispatch(addSuccess(keep))
                },
                error: function (keepFirst, error) {
                    console.log(error);
                    dispatch(addError(error))
                }
            });
        } else {
            //没有登录跳转到登录页面
            dispatch({
                type:LOGIN.LOGOUT
            })
        }
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
    addWeight
};