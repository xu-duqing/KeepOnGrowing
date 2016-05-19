/**
 * Created by Guang on 16/5/17.
 */
import React,{
    Platform,
    View,
    ToolbarAndroid,
    TouchableOpacity
} from 'react-native'

import {Text} from 'KGText';

class KGHeaderAndroid extends React.Component{

    render(){
        return(
            <View style={styles.toolbarContainer}>
                <ToolbarAndroid
                    style={styles.toolbar}
                    title="成长日记"/>
            </View>
        )
    }
}

class KGHeaderIOS extends  React.Component{


    render(){
        return(
            <View style={styles.header}>

                <View style={styles.rightItem}>
                    <ItemWrapperIOS />
                </View>

                <Text style={styles.titleText}>
                    成长日记
                </Text>

                <View style={styles.rightItem}>
                    <ItemWrapperIOS />
                </View>
            </View>
        )
    }
}

class ItemWrapperIOS extends React.Component{

    render(){

        const center =
            <View>
                <Text>
                   添加
                </Text>
            </View>;
        return(
            <TouchableOpacity
                style={styles.itemBox}>
                {center}
            </TouchableOpacity>
        )
    }
}

class KGHeader extends React.Component{

    render(){
        if(Platform.OS == 'ios'){
            return <KGHeaderIOS />
        }else {
            return <KGHeaderAndroid />
        }
    }
}

var STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
var HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

var styles = React.StyleSheet.create({

    header: {
        backgroundColor: 'transparent',
        paddingTop: STATUS_BAR_HEIGHT,
        height: HEADER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toolbarContainer: {
        paddingTop: STATUS_BAR_HEIGHT,
    },
    toolbar: {
        height: HEADER_HEIGHT - STATUS_BAR_HEIGHT,
    },
    titleText:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    itemBox:{
        padding:11
    },
    leftItem:{

    },
    rightItem:{

    }
});

module.exports = KGHeader;