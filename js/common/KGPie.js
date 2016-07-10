/**
 * Created by Guang on 16/7/1.
 */

"use strict";

import React from 'react'

import {
    View,
    StyleSheet
} from 'react-native'
import Chart from 'react-native-chart';


export default class KGPie extends React.Component{



    render(){
        const data = [
            [0, 1],
            [1, 3],
            [3, 7],
            [4, 9]
        ];

        return(
            <View style={styles.container}>
                <Chart
                    style={styles.chart}
                    data={data}
                    verticalGridStep={5}
                    type="pie"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:100,
        height:100
    }
});