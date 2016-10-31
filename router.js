/**
 * Created by shi on 2016/10/31.
 */
import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Home from './src/components/homepage';
import Test from './src/components/test';
import {
    Scene,
    Router,
} from 'react-native-router-flux';
export default function ({ history }) {
    return (
        <Router>
            <Scene key="root">
                <Scene key="pageOne" component={Home} title="PageOne" initial={true} />
                <Scene key="pageTwo" component={Test} title="PageTwo" />
            </Scene>
        </Router>
    );
}