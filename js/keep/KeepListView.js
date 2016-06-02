/**
 * Created by Guang on 16/5/19.
 */

import React,{
    ListView
} from 'react-native'

import ListItem from './KeepListView.Item';
import Header from './KeepListView.Header';
import {getDayTime} from '../utils/date_utils';


var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2, sectionHeaderHasChanged: (prev, next) => prev !== next});

export default class KeepListView extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            keeps:[1,2,3,4,5,6,7,8]
        };
    }

    keepsToDateSource(keeps){
        keeps.sort((keep1,keep2) => {
                return keep2.time - keep1.time
            });

        let dataSource ={};
        keeps.forEach((item =>{
            const keyDay = getDayTime(item.time);
            if (dataSource[keyDay]){
                //fixme 暂时不做处理
            }else {
                dataSource[keyDay] = [];
            }

            dataSource[keyDay].push(item);
        }));
        return dataSource
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            keeps:[1,2,3,4,5,6,7,8]
        })
    }

    renderRow(rowData,sectionID,rowID){
        return(
            <ListItem data={rowData}/>
        )
    }

    renderHeader(){
        return(
            <Header />
        )
    }

    render(){
        return(
            <ListView
                dataSource={ds.cloneWithRows(this.state.keeps)}
                renderHeader={this.renderHeader}
                renderRow={this.renderRow}/>
        )
    }
}
