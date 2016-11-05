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

import { Card, ListItem, Button } from 'react-native-elements'
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
            <Button
                raised
                icon={{name: 'cached'}}
                title='RAISED WITH ICON'

            />
            <Button
                small
                icon={{name: 'rocket', type: 'octicon', buttonStyle: styles.someButtonStyle,size:30,color:'#900' }}
                onPress={Actions.pageTwo}
                backgroundColor='#397af8'
                title='OCTICON' />
            <Card
                title='HELLO WORLD'
                image={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}
                containerStyle={{height:100}}>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    small
                    icon={{name: 'code'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' />
            </Card>
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