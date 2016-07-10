/**
 * Created by wang on 16/7/10.
 */
import React, {Component} from 'react'
import {
    View,
    Dimensions,
    StyleSheet
} from 'react-native';

import Chart from 'react-native-chart';
import KGColor from '../common/KGColor';


class HeightChart extends Component{

    render() {
        return(
            <View style={styles.container}>
                <Chart
                    style={styles.chart}
                    verticalGridStep={this.props.lineData.length}
                    lineWidth={2}
                    dataPointRadius={0}
                    dataPointFillColor="#FFCDD2"
                    dataPointColor="#FFCDD2"
                    showDataPoint={true}

                    axisLabelColor="white"
                    axisColor="white"
                    color="#FFCDD2"
                    hideHorizontalGridLines={true}
                    hideVerticalGridLines={true}
                    type="line"
                    tightBounds={true}
                    data={this.props.lineData}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:KGColor.primaryHeader
    },
    chart: {
        width: Dimensions.get('window').width,

        height: 120,
        paddingLeft:12,
        paddingRight:12,
        marginTop:12
    }
});

module.exports = HeightChart;