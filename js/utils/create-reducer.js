/**
 * Created by Guang on 16/4/1.
 */

"use strict";

export default function createReducer(initialState , actionHandlers){
    return (state = initialState,action) =>{
        const reducerFun = actionHandlers[action.type];

        if (!reducerFun) return state;

        return{...state,...reducerFun(state,action)}
    }
}