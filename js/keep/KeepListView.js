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
            keeps:{100001:[1,2,3,5,7,8,9],100002:[1,2,3,5,7,8,9],100003:[1,2,3,5,7,8,9],100004:[1,2,3,5,7,8,9],100005:[1,2,3,5,7,8,9]}
        };
    }

    renderRow(rowData,sectionID,rowID){
        return(
            <ListItem />
        )
    }

    renderSectionHeader(sectionData,sectionID){
        return(
            <SelectHeader />
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