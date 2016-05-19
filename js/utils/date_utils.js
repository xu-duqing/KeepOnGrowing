/**
 * Created by Guang on 16/5/19.
 */


/**
 * 判断是否同一天
 * @param lastTime
 * @param currentTime
 * @returns {boolean}
 */

function isSameDay(lastTime , currentTime){
    const lastDate = new Date(lastTime);
    const currentDate = new Date(currentTime);

    return !!(lastDate.getFullYear() == currentDate.getFullYear()
    && lastDate.getMonth() == currentDate.getMonth()
    && lastDate.getDate() == currentDate.getDate());
}

/**
 * 返回时间的日期
 * @param time 2016-5-19 12:40:100
 * @returns {number} 2016-5-19 00:00:000
 */
function getDayTime(time){
    const dateTime = new Date(time);
    return new Date(dateTime.getFullYear(),dateTime.getMonth(),dateTime.getDate()).getTime()
};


module.exports = {
    isSameDay,
    getDayTime
};