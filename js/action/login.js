/**
 * Created by Guang on 16/6/10.
 */

import {LOGIN} from './types';
var Parse = require('parse/react-native');

function logIn(name,password){

    return dispatch =>{
        Parse.User.logIn(name,password,{
            success:  (user) => {
                console.log(user);
                dispatch({
                    type:LOGIN.LOGIN
                })
            },
            error: (user,error) => {
                console.log(error);
                dispatch({
                    type:LOGIN.LOGIN_ERROR,
                    error
                })
            }
        })
    }
}

function logOut(){
    return{
        type:LOGIN.LOGOUT,
    }
}

module.exports = {
    logIn,
    logOut
};