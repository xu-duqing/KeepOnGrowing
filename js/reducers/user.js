/**
 * Created by Guang on 16/6/10.
 */

import {LOGIN} from '../action/types';

const initializeState = {
    isLogin:false
};

export default function user(state = initializeState,action){
    switch (action.type){
        case LOGIN.LOGIN:
            return {
                user:action.user,
                isLogin:true
            };
        case LOGIN.LOGOUT:{
            return initializeState;
        }
        case LOGIN.LOGIN_ERROR:{
            return{
                error:action.error,
                isLogin:false
            }
        }
        default:
            return state
    }
}