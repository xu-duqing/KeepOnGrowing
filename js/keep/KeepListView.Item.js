/**
 * Created by Guang on 16/5/19.
 */

import React,{
    View,
    Image
} from 'react-native'
import {Text} from 'KGText';
import * as KGColor from 'KGColor'


export default class KeepListViewItem extends React.Component{

    renderContent(data){
        if(data == 1){
            return(
                <View style={styles.contentBox}>
                    <Text style={styles.titleText} numberOfLines={1}>
                        吃奶粉:80ML
                    </Text>

                    <Text style={styles.subtitleText} numberOfLines={2}>
                        12:09
                    </Text>
                </View>
            )
        }else if (data == 2){
            return(
                <View style={styles.contentBox}>
                    <Text style={styles.titleText} numberOfLines={1}>
                        吃母乳
                    </Text>

                    <Text style={styles.subtitleText} numberOfLines={2}>
                        开始时间: 12:09  结束时间: 12:40
                    </Text>
                </View>
            )
        }else if(data == 3){
            return(
                <View style={styles.contentBox}>
                    <Text style={styles.titleText} numberOfLines={1}>
                        吃母乳
                    </Text>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.subtitleText} numberOfLines={2}>
                            开始时间: 12:09
                        </Text>

                        <View style={styles.btnBox}>
                            <Text style={{fontSize:14,color:'#e8888c'}}>
                                吃饱了
                            </Text>
                        </View>
                    </View>
                </View>
            )
        }else if (data == 4){
            return(
                <View style={styles.contentBox}>
                    <Text style={styles.titleText} numberOfLines={1}>
                        睡觉
                    </Text>

                    <Text style={styles.subtitleText} numberOfLines={2}>
                        开始时间: 12:09  结束时间: 12:40
                    </Text>
                </View>
            )
        }else if(data == 5){
            return(
                <View style={styles.contentBox}>
                    <Text style={styles.titleText} numberOfLines={1}>
                        睡觉
                    </Text>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.subtitleText} numberOfLines={2}>
                            开始时间: 12:09
                        </Text>

                        <View style={styles.btnBox}>
                            <Text style={{fontSize:14,color:'#e8888c'}}>
                                宝宝醒了
                            </Text>
                        </View>
                    </View>
                </View>
            )
        }else if(data == 6){
            return(
                <View style={styles.contentBox}>
                    <Text style={styles.titleText} numberOfLines={1}>
                        大便
                    </Text>

                    <Text style={styles.subtitleText} numberOfLines={2}>
                        12:09
                    </Text>
                </View>
            )
        }else {
            return(
                <View style={styles.contentBox}>
                    <Text style={styles.titleText} numberOfLines={1}>
                        第一次:练习抬头
                    </Text>

                    <Text style={styles.subtitleText} numberOfLines={2}>
                        竟然坚持了2分多种,宝宝你太厉害啦
                    </Text>
                </View>
            )
        }
    }

    render(){

        const backgroundColor = this.props.data%2 === 0?'#f7a7aa':'#e9808e';

        return(
            <View style={[styles.itemBox,{backgroundColor:backgroundColor}]}>
                <View style={styles.dateBox}>
                    <Text style={[{fontWeight:'bold'},styles.dateText]}>
                        5月31
                    </Text>
                    <Text style={styles.dateText}>
                        2016
                    </Text>
                </View>

                <View style={{alignItems:'center'}}>
                    <View style={{flex: 1,width: 1,backgroundColor:'#FFF'}}/>
                    <View style={styles.iconBox}/>
                    <View style={{flex: 2,width: 1,backgroundColor:'#FFF'}}/>
                </View>

                {this.renderContent(this.props.data)}
            </View>
        )
    }
}

const styles = React.StyleSheet.create({
    itemBox:{
        flexDirection:'row',
        height:100,
        backgroundColor:"#f7a7aa"
    },
    dateBox:{
        flex:1,
        paddingRight:11,
        paddingTop:23,
        alignItems:'flex-end'
    },
    dateText:{
        fontSize:18,
        color:KGColor.primaryText
    },
    iconBox:{
        width:32,
        height:32,
        borderRadius:16,
        borderWidth:2,
        borderColor:'#f8bfbe',
        backgroundColor:'#FFF'
    },
    contentBox:{
        flex:4,
        paddingTop:23,
        paddingLeft:11,
        paddingRight:11
    },
    titleText:{
        fontSize:18,
        color:'#FFF'
    },
    subtitleText:{
        fontSize:14,
        color:'#FFF',
        marginTop:10
    },
    btnBox:{
        height:32,
        backgroundColor:'#FFF',
        justifyContent:'center',
        borderRadius:16,
        paddingLeft:14,
        paddingRight:14,
        marginLeft:8
    }
});