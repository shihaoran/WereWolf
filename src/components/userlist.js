/**
 * Created by shi on 2016/10/31.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

import { connect } from 'dva/mobile';
import Button from 'antd-mobile/lib/button';
import Icon from 'antd-mobile/lib/icon';
import {Tag} from 'antd-mobile';
import MyButton from '../components/stateless/mybutton';
import UserButton from '../components/stateless/userbutton';


import {
    Actions
} from 'react-native-router-flux';

const data1 = [
    {
        icon: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://img.alicdn.com/imgextra/i4/TB1KsUTNXXXXXXsaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
        text: 'lalal',
        link: 'hehe',
    }, {
        icon: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://ooo.0o0.ooo/2016/11/01/5818c73b01431.png',
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
        text: '名字',
        link: 'hehe',
    },
    {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
        text: '名字',
        link: 'hehe',
    }, {
        icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
        text: 'ijba',
        link: 'hehe',
    },
];

const User = (props) => {
    const { dispatch, count } = props;
    function rend(dataItem, index) {
        return(
            <div style={{ margin: '16px', background: '#f7f7f7', textAlign: 'center' }}>
                <div style={{ background: 'rgba(0, 0, 0, 0.1)', padding: '8px' }}>
                    <span>{index + 1}.{dataItem.text}</span>
                </div>
                <img src={dataItem.img} style={{ width: '80%', margin: '12px' }} />
            </div>
        )
    }
    return (
        <View style={styles.container}>
            <MyButton
                caption="OK"
                uri="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png"
            />
            <MyButton
                type="sec"
                caption="OK"
                uri="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png"
            />
            <MyButton
                type="bordered"
                caption="OK"
                uri="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png"
            />
            <Image source={{uri:'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png'}}
                   style={{width: 50, height: 50}}/>
            <Button>刷新</Button>
            <Tag selected>默认选中</Tag>
            <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}}>
                <UserButton
                    index="1"
                    username="生活很悠闲美丽啦啦啦"
                />
                <UserButton
                    index="1"
                    username="hahah"
                    vote="3"
                />
                <UserButton
                    index="1"
                    username="hahah"
                    selected={true}
                />
                <UserButton
                    index="1"
                    username="hahah"
                    disabled={true}
                />
            </View>
            <UserButton
                index="1"
                username="hahah"
                vote={3}
                sheriff={true}
                disabled={true}
            />

            <Icon type="reload" />
            <Icon type="double-right" />
            <Icon type="double-right" />
            <Icon type="double-right" />
            <Icon type="double-right" />
            <Icon type="double-right" />
            <Icon type="double-right" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#404040',
    },
});
export default connect(count=>count)(User)/**
 * Created by shi on 2016/11/1.
 */
