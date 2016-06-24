/**
 * Created by Guang on 16/6/24.
 */

"use strict";

import {CHILD,LOGIN} from '../action/types'

const initializeState = {
    isAdding:false,
    childs:[],
    isError:false,
    isLoading:false
};

export default function child(state=initializeState,action){
    switch (action.type){
        case CHILD.CHILD_ADD:
            return Object.assign({},state,{
                isAdding:true
            });
        case CHILD.CHILD_ADD_SUCCESS:
            state.childs.push(action.child);
            return Object.assign({},state,{
                isAdding:false,
                childs:state.childs
            });
        case CHILD.CHILD_ADD_ERROR:
            return Object.assign({},state,{
                isAdding:false
            });
        case LOGIN.LOGOUT:
            return initializeState;
        case CHILD.CHILD_LOAD:
            return Object.assign({},state,{
                isLoading:true
            });
        case CHILD.CHILD_LOAD_ERROR:
            return Object.assign({},state,{
                isLoading:false
            });
        case CHILD.CHILD_LOAD_SUCCESS:
            return{
                isLoading:false,
                childs:action.childs
            };
        default:
            return state
    }
}