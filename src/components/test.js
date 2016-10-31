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
import Button from 'antd-mobile/lib/button';
import {
    Actions
} from 'react-native-router-flux';

const Test = (props) => {
    const { dispatch, count } = props;
    function handleclick()
    {
        if(count.hassocket)
        {
            count.socket.send('something');
            console.log('Ol');
        }
        dispatch({
            type: 'count/settext' ,
            payload:'clicked',
        });
    };
    function handleback()
    {
        Actions.pageOne();
    };
    return (
        <View style={styles.container}>
            <Button onClick={handleclick}>Send</Button>
            <Button onClick={Actions.pageOne}>Back</Button>
            <Button onClick={handleback}>Backonhanle</Button>
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
export default connect(count=>count)(Test)