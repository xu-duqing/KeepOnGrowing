/**
 * Created by Guang on 16/4/26.
 */
import React,{
    View,
    StatusBar,
    Navigator,
    Platform
} from 'react-native'

import {
    add,
    reduce
} from './action'
import codePush from "react-native-code-push";
const CODE_PUSH_PRODUCTION_KEY = 'g0-MT7iuWOLkjS_Kz2hPmTG7pTvQNJKWkMWZW';

import KeepPage from './keep'

//fixme 实现nevigater
export default class Root extends React.Component{

    componentDidMount() {
        codePush.sync({
            updateDialog: false,
            installMode: codePush.InstallMode.ON_NEXT_RESUME,
            deploymentKey: CODE_PUSH_PRODUCTION_KEY,
        })
    }

    render(){
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

