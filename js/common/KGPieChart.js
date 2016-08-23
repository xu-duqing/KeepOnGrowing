/**
 * Created by Guang on 16/7/1.
 */

"use strict";

import React from 'react'

import {
    View,
    StyleSheet,
    ART
} from 'react-native'

import Wedge from './Wedge'
const {Surface, Shape, Path,Group} = ART;


export default class KGPie extends React.Component{



    render(){

        const pathCircle = new Path()
            .moveTo(50,10)
            .arc(0,80,1)
            .arc(0,-80,1)
            .close();

        return(
            <View style={[this.props.style,styles.container]}>
                <Surface width={100} height={100}>
                    <Group>
                        <Wedge
                            outerRadius={50}
                            startAngle={225}
                            endAngle={135}
                            originX={50}
                            originY={50}
                            fill="blue"/>
                        <Wedge
                            outerRadius={50}
                            startAngle={225}
                            endAngle={49}
                            originX={50}
                            originY={50}
                            fill="#000"/>

                        <Shape d={pathCircle} fill="#e7888c" />

                    </Group>
                </Surface>
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