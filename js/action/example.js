/**
 * Created by Guang on 16/4/26.
 */

import {EXAMPLE} from './types';

function add(){
    return{
        type:EXAMPLE.ADD
    }
}

function reduce(){
    return{
        type:EXAMPLE.REDUCE
    }
}

export default{
    add,
    reduce
}