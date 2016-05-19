/**
 * Created by Guang on 16/5/19.
 */

import React,{
    View
} from 'react-native'

import {Text} from 'KGText';

export default class KeepListViewHeader extends React.Component{

    render(){
        return(
            <View style={styles.header}>
                <Text>2016-05-07</Text>
                <Text>17天</Text>
            </View>
        )
    }
}

const styles = React.StyleSheet.create({
   header:{
       justifyContent:'space-between'
   }
});