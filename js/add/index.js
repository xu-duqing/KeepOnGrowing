/**
 * Created by Guang on 16/6/8.
 */

"use strict";

import React from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'

import KGHeader from '../common/KGHeader';
import {Text} from 'KGText'
import * as KGColor from 'KGColor'
import ActionButton from 'react-native-action-button';
import AddPowderedMilk from './AddPowderedMilk';
import AddBreastMilk from './AddBreastMilk';
import AddShit from './AddShit';
import AddSleep from './AddSleep';
import AddFirst from './AddFirst';
import AddWeight from './AddWeight';
import AddHeight from './AddHeight';


class AddButton extends React.Component{

    render(){
        return(
            <TouchableOpacity style={styles.btnBox} onPress={this.props.onPress}>
                <Text style={{fontSize:14,color:'#e8888c'}}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        )
    }
}


export default class AddPage extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            tag:1
        };
    }

    renderContent() {
        if (this.state.tag == 1){
            return <AddPowderedMilk/>;
        }else if (this.state.tag == 2) {
            return <AddBreastMilk/>;
        }else if (this.state.tag == 3) {
            return <AddSleep/>;
        }else if (this.state.tag == 4) {
            return <AddShit/>;
        }else if (this.state.tag == 5) {
            return <AddFirst/>;
        }else if (this.state.tag == 6) {
            return <AddHeight/>;
        }else if (this.state.tag == 7) {
            return <AddWeight/>;
        }
    }

    onPress(id){
        this.setState({
                tag:id
            })

    }


    render(){
        return(
            <View style={{flex:1}}>
                <KGHeader title='新的记录' style={{backgroundColor:KGColor.primary}}/>
                <View style={styles.actionBox}>
                    <AddButton name="吃奶粉啦" onPress={() =>{
                        this.onPress(1)
                    }}/>
                    <AddButton name="喂母乳" onPress={() =>{
                        this.onPress(2)
                    }}/>
                    <AddButton name="睡觉觉" onPress={() =>{
                        this.onPress(3)
                    }}/>
                    <AddButton name="拉臭臭" onPress={() =>{
                        this.onPress(4)
                    }}/>
                    <AddButton name="第一次" onPress={() =>{
                        this.onPress(5)
                    }}/>
                    <AddButton name="量身高" onPress={() =>{
                        this.onPress(6)
                    }}/>
                    <AddButton name="称体重" onPress={() =>{
                        this.onPress(7)
                    }}/>

                </View>

                {this.renderContent()}

                <ActionButton
                    offsetX = {Dimensions.get('window').width/2 - 30}
                    buttonColor="#FF6666"
                    onPress={() => {

                    }}/>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    actionBox:{
        backgroundColor:KGColor.primary,
        justifyContent:'center',
        flexDirection: 'row',
        padding:11,
        flexWrap:'wrap'
    },
    btnBox:{
        height:32,
        backgroundColor:'#FFF',
        justifyContent:'center',
        borderRadius:16,
        paddingLeft:10,
        paddingRight:10,
        marginTop:6,
        marginRight:10
    }
});