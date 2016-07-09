/**
 * Created by Guang on 16/7/1.
 */

"use strict";

import React,{
    View
} from 'react-native'

import Svg, {
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-art-svg';


export default class KGPie extends React.Component{

    render(){
        return(
            <View>
                <Svg
                    height="100"
                    width="110"
                >
                    <Circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill="pink"
                    />
                </Svg>
            </View>
        )
    }
}