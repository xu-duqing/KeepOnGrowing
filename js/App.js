/**
 * Created by Guang on 16/4/26.
 */
import React,{
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import {
    add,
    reduce
} from './action'
import { connect } from 'react-redux';
import codePush from "react-native-code-push";
const CODE_PUSH_PRODUCTION_KEY = 'g0-MT7iuWOLkjS_Kz2hPmTG7pTvQNJKWkMWZW';


class Root extends React.Component{

    componentDidMount() {
        codePush.sync({
            updateDialog: false,
            installMode: codePush.InstallMode.ON_NEXT_RESUME,
            deploymentKey: CODE_PUSH_PRODUCTION_KEY,
        })
    }

    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={() =>{
                    this.props.dispatch(add())
                }}>
                    <Text>增加</Text>
                </TouchableOpacity>

                <Text style={{margin:20}}>产生的结果是:{this.props.count}</Text>

                <TouchableOpacity onPress={() =>{
                    this.props.dispatch(reduce())
                }}>
                    <Text>减少</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function select(store) {
    return {
        count:store.example.count
    };
}

module.exports = connect(select)(Root);

