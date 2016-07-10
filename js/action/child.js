/**
 * Created by Guang on 16/6/23.
 */

"use strict";

import {CHILD,LOGIN} from './types';
var Parse = require('parse/react-native');

function loadChild(){
    return dispatch =>{
        dispatch({
            type:CHILD.CHILD_LOAD
        });

        let query = new Parse.Query('ChildInfo');

        query.find().then(function(results) {

            let childs = [];
            results.forEach(item =>{

                childs.push({
                    birthday:item.get('birthday'),
                    name:item.get('name'),
                    sex:item.get('sex')
                });
            });

            console.log(childs);
            dispatch({
                type:CHILD.CHILD_LOAD_SUCCESS,
                childs
            });
        },function(error){
            console.log(error);
            dispatch({
                type:CHILD.CHILD_LOAD_ERROR
            });
        });
    }
}

function addChild(name,birthday,sex,onSuccess){

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
            childInfo.set('sex',sex);
            childInfo.setACL(new Parse.ACL(user));

            childInfo.save(null,{
                success: function (childInfo) {
                    let child = {
                        birthday:childInfo.get('birthday'),
                        name:childInfo.get('name'),
                    };
                    dispatch({
                        type:CHILD.CHILD_ADD_SUCCESS,
                        child
                    });
                    onSuccess && onSuccess()
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