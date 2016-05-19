/**
 * Created by Guang on 16/5/19.
 */

import {KEEP} from '../action/types';
import {getDayTime} from '../utils/date_utils';

const initializeState = {
    data:{}
};

export default function keep(state = initializeState,action){
    switch (action.type){
        case KEEP.ADD_FIRST:
            return Object.assign({},state,{
                data:assembleKeeps(state.data,action.keep)
            });
        default:
            return state
    }
}

function assembleKeeps(dataSource,keep){
    const keyDay = getDayTime(keep.time);

    if (dataSource[keyDay]){
        //fixme 暂时不做处理
    }else {
        dataSource[keyDay] = [];
    }
    dataSource[keyDay].push(keep);
    return dataSource
}