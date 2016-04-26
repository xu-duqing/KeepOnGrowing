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


class Root extends React.Component{

    render(){
        console.log(this.props);
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={() =>{
                    this.props.dispatch(add())
                }}>
                    <Text>增加</Text>
                </TouchableOpacity>

                <Text style={{margin:20}}>产生的结果是:</Text>

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

    };
}

module.exports = connect(select)(Root);

