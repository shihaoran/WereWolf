/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

import dva, { connect } from 'dva/mobile';
import Socket from './src/services/websocket';
import Button from 'antd-mobile/lib/button';
import Home from './src/components/homepage';
import Talk from './src/components/parallaxscroll';
import Test from './src/components/test';
import Test1 from './src/components/test1';
import User from './src/components/userlist';
import VoteResult from './src/components/stateless/voteresult';
import GuessRole from './src/components/stateless/guessrole';
import {
    Scene,
    Router,
    Actions,
    TabBar,
} from 'react-native-router-flux';

function delay(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const app = dva();

app.model({
  namespace: 'count',
  state: {
    count:0,
    text:'not yet',
    socket:null,
    hassocket:'false',
  },
  reducers: {
    add(state) { return {...state,count:state.count+1} },
    settext(state,action)
    {
      return{...state,text:action.payload}
    },
    setsocket(state,action)
    {
      return{...state,socket:action.payload,hassocket:'true'}
    },
    newmessage(state)
    {
      Actions.pageTwo();
      console.log('llllll');
      return{...state}
    },
  },
  effects: {
    *addDelay(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'add' });
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({type: 'add'});
    },
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Router>
          <Scene key="root" >
            <Scene key="pageOne"
                   component={Home}
                   title="PageOne"
                   navigationBarStyle={styles.navigationBarStyle}
                   tabs={true}
            />
            <Scene key="pageTwo" component={Test} title="PageTwo" />
            <Scene key="userlist" component={User}
                   navigationBarStyle={styles.navigationBarStyleRed}
                   title="狼人"/>
            <Scene key="list" component={Talk}
            hideNavBar={true}/>
            <Scene key="test" component={Test1} initial={true}
                   hideNavBar={true}/>
            <Scene key="vote" component={VoteResult}
                   hideNavBar={true}/>
            <Scene key="role" component={GuessRole}
                   hideNavBar={true}/>
          </Scene>
        </Router>
      </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navigationBarStyle: {
    backgroundColor: '#2e2e2e',
    height: 100,
  },
  navigationBarStyleRed: {
    backgroundColor: '#f2443e',
    height: 60,
    shadowColor:'#F5FCFF',
    shadowOffset:{width: 15, height: 15},
  },
});

app.router(() => <App />);

AppRegistry.registerComponent('DvaExampleReactNative', () => app.start());
