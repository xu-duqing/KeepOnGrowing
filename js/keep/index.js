/**
 * Created by Guang on 16/5/17.
 */

import React,{
    View,
    Image,
    Dimensions
} from 'react-native';

import KGHeader from '../common/KGHeader';
import KeepListView from './KeepListView';
import {connect} from 'react-redux'
import {
    MKButton,
    MKColor,
} from 'react-native-material-kit'
import {
    addFirst
} from '../action'

import {Text} from 'KGText'

class KeepPage extends React.Component{

    render(){
        const PlainFab = MKButton.coloredFab()
            .withBackgroundColor(MKColor.LightBlue)
            .withOnPress(() => {
                this.props.dispatch(addFirst())
            })
            .build();

        return(
            <View style={{flex:1}}>
                <KGHeader/>
                <KeepListView data={this.props.keep.data}/>
                <View style={styles.plusBox}>
                    <PlainFab>
                        <Image pointerEvents="none" source={require('./img/plus_white.png')} />
                    </PlainFab>
                </View>
            </View>
        )
    }
}

const styles = React.StyleSheet.create({
    plusBox:{
        position:'absolute',
        bottom:10,
        left:Dimensions.get('window').width/2 - 27
    }
});

function select(store) {
    return {
        keep:store.keep
    };
}

module.exports = connect(select)(KeepPage);