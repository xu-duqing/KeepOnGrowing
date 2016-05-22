/**
 * Created by Guang on 16/5/19.
 */

import {KEEP} from '../action/types';

const initializeState = {
    data:[]
};

export default function keep(state = initializeState,action){
    switch (action.type){
        case KEEP.ADD_FIRST:
            return Object.assign({},state,{
                data:action.keeps
            });
        case KEEP.KEEP_CLEAR:{
            return{
                data:[]
            }
        }
        default:
            return state
    }
}