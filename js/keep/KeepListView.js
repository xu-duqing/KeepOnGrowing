/**
 * Created by Guang on 16/5/19.
 */

import React,{
    ListView,
    RefreshControl
} from 'react-native'

import ListItem from './KeepListView.Item';
import Header from './KeepListView.Header';
import * as KGColor from 'KGColor'

var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2, sectionHeaderHasChanged: (prev, next) => prev !== next});

export default class KeepListView extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            keeps:[],
            refreshing:false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            keeps:nextProps.data,
            refreshing:nextProps.refreshing
        })
    }

    renderRow(rowData,sectionID,rowID){

        const backgroundColor = rowID%2 === 0?KGColor.primary:'#f7a7aa';
        const textColor = rowID%2 === 0?'#fff':KGColor.primaryText;

        return(
            <ListItem data={rowData} textColor={textColor} backgroundColor={backgroundColor} />
        )
    }

    renderHeader(){
        return(
            <Header />
        )
    }

    _onRefresh(){
        this.props.onRefresh && this.props.onRefresh()
    }

    render(){
        return(
            <ListView
                dataSource={ds.cloneWithRows(this.state.keeps)}
                renderHeader={this.renderHeader}
                enableEmptySections={true}
                renderRow={this.renderRow}
                refreshControl={
                      <RefreshControl
                        refreshing={this.state.refreshing}
                        tintColor="#000000"
                        title="正在刷新数据..."
                        colors={['#ff0000']}
                        backgroundColor={KGColor.primaryText}
                        onRefresh={this._onRefresh.bind(this)}/>
                      }/>
        )
    }
}
