/**
 * Created by Guang on 16/7/10.
 */

"use strict";

import React from 'react'

import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import {Text} from 'KGText'
import EditText from '../add/EditText'


class TabButton extends React.Component{

    render(){
        return(
            <TouchableOpacity style={[this.props.border === 'left'?styles.btnBoxLeft:styles.btnBoxRight,!this.props.isSelect?{backgroundColor:'#FFF'}:{}]} onPress={this.props.onPress}>
                <Text style={{fontSize:14,color: !this.props.isSelect?'#f8bfbe':'#FFF'}}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default class EditSex extends React.Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            select:'女'
        };
      }

    render(){
        return(
            <View style={{flex:1,marginTop:20}}>

                <View style={styles.editBox}>
                    <TabButton name="女"  border='left' isSelect={this.state.select === '女'} onPress={() =>{
                        this.setState({
                            select:'女'
                        })

                        this.props.onChangeText('女');
                    }}/>
                    <TabButton name="男"  border='right' isSelect={this.state.select === '男'} onPress={() =>{
                        this.setState({
                            select:'男'
                        })

                        this.props.onChangeText('男');
                    }}/>
                </View>

                <View style={{margin: 11}}>
                    <Text style={styles.textQA}>
                        你家是宝贝是王子还是公主?
                    </Text>

                    <Text style={[styles.textQA,{marginTop: 8}]}>
                        {
                            this.state.select === '女'?'美丽的小公主':'帅气的小王子'
                        }
                    </Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    editBox:{
        flexDirection:'row',
        backgroundColor:'#f8bfbe',
        borderRadius:8,
        margin:11,
        borderWidth:1,
        borderColor:'#f8bfbe'
    },
    btnBoxLeft:{
        flex:1,
        height:32,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        borderBottomRightRadius:0,
        borderTopRightRadius:0
    },
    btnBoxRight:{
        flex:1,
        height:32,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        borderBottomLeftRadius:0,
        borderTopLeftRadius:0
    },
    textQA:{
        fontSize:15,
        color:"#727480"
    }
});

