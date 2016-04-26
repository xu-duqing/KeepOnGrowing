/**
 * Created by Guang on 16/4/26.
 */

import {EXAMPLE} from '../action/types';

export default function count(state = {count :0},action={}){
    switch (action.type){
        case EXAMPLE.ADD:
            return{
                count:state.count +1
            };
        case EXAMPLE.REDUCE:
            return{
                count:state.count - 1
            };
        default:
            return state
    }
}

