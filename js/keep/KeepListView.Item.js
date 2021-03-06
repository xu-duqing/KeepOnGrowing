/**
 * Created by Guang on 16/5/19.
 */

import React from 'react'

import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import {Text} from 'KGText';
import * as KGColor from 'KGColor'

export default class KeepListViewItem extends React.Component{

    renderFirst(keep){
        return(
            <View style={styles.contentBox}>
                <Text style={styles.titleText} numberOfLines={1}>
                    {`第一次:${keep.keynote}`}
                </Text>

                <Text style={styles.subtitleText} numberOfLines={2}>
                    {keep.description}
                </Text>
            </View>
        )
    }

    renderPowderedMilk(keep){
        const date = new Date(keep.startTime);

        return(
            <View style={styles.contentBox}>
                <Text style={styles.titleText} numberOfLines={1}>
                    {`吃奶粉:${keep.volume}ML`}
                </Text>

                <Text style={styles.subtitleText} numberOfLines={2}>
                    {`${date.getHours()}:${date.getMinutes()}`}
                </Text>
            </View>
        )
    }

    renderHeight(keep){
        return(
            <View style={styles.contentBox}>
                <Text style={styles.titleText} numberOfLines={1}>
                    {`身高:${keep.height}厘米`}
                </Text>

                <Text style={styles.subtitleText} numberOfLines={2}>
                    哈哈哈 还有什么
                </Text>
            </View>
        )
    }

    renderBreastMilk(keep){
        const startDate = new Date(keep.startTime);
        const endDate = new Date(keep.endTime);
        return(
            <View style={styles.contentBox}>
                <Text style={styles.titleText} numberOfLines={1}>
                    吃母乳
                </Text>

                <Text style={styles.subtitleText} numberOfLines={2}>
                    {`开始: ${startDate.getHours()}:${startDate.getMinutes()}  结束: ${endDate.getHours()}:${endDate.getMinutes()}`}
                </Text>
            </View>
        )
    }

    renderShit(keep){
        const date = new Date(keep.startTime);
        return(
            <View style={styles.contentBox}>
                <Text style={styles.titleText} numberOfLines={1}>
                    大便
                </Text>

                <Text style={styles.subtitleText} numberOfLines={2}>
                    {`${date.getHours()}:${date.getMinutes()}`}
                </Text>
            </View>
        )
    }

    renderSleep(keep){
        const startDate = new Date(keep.startTime);
        const endDate = new Date(keep.endTime);

        return(
            <View style={styles.contentBox}>
                <Text style={styles.titleText} numberOfLines={1}>
                    睡觉
                </Text>

                <Text style={styles.subtitleText} numberOfLines={2}>
                    {`开始: ${startDate.getHours()}:${startDate.getMinutes()}  结束: ${endDate.getHours()}:${endDate.getMinutes()}`}
                </Text>
            </View>
        )
    }

    renderWeight(keep){
        return(
            <View style={styles.contentBox}>
                <Text style={styles.titleText} numberOfLines={1}>
                    {`体重:${keep.weight}千克`}
                </Text>

                <Text style={styles.subtitleText} numberOfLines={2}>
                    哈哈哈 还有什么
                </Text>
            </View>
        )
    }

    renderContent(data){

        switch (data.type){
            case "first":
                return this.renderFirst(data);
            case "powderedMilk":
                return this.renderPowderedMilk(data);
            case "height":
                return this.renderHeight(data);
            case "breastMilk":
                return this.renderBreastMilk(data);
            case "shit":
                return this.renderShit(data);
            case "sleep":
                return this.renderSleep(data);
            case "weight":
                return this.renderWeight(data);
            default:
                return null
        }
    }

    render(){
        const {startTime} = this.props.data;
        const date = new Date(startTime||0);

        let iconImg;

        switch (this.props.data.type)
        {
            case "height":
                iconImg = require('./img/ic_shengao.png');
                break;
            case "weight":
                iconImg = require('./img/ic_tizhong.png');
                break;
            case "sleep":
                iconImg = require('./img/ic_shuijiao.png');
                break;
            case "breastMilk":
                iconImg = require('./img/ic_muru.png');
                break;
            case "first":
                iconImg = require('./img/ic_diyici.png');
                break;
            case "powderedMilk":
                iconImg = require('./img/ic_naifen.png');
                break;
            case "shit":
                iconImg = require('./img/ic_bianbian.png');
                break;
        }

        return(
            <View style={[styles.itemBox,{backgroundColor:this.props.backgroundColor}]}>
                <View style={styles.dateBox}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:this.props.textColor}}>
                        {`${date.getMonth() + 1}月${date.getDate()}`}
                    </Text>
                    <Text style={{fontSize:16,color:this.props.textColor}}>
                        {date.getFullYear()}
                    </Text>
                </View>

                <View style={{alignItems:'center',marginLeft:11}}>
                    <View style={{flex: 1,width: 1,backgroundColor:'#FFF'}}/>
                    <View style={styles.iconBox}>
                        <Image style={styles.iconImg} source = {iconImg}/>
                    </View>
                    <View style={{flex: 2,width: 1,backgroundColor:'#FFF'}}/>
                </View>

                {this.renderContent(this.props.data)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemBox:{
        flexDirection:'row',
        height:100,
        backgroundColor:"#f7a7aa"
    },
    dateBox:{
        paddingTop:23,
        alignItems:'flex-end',
        width:70
    },
    iconBox:{
        width:32,
        height:32,
        borderRadius:16,
        borderWidth:2,
        borderColor:'#f8bfbe',
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center'
    },
    iconImg:{
        width:18,
        height:18
    },
    contentBox:{
        flex:1,
        paddingTop:23,
        paddingLeft:11,
        paddingRight:11
    },
    titleText:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'
    },
    subtitleText:{
        fontSize:16,
        color:'#FFF',
        marginTop:6
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