/**
 * Created by Guang on 16/5/21.
 * @providesModule KGDatePicker
 */
'use strict';

import React, {
    View,
    Text,
    PropTypes,
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

        this.state = {
            visible: false,
            fadeAnim: new Animated.Value(0),
            sheetAnim: new Animated.Value(this.translateY),
            date:this.props.date
        };

        DatePickerIOS.propTypes.date = PropTypes.any.isRequired
        DatePickerIOS.propTypes.onDateChange = PropTypes.func
    }

    show() {
        this.setState({visible: true});
        this._showOverlay();
        this._showSheet();
    }

    hide() {
        this._hideOverlay(() => this.setState({visible: false}));
        this._hideSheet();
        this.props.onPress(this.state.date);
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
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:11}}>
                    <TouchableOpacity onPress={this.hide.bind(this)}>
                        <Text>取消</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>{
                        this.hide()
                    }}>
                        <Text>确定</Text>
                    </TouchableOpacity>
                </View>

                <DatePickerIOS date={this.state.date} mode="date" onDateChange={(date) =>{
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