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

export default class EditSlide extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            text:'',
            value:10
        };
    }

    render(){
        const {title} = this.props;
        return(
            <View style={styles.box} >

                <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginTop:10}}>
                    <Text style={styles.textTitle}>
                        {title}
                    </Text>

                    <Text style={styles.textTitle}>
                        {`${this.state.value}毫升`}
                    </Text>
                </View>

                <View style={{
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    marginBottom:10}}>
                    <Slider
                        value={this.state.value}
                        minimumValue={10}
                        maximumValue={200}
                        onValueChange={(value) => this.setState({value:Math.round(value)})} />
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
        borderBottomColor:'#f0f0f0',
    },
    textTitle:{
        fontSize:15,
        color:"#727480"
    }
});