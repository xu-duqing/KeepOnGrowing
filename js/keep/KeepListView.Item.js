/**
 * Created by Guang on 16/5/19.
 */

import React,{
    View
} from 'react-native'
import {Text} from 'KGText';

export default class KeepListViewItem extends React.Component{

    render(){
        const data = this.props.data;
        let title ='';
        if (data.type == 'first'){
            title = data.keynote
        }else if (data.type == 'height'){
            title = data.height
        }else {
            title = data.weight
        }
        return(
            <View style={styles.itemBox}>
                <Text>{data.typeName}:</Text>
                <View style={{flex:1}}>
                    <Text>{title}</Text>
                </View>
            </View>
        )
    }
}

const styles = React.StyleSheet.create({
    itemBox:{
        flexDirection:'row',
        padding:11,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    line:{
        flex:1,
        height:1,
        backgroundColor:"#ccc"
    }
});