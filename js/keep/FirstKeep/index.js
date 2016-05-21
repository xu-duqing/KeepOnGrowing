/**
 * Created by Guang on 16/5/20.
 */

import React,{
    View,
    Text
} from 'react-native'
import KGHeader from 'KGHeader'

export default class FirstKeep extends React.Component{

    render(){
        return(
            <View>
                <KGHeader title="记录第一次" leftItem={{icon:require('../../common/img/back.png'),onPress:() =>{
                    this.props.navigator.pop()}}}/>

            </View>
        )
    }
}