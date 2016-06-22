/**
 * Created by Guang on 16/4/6.
 */
"use strict";


// 仅限于数字
const prefixInteger = (num, length) => {
    return (num / Math.pow(10, length)).toFixed(length).substr(2);
};


export default{
    prefixInteger,
}

