/**
 * Created by Guang on 16/5/19.
 */

import React,{
    ListView
} from 'react-native'

import ListItem from './KeepListView.Item';
import SelectHeader from './KeepListView.Header';

var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2, sectionHeaderHasChanged: (prev, next) => prev !== next});

export default class KeepListView extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            keeps:{}
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            keeps:nextProps.data
        })
    }

    renderRow(rowData,sectionID,rowID){
        return(
            <ListItem data={rowData}/>
        )
    }

    renderSectionHeader(sectionData,sectionID){
        return(
            <SelectHeader time={parseInt(sectionID)}/>
        )
    }


    render(){
        return(
            <ListView
                dataSource={ds.cloneWithRowsAndSections(this.state.keeps)}
                renderRow={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}/>
        )
    }
}
