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
import KGPieChart from '../common/KGPieChart';



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

        return(
            <View style={styles.box}>

                <View style={styles.header}>
                    <Card  color="#f36424" title="今日睡眠" time={12}/>
                    <Card  color="#b02090" title="今日母乳" time={2}/>
                    <Card  color="#00b3d3" title="上次大便" time={2}/>
                </View>

            </View>
        )
    }
}

class Card extends React.Component{

    render(){
        return(
            <View style={styles.cardBox}>
                <KGPieChart rate={this.props.rate} color={this.props.color}>
                    <View style={styles.chartTextBox}>
                        <Text style={styles.chartNum}>
                            {this.props.time}小时
                        </Text>

                        <Text style={styles.chartTitle}>
                            {this.props.title}
                        </Text>
                    </View>
                </KGPieChart>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    chartTextBox: {
        backgroundColor: 'transparent',
        position: 'absolute',
        width: 100,
        height:100,
        top:0
    },
    chartTitle:{
        textAlign: 'center',
        color: '#FFF',
        fontSize: 15,
        marginTop:19
    },

    chartNum:{
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        marginTop:40
    },

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