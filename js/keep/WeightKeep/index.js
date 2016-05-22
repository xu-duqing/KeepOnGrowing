/**
 * Created by Guang on 16/5/22.
 */

import React,{
    View,
    TouchableOpacity,
    DatePickerAndroid,
    DatePickerIOS,
    Platform,
    PropTypes
} from 'react-native'
import KGHeader from 'KGHeader'
import {Text} from 'KGText'
import KGDatePicker from 'KGDatePicker'
import {
    MKTextField,
    MKColor,
} from 'react-native-material-kit'
import {
    addWeight
} from '../../action'

export default class WeightKeep extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            date:new Date(),
            weight:0
        };
    }

    renderDatePicker(){
        if(Platform.OS == 'ios'){
            return(
                <KGDatePicker ref={o => this.datePicker = o} date={this.state.date} onPress={(date) =>{
                    this.setState({
                        date:date
                    })
                }}/>
            )
        }
    }

    render(){

        const date = this.state.date;
        return(
            <View style={{flex: 1}}>
                <KGHeader title="记录体重" leftItem={{title:'取消',icon:require('../../common/img/back.png'),onPress:() =>{
                    this.props.navigator.pop()}}} rightItem={{title:'完成',icon:require('../img/plus_dark.png'),onPress:()=>{
                        //fixme 提交数据
                        this.props.dispatch(addWeight({
                            time:this.state.date.getTime(),
                            weight:this.state.weight,
                            note:'这是一段描述,记录当时的心情'
                        }));
                        this.props.navigator.pop()
                    }}}/>

                <TouchableOpacity style={styles.dateBox} onPress={() =>{
                    if (Platform.OS == 'ios'){
                        this.datePicker.show()
                    }else {
                        this.showPicker({date:date})
                    }
                }}>
                    <Text style={{flex:1}}>记录时间:</Text>
                    <Text>{date.getFullYear()}-{date.getMonth()}-{date.getDate()}</Text>

                </TouchableOpacity>

                <View style={styles.titleField}>
                    <MKTextField
                        style={{flex:1,height:36,paddingRight:10}}
                        tintColor={MKColor.Lime}
                        textInputStyle={{color: MKColor.Orange}}
                        placeholder='体重'
                        keyboardType="number-pad"
                        onTextChange={(e) =>{
                            this.setState({
                                weight:e
                            })
                        }}/>

                    <Text>
                        千克
                    </Text>
                </View>

                {this.renderDatePicker()}
            </View>
        )
    }

    async showPicker(options) {

        const {action, year, month, day} = await DatePickerAndroid.open(options);
        if (action === DatePickerAndroid.dismissedAction) {

        } else {
            this.setState({
                date:new Date(year, month, day)
            })
        }
    }
}

const styles = React.StyleSheet.create({
    dateBox:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:46,
        padding:11,
        borderWidth:1,
        borderColor:'#ccc'
    },
    titleField:{
        marginTop:14,
        paddingLeft:11,
        paddingRight:11,
        flexDirection:'row',
        alignItems:'center'
    }
});