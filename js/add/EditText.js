/**
 * Created by Guang on 16/6/13.
 */

"use strict";

import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'

export default class EditText extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            text:''
        };
    }

    render(){
        const {title} = this.props;
        return(
            <View style={styles.box} >

                <Text style={styles.textTitle}>
                    {title}
                </Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        height:64,
        marginLeft:19,
        marginRight:19,
        borderBottomWidth:1,
        borderBottomColor:'#f0f0f0',
        alignItems:'center',
        flexDirection:'row'
    },
    textTitle:{
        fontSize:15,
        color:"#727480"
    },
    textInput:{
        height: 40,
        borderColor: '#c8c8c8',
        borderWidth: 1,
        flex:1,
        alignSelf:'center',
        paddingLeft:10,
        marginLeft:10,
        alignItems:'flex-end',
        fontSize:15
    }
});