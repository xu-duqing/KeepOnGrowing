/**
 * Created by Guang on 16/5/17.
 */

import React,{
    View,
} from 'react-native';

import KGHeader from '../common/KGHeader';
import KeepListView from './KeepListView';

export default class KeepPage extends React.Component{

    render(){
        return(
            <View style={{flex:1}}>
                <KGHeader/>
                <KeepListView />
            </View>
        )
    }
}