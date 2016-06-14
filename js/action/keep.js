/**
 * Created by Guang on 16/5/19.
 */

import {KEEP} from './types';
var Parse = require('parse/react-native');


function addFirst(keep:{}){

    return (dispatch,getState) =>{

        let KeepFirst = Parse.Object.extend("KeepFirst");
        let keepFirst = new KeepFirst();

        keepFirst.set("keynote","抬头");
        keepFirst.set("description","你的每一点变化都那么让人欣喜");
        keepFirst.set("startTime",new Date().getMilliseconds());
        keepFirst.set("uid",getState().user.user.id);

        keepFirst.save(null,{
            success: function (keepFirst) {
                console.log(keepFirst)
            },
            error: function (keepFirst, error) {
                console.log(error)
            }
        });

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