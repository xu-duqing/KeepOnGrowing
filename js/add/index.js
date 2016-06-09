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



export default class AddPage extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            tag:1
        };
    }

    renderContent()
    {
        if (this.state.tag == 1)
        {
            return <AddPowderedMilk/>;
        }else if (this.state.tag == 2)
        {
            return <AddBreastMilk/>;
        }else if (this.state.tag == 3)
        {
            return <AddSleep/>;
        }else if (this.state.tag == 4)
        {
            return <AddShit/>;
        }else if (this.state.tag == 5)
        {
            return <AddFirst/>;
        }else if (this.state.tag == 6)
        {
            return <AddHeight/>;
        }else if (this.state.tag == 7)
        {
            return <AddWeight/>;
        }
    }

    onPress(id){
        this.setState(
            {
                tag:id
            }
        )

    }


    render(){



        return(
            <View style={{flex:1}}>
                <KGHeader title='新的记录' style={{backgroundColor:KGColor.primary}}/>
                <View style={styles.actionBox}>
                    <TouchableOpacity onPress={() => this.onPress(1)}>
                        <View style={styles.btnBox}>
                            <Text style={{fontSize:14,color:'#e8888c'}}>
                                吃奶粉
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onPress(2)}>
                        <View style={styles.btnBox}>
                            <Text style={{fontSize:14,color:'#e8888c'}}>
                                喂母乳
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onPress(3)}>
                        <View style={styles.btnBox}>
                            <Text style={{fontSize:14,color:'#e8888c'}}>
                                睡觉觉
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onPress(4)}>
                        <View style={styles.btnBox}>
                            <Text style={{fontSize:14,color:'#e8888c'}}>
                                拉臭臭
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onPress(5)}>
                        <View style={styles.btnBox}>
                            <Text style={{fontSize:14,color:'#e8888c'}}>
                                第一次
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onPress(6)}>
                        <View style={styles.btnBox}>
                            <Text style={{fontSize:14,color:'#e8888c'}}>
                                量身高
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onPress(7)}>
                        <View style={styles.btnBox}>
                            <Text style={{fontSize:14,color:'#e8888c'}}>
                                称体重
                            </Text>
                        </View>
                    </TouchableOpacity>

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