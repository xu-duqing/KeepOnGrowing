/**
 * Created by Guang on 16/5/19.
 */

import React,{
    View,
    Image
} from 'react-native'

import {Text} from 'KGText';
import * as KGColor from 'KGColor'


export default class KeepListViewHeader extends React.Component{

    render(){

        //const card1 = {
        //    date:new Date(),
        //    name:'上次拉臭臭'
        //};
        //
        //const card2 = {
        //    date:new Date(),
        //    name:'上次喝水'
        //};
        //
        //const card3 = {
        //    date:new Date(),
        //    name:'上次喂奶粉'
        //};

        const card1 = {
            date:new Date(),
            path:require('./img/ic_naiping.png')
        };

        const card2 = {
            date:new Date(),
            path:require('./img/ic_shuibei.png')
        };

        const card3 = {
            date:new Date(),
            path:require('./img/ic_baba.png')
        };


        return(
            <View style={styles.header}>
                <Card data = {card1} style={{ backgroundColor:'#4aa5dc'}}/>
                <Card data = {card2} style={{marginLeft:6,marginRight:6, backgroundColor:'#fddb00'}}/>
                <Card data = {card3} style={{ backgroundColor:'#66b8a1'}}/>
            </View>
        )
    }
}
//
//class Card extends React.Component{
//
//    render(){
//
//        const {name,date} = this.props.data;
//
//        //fixme 上次时间的计算未实现
//        return(
//            <View style={[styles.cardBox,this.props.style]}>
//                <View style={styles.dateBox}>
//                    <Text style={styles.timeText}>
//                        24
//                    </Text>
//                    <Text style={styles.unitText}>
//                        小时前
//                    </Text>
//                </View>
//
//                <Text style={styles.nameText}>
//                    {name}
//                </Text>
//            </View>
//        )
//    }
//}

class Card extends React.Component{

    render(){

        const {path,date} = this.props.data;

        //fixme 上次时间的计算未实现
        return(
            <View style={styles.cardBox}>

                <Image style={styles.iconImg} source = {path}></Image>
                <View style={styles.dateBox}>
                    <Text style={styles.timeText}>
                        24
                    </Text>
                    <Text style={styles.unitText}>
                        小时前
                    </Text>
                </View>

            </View>
        )
    }
}

const styles = React.StyleSheet.create({
    header:{
        justifyContent:'space-between',
        flexDirection:'row',
        padding:11,
        backgroundColor:'#e7888c'
    },
    cardBox:{
        flex:1,
        height:92,
        justifyContent:'center',
        alignItems:'center'
    },
    //dateBox:{
    //    flex:1,
    //    margin:1,
    //    backgroundColor:'#fff',
    //    flexDirection:'row',
    //    justifyContent:'center',
    //    alignItems:'center'
    //},

    dateBox:{
        margin:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    iconImg:{
        width:28,
        height:28
    },
    timeText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    },
    unitText:{
        fontSize:12,
        marginTop:4,
        marginLeft:4,
        color:'#fff'
    },
    nameText:{
        fontSize:16,
        color:'#FFF',
        margin:4
    }
});