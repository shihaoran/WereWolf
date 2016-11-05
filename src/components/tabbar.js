import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import { connect } from 'dva/mobile';
var {TabBarItem} = require('antd-mobile/lib/tab-bar/');
var {TabBar} = require('antd-mobile/lib/tab-bar');

/* eslint global-require: 0 */

const TabBar = connect(count=>count)((props) => {
    const { dispatch, count } = props;
    return (
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden="false"
            selectedTab="redTab"
        >
            <TabBarItem
                title="生活"
                key="生活"
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
                data-seed="logId"
            >
            </TabBarItem>
            <TabBarItem
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
                title="口碑"
                key="口碑"
                badge={1}
                data-seed="logId1"
            >
            </TabBarItem>
            <TabBarItem
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/EljxLrJEShWZObW.png' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/LWNaMdwAFSmYBFw.png' }}
                title="朋友"
                key="朋友"
            >
            </TabBarItem>
            <TabBarItem
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/YWpPVCVOnJoCYhs.png' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/WadBBxOIZtDzsgP.png' }}
                title="我的"
                key="我的"
            >
            </TabBarItem>
        </TabBar>
    );
})

module.exports = TabBar;