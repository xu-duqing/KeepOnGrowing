/**
 * Created by Guang on 16/5/19.
 */

import React,{
    View
} from 'react-native'
import {Text} from 'KGText';

export default class KeepListViewItem extends React.Component{

    render(){
        return(
            <View>
                <View>
                    <Text>第一次:</Text>
                    <Text>抬头</Text>
                </View>
            </View>
        )
    }
}

const styles = React.StyleSheet.create({

});