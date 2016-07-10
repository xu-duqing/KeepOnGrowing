/**
 * Created by Guang on 16/5/19.
 */

import {KEEP,LOGIN} from '../action/types';

const initializeState = {
    data:[],
    isAdding:false,
    isLoading:false,
    isFinish:false,
    heights:[],
    weights:[]
};

export default function keep(state = initializeState,action){
    switch (action.type){
        case KEEP.ADD_KEEP:
            return Object.assign({},state,{
                isAdding:true,
                isFinish:false
            });
        case KEEP.ADD_SUCCESS:
            return Object.assign({},state,{
                isAdding:false,
                isFinish:true
            });
        case KEEP.ADD_ERROR:
            return Object.assign({},state,{
                isAdding:false,
                isFinish:false
            });
        case KEEP.LEAD_KEEP:
            return Object.assign({},state,{
                isLoading:true,
            });
        case KEEP.LEAD_SUCCESS:
            return Object.assign({},state,{
                isLoading:false,
                data:action.keeps,
                heights:action.heights,
                weights:action.weights,
                lastHeight:action.lastHeight,
                lastWeight:action.lastWeight
            });
        case KEEP.LEAD_ERROR:
            return Object.assign({},state,{
                isLoading:false
            });
        case LOGIN.LOGOUT:{
            return initializeState;
        }
        default:
            return state
    }
}