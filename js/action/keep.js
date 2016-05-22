/**
 * Created by Guang on 16/5/19.
 */

import {KEEP} from './types';

function addFirst(keep:{}){
    return (dispatch,getState) =>{
        keep.typeName ='第一次';
        keep.type ='first';
        let keeps = getState().keep.data;
        keeps.push(keep);
        dispatch(addKeep(keeps))
    }
}

function addHeight(keep){
    return (dispatch,getState) =>{
        keep.typeName ='身高';
        keep.type ='height';
        let keeps = getState().keep.data;
        keeps.push(keep);
        dispatch(addKeep(keeps))
    }
}

function addWeight(keep){
    return (dispatch,getState) =>{
        keep.typeName ='体重';
        keep.type ='weight';
        let keeps = getState().keep.data;
        keeps.push(keep);
        dispatch(addKeep(keeps))
    }
}

function addKeep(keeps){
    return{
        type:KEEP.ADD_KEEP,
        keeps
    }
}

function keepClear(){
    return{
        type:KEEP.KEEP_CLEAR
    }
}

module.exports = {
    addFirst,
    keepClear,
    addHeight,
    addWeight
};