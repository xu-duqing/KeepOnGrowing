/**
 * Created by Guang on 16/5/20.
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

export default class FirstKeep extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            date:new Date(),
            modalVisible:false
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
                <KGHeader title="记录第一次" leftItem={{icon:require('../../common/img/back.png'),onPress:() =>{
                    this.props.navigator.pop()}}}/>

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

    }
});