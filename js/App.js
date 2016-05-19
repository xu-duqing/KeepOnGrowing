/**
 * Created by Guang on 16/4/26.
 */
import React,{
    View,
    StatusBar
} from 'react-native'

import {
    add,
    reduce
} from './action'
import codePush from "react-native-code-push";
const CODE_PUSH_PRODUCTION_KEY = 'g0-MT7iuWOLkjS_Kz2hPmTG7pTvQNJKWkMWZW';

import KeepPage from './keep'

//fixme 实现nevigater
export default class Root extends React.Component{

    componentDidMount() {
        codePush.sync({
            updateDialog: false,
            installMode: codePush.InstallMode.ON_NEXT_RESUME,
            deploymentKey: CODE_PUSH_PRODUCTION_KEY,
        })
    }

    render(){
        console.log(this);

        return(
            <View style={{flex:1}}>
                <StatusBar
                    translucent={true}
                    backgroundColor="rgba(0, 0, 0, 0.2)"
                    barStyle="light-content"
                />
                <KeepPage />
            </View>
        )
    }
}

