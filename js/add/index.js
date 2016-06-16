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
import {connect} from 'react-redux'
import DateTimePicker from 'KGDatePicker'
import {
    addFirst,
    addHeight,
    addWeight,
    addShit,
    addSleep,
    addBreastMilk,
    addPowderedMilk
} from '../action';


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

class AddPage extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            tag:"powderedMilk"
        };
    }

    renderContent() {

        let Component;

        switch (this.state.tag){
            case "powderedMilk":
                Component = AddPowderedMilk;
                break;
            case "breastMilk":
                Component = AddBreastMilk;
                break;
            case "sleep":
                Component = AddSleep;
                break;
            case "shit":
                Component = AddShit;
                break;
            case "first":
                Component = AddFirst;
                break;
            case "height":
                Component = AddHeight;
                break;
            case "weight":
                Component = AddWeight;
                break;
            default :
                Component = AddPowderedMilk;
                break
        }

        return <Component ref = {(component) => this.KeepComponent = component } showPicker={(tag) =>{
                this.picker.show(tag)
            }}/>;
    }

    addKeep(data){
        if (!data){
            return;
        }
        let add;
        switch (this.state.tag){
            case "powderedMilk":
                add = addPowderedMilk;
                break;
            case "breastMilk":
                add = addBreastMilk;
                break;
            case "sleep":
                add = addSleep;
                break;
            case "shit":
                add = addShit;
                break;
            case "first":
                add = addFirst;
                break;
            case "height":
                add = addHeight;
                break;
            case "weight":
                add = addWeight;
                break;
            default :
                return
        }

        this.props.dispatch(add(data));

    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fcfcfc'}}>
                <KGHeader title='新的记录' style={{backgroundColor:KGColor.primary}}/>
                <View style={styles.actionBox}>
                    <AddButton name="吃奶粉啦" onPress={() =>{
                        this.setState({tag:"powderedMilk"})
                    }}/>
                    <AddButton name="喂母乳" onPress={() =>{
                        this.setState({tag:"breastMilk"})
                    }}/>
                    <AddButton name="睡觉觉" onPress={() =>{
                        this.setState({tag:"sleep"})
                    }}/>
                    <AddButton name="拉臭臭" onPress={() =>{
                        this.setState({tag:"shit"})
                    }}/>
                    <AddButton name="第一次" onPress={() =>{
                        this.setState({tag:"first"})
                    }}/>
                    <AddButton name="量身高" onPress={() =>{
                        this.setState({tag:"height"})
                    }}/>
                    <AddButton name="称体重" onPress={() =>{
                        this.setState({tag:"weight"})
                    }}/>

                </View>

                {this.renderContent()}

                <ActionButton
                    offsetX = {Dimensions.get('window').width/2 - 30}
                    buttonColor="#FF6666"
                    onPress={() => {
                        this.addKeep(this.KeepComponent.getData());
                    }}/>

                <DateTimePicker ref={(picker) => this.picker = picker} onPress={(date,tag) =>{
                        this.KeepComponent.setTime(date,tag);
                }} />

            </View>
        )
    }
}



const styles = StyleSheet.create({
    actionBox:{
        backgroundColor:KGColor.primary,
        flexDirection: 'row',
        padding:11,
        flexWrap:'wrap'
    },
    btnBox:{
        height:32,
        backgroundColor:'#FFF',
        justifyContent:'center',
        borderRadius:16,
        paddingLeft:16,
        paddingRight:16,
        marginTop:6,
        marginRight:10
    }
});

function select(store) {
    return {
        keep:store.keep
    };
}

module.exports = connect(select)(AddPage);