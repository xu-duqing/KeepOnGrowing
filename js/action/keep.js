/**
 * Created by Guang on 16/5/19.
 */

import {KEEP} from './types';

function addFirst(action:{}){
    return (dispatch,getState) =>{
        let keeps = getState().keep.data;
        keeps.push(action);
        dispatch({
            type:KEEP.ADD_FIRST,
            keeps
        })
    }
}

function keepClear(){
    return{
        type:KEEP.KEEP_CLEAR
    }
}

module.exports = {
    addFirst,
    keepClear
};