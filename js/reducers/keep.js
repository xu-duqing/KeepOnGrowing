/**
 * Created by Guang on 16/5/19.
 */

import {KEEP} from '../action/types';

const initializeState = {
    data:[],
    isAdding:false,
    isLoading:false,
    isFinish:false
};

export default function keep(state = initializeState,action){
    switch (action.type){
        case KEEP.ADD_KEEP:
            return Object.assign({},state,{
                isAdding:true
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
        default:
            return state
    }
}