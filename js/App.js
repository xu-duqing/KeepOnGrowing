/**
 * Created by Guang on 16/4/26.
 */

import React from 'react'

import {
    View,
    StatusBar,
    Navigator,
    Platform
} from 'react-native'

import codePush from "react-native-code-push";
import KeepPage from './keep'
import {connect} from 'react-redux'
import Login from './login'

class Root extends React.Component{

    componentDidMount() {
        codePush.sync({
            updateDialog: false,
            installMode: codePush.InstallMode.ON_NEXT_RESUME,
        })
    }

    render(){
        if (!this.props.user.isLogin){
            return(
                <Login />
            )
        }
        return(
            <View style={{flex:1}}>
                <StatusBar
                    translucent={true}
                    backgroundColor="rgba(0, 0, 0, 0.2)"
                    barStyle="light-content"
                />
                <Navigator
                    ref={nav => {this.navigator = nav;}}
                    initialRoute={{name:'home', component:KeepPage,params:{...this.props}}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                />
            </View>
        )
    }

    configureScene(){
        if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
        }
        return {...Navigator.SceneConfigs.HorizontalSwipeJump,gestures:null};
    }

    renderScene(route, navigator){
        switch (route.name){
            case 'home':
                return <KeepPage {...route.params} navigator={navigator}/>;
            default:
                var Component = route.component;
                if (route.component) {
                    return <Component {...route.params} navigator={navigator}/>
                }
        }
    }
}

function select(store) {
    return {
        user:store.user
    };
}

module.exports = connect(select)(Root);
