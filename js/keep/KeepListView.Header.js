/**
 * Created by Guang on 16/5/19.
 */

import React,{
    View,
    Image,
    Dimensions
} from 'react-native'


import ViewPager from 'react-native-viewpager';
import {Text} from 'KGText';
import * as KGColor from 'KGColor'

const BANNER_IMGS = [
    {icon:require('./img/ic_henainai.png'), title:"3小时前喝的奶", msg:"想饿死宝宝啊"},
    {icon:require('./img/ic_weishi.png'), title:"5小时前吃的米汤", msg:"宝宝现在还要吃"},
    {icon:require('./img/ic_lachouchou.png'), title:"2小时前拉臭臭", msg:"宝宝现在感觉来了"},
    {icon:require('./img/ic_xuxu.png'), title:"3小时前嘘嘘", msg:"喂我那么多水,想逼死宝宝啊"}
];


export default class KeepListViewHeader extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2
        });
        // 初始状态
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        };

    }

    _renderPage(data, pageID) {
        return (
            <View style={{backgroundColor:"#fff"}}>
                <Text style={styles.pageTopText}>
                    {data.title}
                </Text>
                <Image
                    source={data.icon}
                    style={styles.page}>
                </Image>
                <Text style={styles.pageBottomText}>
                    {data.msg}
                </Text>
            </View>
        );
    }

    render(){


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
                    dataSource={this.state.dataSource}
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

const styles = React.StyleSheet.create({

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
        height: 120
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
        paddingBottom:5,
        paddingRight:16,
        fontWeight:'bold',
        alignSelf:"flex-end",
        color:'#e7888c'
    }
});