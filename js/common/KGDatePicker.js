/**
 * Created by Guang on 16/5/21.
 * @providesModule KGDatePicker
 */
'use strict';

import React,{
    PropTypes
} from 'react'

import {
    View,
    Text,
    Dimensions,
    Animated,
    TouchableHighlight,
    TouchableWithoutFeedback,
    DatePickerIOS,
    TouchableOpacity
} from 'react-native';

import styles, {btnStyle, sheetStyle, RADIUS} from './styles';
const DURATION = 250;

class KGDatePicker extends React.Component {

    constructor(props) {
        super(props);

        this.translateY = 220;
        this.tag = 0;

        this.state = {
            visible: false,
            fadeAnim: new Animated.Value(0),
            sheetAnim: new Animated.Value(this.translateY),
            date:this.props.date
        };

        DatePickerIOS.propTypes.date = PropTypes.any.isRequired
        DatePickerIOS.propTypes.onDateChange = PropTypes.func
    }

    show(tag) {
        if(tag){
            this.tag = tag
        }
        this.setState({visible: true});
        this._showOverlay();
        this._showSheet();
    }

    hide() {
        this._hideOverlay(() => this.setState({visible: false}));
        this._hideSheet();
        this.props.onPress(this.state.date,this.tag);
    }

    _showOverlay() {
        Animated.timing(this.state.fadeAnim, {
            toValue: 0.4,
            duration: DURATION
        }).start();
    }

    _hideOverlay(callback) {
        Animated.timing(this.state.fadeAnim, {
            toValue: 0,
            duration: DURATION
        }).start(callback || function() {});
    }

    _showSheet() {
        Animated.timing(this.state.sheetAnim, {
            toValue: 0,
            duration: DURATION
        }).start();
    }

    _hideSheet(callback) {
        Animated.timing(this.state.sheetAnim, {
            toValue: this.translateY,
            duration: DURATION
        }).start(callback || function() {});
    }

    _renderDatePicker(){
        return(
            <View >
                <TouchableOpacity style={{height:50,backgroundColor:'#FFF',flex:1,justifyContent:'center',alignItems:'center'}} onPress={() =>{
                        this.hide()
                    }}>
                    <Text style={{fontSize:15,color:'#727480'}}>确定</Text>
                </TouchableOpacity>


                <DatePickerIOS style={{backgroundColor:"#fcfcfc"}} date={this.state.date} mode="datetime" onDateChange={(date) =>{
                    this.setState({
                      date:date
                    })
                }}/>
            </View>
        )
    }

    render() {
        let state = this.state;

        if (state.visible === false) {
            return null;
        } else {
            return (
                <View style={styles.wrapper}>
                    <TouchableWithoutFeedback onPress={this.hide.bind(this)}>
                        <Animated.View style={[styles.overlay, {opacity: state.fadeAnim}]}/>
                    </TouchableWithoutFeedback>
                    <Animated.View
                        ref={o => this.sheet = o}
                        style={[sheetStyle.wrapper, {transform: [{translateY: state.sheetAnim}]}]}
                    >
                        <View style={sheetStyle.options}>
                            {this._renderDatePicker()}
                        </View>
                    </Animated.View>
                </View>
            );
        }
    }
}

KGDatePicker.propTypes = {
    date: 					PropTypes.instanceOf(Date).isRequired,
    onPress: 				PropTypes.func
};

KGDatePicker.defaultProps = {
    date: 				new Date(),
    onPress: 			() => {}
};


export default KGDatePicker;