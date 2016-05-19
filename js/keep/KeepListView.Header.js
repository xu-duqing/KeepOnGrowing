/**
 * Created by Guang on 16/5/19.
 */

import React,{
    View
} from 'react-native'

import {Text} from 'KGText';

export default class KeepListViewHeader extends React.Component{

    render(){
        const date = new Date(this.props.time);
        return(
            <View style={styles.header}>
                <Text>{date.getFullYear()}-{date.getMonth()}-{date.getDate()}</Text>
                <Text>0天</Text>
            </View>
        )
    }
}

const styles = React.StyleSheet.create({
   header:{
       justifyContent:'space-between',
       flexDirection:'row',
       padding:11,
       backgroundColor:'#ccc'
   }
});