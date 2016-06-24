/**
 * Created by Guang on 16/6/23.
 */

"use strict";

import {CHILD,LOGIN} from './types';
var Parse = require('parse/react-native');

function loadChild(){

}

function addChild(name,birthday){

    return async dispatch =>  {
        dispatch({
            type:CHILD.CHILD_ADD
        });

        const user = await Parse.User.currentAsync();
        if (user){
            let ChildInfo = Parse.Object.extend('ChildInfo');
            let childInfo = new ChildInfo();

            childInfo.set('birthday',birthday);
            childInfo.set('name',name);

            childInfo.save(null,{
                success: function (childInfo) {
                    let child = {
                        birthday:childInfo.get('birthday'),
                        name:childInfo.get('name'),
                    };
                    dispatch({
                        type:CHILD.CHILD_ADD_SUCCESS,
                        child
                    })
                },
                error: function (childInfo, error) {
                    console.log(error);
                    dispatch({
                        type:CHILD.CHILD_ADD_ERROR,
                        error
                    })
                }});
        }else {
            //没有登录跳转到登录页面
            dispatch({
                type:LOGIN.LOGOUT
            })
        }

    }
}

module.exports = {
    addChild,
    loadChild
};