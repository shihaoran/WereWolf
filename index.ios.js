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
} from 'react-native';

import dva, { connect } from 'dva/mobile';
import Socket from './src/services/websocket';
import Button from 'antd-mobile/lib/button';
import Home from './src/components/homepage';
import Test from './src/components/test';
import {
    Scene,
    Router,
    Actions,
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
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={Home} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={Test} title="PageTwo" />
        </Scene>
      </Router>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

app.router(() => <App />);

AppRegistry.registerComponent('DvaExampleReactNative', () => app.start());
