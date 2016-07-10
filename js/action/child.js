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
                    sex:item.get('sex'),
                    id:item.id
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

function editBirthday(birthday){

    return (dispatch,getState) =>{
        let ChildInfo = Parse.Object.extend('ChildInfo');
        var childInfo = new Parse.Query(ChildInfo);

        childInfo.get(getState().child.childs[0].id,{
            success: function(childInfo) {
                childInfo.set('birthday',birthday)
                childInfo.save(null,{
                    success: function(childInfo){
                        dispatch(loadChild());
                    },
                    error: function(object, error) {
                        console.log(error);
                    }
                })
            },
            error: function(object, error) {
                console.log(error);
            }
        })

    }
}

function editName(name){
    return (dispatch,getState) =>{
        let ChildInfo = Parse.Object.extend('ChildInfo');
        var childInfo = new Parse.Query(ChildInfo);

        childInfo.get(getState().child.childs[0].id,{
            success: function(childInfo) {
                childInfo.set('name',name);
                childInfo.save(null,{
                    success: function(childInfo){
                        dispatch(loadChild());
                    },
                    error: function(object, error) {
                        console.log(error);
                    }
                })
            },
            error: function(object, error) {
                console.log(error);
            }
        })

    }
}

function editSex(sex){
    return (dispatch,getState) =>{
        let ChildInfo = Parse.Object.extend('ChildInfo');
        var childInfo = new Parse.Query(ChildInfo);

        childInfo.get(getState().child.childs[0].id,{
            success: function(childInfo) {
                childInfo.set('sex',sex);
                childInfo.save(null,{
                    success: function(childInfo){
                        dispatch(loadChild());
                    },
                    error: function(object, error) {
                        console.log(error);
                    }
                })
            },
            error: function(object, error) {
                console.log(error);
            }
        })

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
                    dispatch(loadChild());
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
    loadChild,
    editBirthday,
    editName,
    editSex
};