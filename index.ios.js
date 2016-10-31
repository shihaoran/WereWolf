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
import Button from 'antd-mobile/lib/button';

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
  },
  reducers: {
    add(state) { return {...state,count:state.count+1} },
    settext(state,action)
    {
      return{...state,text:action.payload}
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

const App = connect(({ count }) => ({ count }))((props) => {
  const { dispatch, count } = props;
  function handlesocket()
  {
    connected=false;
    ws = new WebSocket('ws://10.138.73.83:8000');
    ws.onopen = () => {
      // connection opened
      props.dispatch({
        type: 'count/settext' ,
        payload:'opened',
      });
      connected=true;
      //ws.send('something'); // send a message
    };

    ws.onmessage = (e) => {
      // a message was received
      console.log(e.data);
      props.dispatch({
        type: 'count/settext' ,
        payload:e.data,
      });
    };

    ws.onerror = (e) => {
      // an error occurred
      console.log(e.message);
      props.dispatch({
        type: 'count/settext' ,
        payload:'err',
      });
    };

    ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
      props.dispatch({
        type: 'count/settext' ,
        payload:'close',
      });
      connected=false;
    };
  }
  function handleclick()
  {
    if(connected)
    {
      ws.send('something');
      console.log('Ol');
    }
    props.dispatch({
      type: 'count/settext' ,
      payload:'clicked',
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Count: { count.count }
      </Text>
      <TouchableHighlight onPress={() => { dispatch({ type: 'count/add' }) }}>
        <Text>Add</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => { dispatch({ type: 'count/addDelay' }) }}>
        <Text>Delay Add</Text>
      </TouchableHighlight>
      <Button onClick={handleclick}>Start</Button>
      <Button onClick={handlesocket}>Socket</Button>
      <Text>{count.text}</Text>
    </View>
  );
});

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
