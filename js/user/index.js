/**
 * Created by Guang on 16/6/8.
 */

"use strict";

import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'

import KGHeader from '../common/KGHeader';
import {Text} from 'KGText'
import * as KGColor from 'KGColor'


export default class UserPage extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            tag:1
        };
    }




    render(){
        return(
            <View style={{flex:1}}>
                <KGHeader title='用户信息' style={{backgroundColor:KGColor.primaryHeader}}/>
                <View style={styles.headerBox}>

                    <View style={styles.headPortraitBox}>
                        <Image style={styles.headerImg} source = {require('./img/ic_header.png')}></Image>
                    </View>
                    <Text style={styles.nameText}>许书筠</Text>
                    <Text style={styles.xiaoNameText}>小诺</Text>

                </View>

                <View style={styles.contentItemBox}>

                    <Image style={styles.iconImg} source={require('../keep/img/ic_rili.png')}></Image>

                    <View style={styles.textItemBox}>
                        <Text style={styles.keyText}>
                            出生日期
                        </Text>

                        <Text style={styles.valText}>
                            2016年5月16日
                        </Text>

                    </View>

                </View>
                <View style={styles.line} />

                <View style={styles.contentItemBox}>

                    <Image style={styles.iconImg} source={require('../keep/img/ic_rili.png')}></Image>

                    <View style={styles.textItemBox}>
                        <Text style={styles.keyText}>
                            性别
                        </Text>

                        <Text style={styles.valText}>
                            女
                        </Text>

                    </View>

                </View>
                <View style={styles.line} />

                <View style={styles.contentItemBox}>

                    <Image style={styles.iconImg} source={require('../keep/img/ic_rili.png')}></Image>

                    <View style={styles.textItemBox}>
                        <Text style={styles.keyText}>
                            血型
                        </Text>

                        <Text style={styles.valText}>
                            AB
                        </Text>

                    </View>

                </View>
                <View style={styles.line} />

                <View style={styles.contentItemBox}>

                    <Image style={styles.iconImg} source={require('../keep/img/ic_rili.png')}></Image>

                    <View style={styles.textItemBox}>
                        <Text style={styles.keyText}>
                            体重
                        </Text>

                        <Text style={styles.valText}>
                            3.2KG
                        </Text>

                    </View>

                </View>
                <View style={styles.line} />

                <View style={styles.contentItemBox}>

                    <Image style={styles.iconImg} source={require('../keep/img/ic_rili.png')}></Image>

                    <View style={styles.textItemBox}>
                        <Text style={styles.keyText}>
                            身高
                        </Text>

                        <Text style={styles.valText}>
                            38CM
                        </Text>

                    </View>

                </View>
                <View style={styles.line} />
                
            </View>
        )
    }
}




const styles = StyleSheet.create({
    actionBox:{
        backgroundColor:KGColor.primaryHeader,
        justifyContent:'center',
        flexDirection: 'row',
        padding:11,
        flexWrap:'wrap'
    },

    headerBox:{
        backgroundColor:KGColor.primaryHeader,
        justifyContent:'center',
        alignItems:'center',
        height:200
    },

    contentItemBox:{
        padding:16,
        alignItems:'center',
        flexDirection: 'row'
    },

    line:{
        height:1,
        backgroundColor:"#ffe1e2"
    },

    textItemBox:{
        marginLeft:16
    },
    headerImg:{
        width:70,
        height:70,
        borderRadius:35
    },

    iconImg:{
        width:24,
        height:24
    },

    nameText:{
        fontSize:18,
        color:'#FFF',
        marginTop:5,
        fontWeight:'bold'
    },

    keyText:{
        fontSize:14,
        color:KGColor.primaryHeader,
        fontWeight:'bold'
    },

    valText:{
        fontSize:16,
        color:KGColor.primary,
        marginTop:5,
        fontWeight:'bold'
    },

    xiaoNameText:{
        fontSize:14,
        color:'#FFF',
        marginTop:5
    },

    headPortraitBox:{
        width:76,
        height:76,
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:38
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