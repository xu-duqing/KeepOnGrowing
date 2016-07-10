/**
 * Created by Guang on 16/6/13.
 */

"use strict";

import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Slider
} from 'react-native'

export default class EditHeightSlide extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            value:3
        };
    }

    getValue(){
        return this.state.value;
    }

    render(){
        const {title} = this.props;
        return(
            <View style={styles.box} >

                <View style={{flexDirection:'row',flex:1,marginTop:10}}>
                    <Text style={styles.textTitle}>
                        {title}
                    </Text>

                    <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end'}}>
                        <Text style={styles.valueTitle}>
                            {this.state.value}
                        </Text>
                        <Text style={[styles.textTitle,{marginTop:5}]}>KG</Text>
                    </View>

                </View>

                <View style={{
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    marginBottom:10}}>
                    <Slider
                        value={this.state.value}
                        minimumValue={2}
                        maximumValue={100}
                        step={0.1}
                        onValueChange={(value) => this.setState({value:value})} />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        marginLeft:19,
        marginRight:19,
        borderBottomWidth:1,
        borderBottomColor:'#f0f0f0'
    },
    valueTitle:{
        alignSelf:"flex-end",
        fontSize:18,
        color:"#e7888c"
    },
    textTitle:{
        fontSize:15,
        color:"#727480"
    }
});