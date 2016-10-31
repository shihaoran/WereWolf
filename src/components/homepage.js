/**
 * Created by shi on 2016/10/31.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import { connect } from 'dva/mobile';
import Socket from '../services/websocket';
import Button from 'antd-mobile/lib/button';
import {
    Actions
} from 'react-native-router-flux';

const Home = (props) => {
    const { dispatch, count } = props;
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
            <Socket/>
            <Button onClick={Actions.pageTwo}>next</Button>
            <Text>{count.text}</Text>
            <Text>{count.hassocket}ok</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
export default connect(count=>count)(Home)