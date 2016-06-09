/**
 * Created by Guang on 16/4/9.
 *
 * @providesModule KGLoading
 */

import React,{
    StyleSheet,
    ActivityIndicatorIOS,
    View,
    Platform,
    ProgressBarAndroid,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import {Text} from 'KGText';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'rgba(00, 00, 00, 0)',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    overlay: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    text: {
        marginTop: 8
    }
});

export default class KGLoading extends React.Component{

    static propTypes = {
        isVisible: React.PropTypes.bool,
        size: React.PropTypes.string,
        color: React.PropTypes.string,
        overlayWidth: React.PropTypes.number,
        overlayHeight: React.PropTypes.number,
        overlayColor: React.PropTypes.string,
        text: React.PropTypes.string,
        textColor: React.PropTypes.string,
        textFontSize: React.PropTypes.number,
        isOverlayClickClose:React.PropTypes.bool
    };


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isVisible: false,
            isOverlayClickClose: this.props.isOverlayClickClose || false,
            text:''
        };
    }

    show(text){
        this.setState({
            isVisible:true,
            text:text
        })
    }

    dismiss(){
        this.setState({
            isVisible:false
        })
    }

    isShow(){
        return this.state.isVisible
    }

    render(){
        const overlayColor = this.props.overlayColor || '#000000d0';
        const overlayWidth = this.props.overlayWidth || 120;
        const overlayHeight = this.props.overlayHeight || 120;
        const textColor = this.props.textColor || "#FFF";
        const textFontSize = this.props.textFontSize || 14;
        const progressColor = this.props.color || "#FFF";

        if (!this.isShow()) {
            return null;
        } else {
            return (
                <View style={styles.container}>
                    {this.state.isOverlayClickClose?
                        <TouchableOpacity style={styles.container} onPress={() => this.dismiss()}/>:null}

                    <View style={[styles.overlay,{backgroundColor:overlayColor,width:overlayWidth,height:overlayHeight}]}>
                        {(Platform.OS === 'ios') ?
                            <ActivityIndicatorIOS color={progressColor} size="large" /> :
                            <ProgressBarAndroid  color={progressColor}/>}
                        {this.state.text ?<Text style={[styles.text,{color:textColor,fontSize:textFontSize}]}>{this.state.text}</Text>:null}
                    </View>
                </View>
            );
        }
    }

}




