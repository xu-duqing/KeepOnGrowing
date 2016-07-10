/**
 * Created by Guang on 16/5/19.
 */

import React from 'react'

import {
    View,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native'


import ViewPager from 'react-native-viewpager';
import {Text} from 'KGText';
import * as KGColor from 'KGColor'
import HeightLineChart from './HeightLineChart';



const  dataSource = new ViewPager.DataSource({
    pageHasChanged: (p1, p2) => p1 !== p2
});

export default class KeepListViewHeader extends React.Component{

    // 构造
    constructor(props) {
        super(props);

    }

    _renderPage(data, pageID) {

        return (
            <View style={{backgroundColor:KGColor.primaryHeader}}>
                <HeightLineChart
                         lineData={data.data}/>
                <Text style={styles.pageBottomText}>
                    {data.title}
                </Text>
            </View>
        );
    }

    render(){

        let banner = [
            {data:this.props.dataHeight, title:"宝宝身高"},
            {data:this.props.dataWeight, title:"宝宝体重"}
        ];

        let ds = dataSource.cloneWithPages(banner);

        const card1 = {
            date:"第一次",
            path:require('./img/ic_baba.png')
        };

        const card2 = {
            date:"宝宝发育",
            path:require('./img/ic_shuibei.png')
        };

        const card3 = {
            date:"宝宝喂养",
            path:require('./img/ic_naiping.png')

        };


        return(
            <View style={styles.box}>

                <ViewPager
                    style={{flex:1,height:120}}
                    dataSource={ds}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}/>

                <View style={styles.header}>
                    <Card data = {card1} style={{ backgroundColor:'#4aa5dc'}}/>
                    <Card data = {card2} style={{marginLeft:6,marginRight:6, backgroundColor:'#fddb00'}}/>
                    <Card data = {card3} style={{ backgroundColor:'#66b8a1'}}/>
                </View>

            </View>
        )
    }
}

class Card extends React.Component{

    render(){

        const {path,date} = this.props.data;

        //fixme 上次时间的计算未实现
        return(
            <View style={styles.cardBox}>

                <Image style={styles.iconImg} source = {path}></Image>
                <View style={styles.dateBox}>
                    <Text style={styles.titleText}>
                        {date}
                    </Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    box:{
        backgroundColor:'#e7888c'
    },

    header:{
        flexDirection:'row',
        backgroundColor:'#e7888c'
    },
    cardBox:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    },
    textBox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },

    titleText:{
        fontSize:12,
        marginTop:8,
        fontWeight:'bold',
        color:'#fff'
    },

    line:{
        flex:1,
        height:1,
        backgroundColor:'#fff'
    },

    dateBox:{
        flex:1,
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
        marginRight:4,
        marginLeft:4,
        fontWeight:'bold',
        color:'#fff'
    },
    unitText:{
        fontSize:12,
        marginTop:4,
        color:'#fff'
    },
    nameText:{
        fontSize:16,
        color:'#FFF',
        margin:4
    },
    xxBox:{
        padding:16

    },
    page: {
        flex: 1,
        width:(Dimensions.get('window').width),
        height: 150
    },

    pageTopText: {
        fontSize:14,
        paddingTop:5,
        paddingLeft:16,
        fontWeight:'bold',
        color:'#e7888c'
    },
    pageBottomText: {
        fontSize:14,
        fontWeight:'bold',
        alignSelf:"center",
        marginBottom:20,
        marginTop:8,
        color:'#fff'
    }
});