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
                <KGHeader />
                <Text>
                    第一次编辑页面
                </Text>
            </View>
        )
    }
}