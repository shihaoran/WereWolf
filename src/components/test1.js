/**
 * Created by shi on 2016/11/2.
 */
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    ListView,
    PixelRatio,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import UserGrid from './stateless/usergrid';
import TabView from './tabview';
import { connect } from 'dva/mobile';
const Test1 = (props) => {
    const { dispatch, room } = props;
    function genusergriddata()
    {

        return room.index_id.map(
            function (item,i) {
                let issheriff=false;
                if(item==room.sheriff_id)
                    issheriff=true;
                let issel=false;
                if(item==room.player_selectedid)
                    issel=true;
                function handlePress() {
                    dispatch({ type: 'room/changeselid',payload:item });
                }
                return {
                    key: i,
                    index: i+1,
                    userid:item,
                    username: room.player_nick[item],
                    vote: room.player_wolfvote[item],
                    sheriff: issheriff,
                    disabled: !room.player_alive[item],
                    selected: issel,
                    onPress:handlePress,
                }
            }
        )
    }
    const usergriddata=genusergriddata();
    return (
        <ParallaxScrollView
            headerBackgroundColor="#333"
            stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
            backgroundSpeed={10}

            renderBackground={() => (
                <View key="background">
                    <Image source={{uri: 'https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg',
                        width: window.width,
                        height: PARALLAX_HEADER_HEIGHT}}/>
                    <View style={{position: 'absolute',
                        top: 0,
                        width: window.width,
                        backgroundColor: 'rgba(0,0,0,.4)',
                        height: PARALLAX_HEADER_HEIGHT}}/>
                </View>
            )}

            renderForeground={() => (
                <View key="parallax-header" style={ styles.parallaxHeader }>
                    <UserGrid data={usergriddata} dispatch={dispatch}/>
                    <Text style={ styles.sectionSpeakerText }>
                        狼人行动阶段
                    </Text>
                    <Text style={ styles.sectionTitleText }>
                        啦啦啦啦啦
                    </Text>
                </View>
            )}


            renderStickyHeader={() => (
                <View key="sticky-header" style={styles.stickySection}>
                    <Text style={styles.stickySectionText}>Rich Hickey Talks</Text>
                </View>
            )}

            renderFixedHeader={() => (
                <View key="fixed-header" style={styles.fixedSection}>
                    <Text style={styles.fixedSectionText}
                          onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
                        Scroll to top
                    </Text>
                </View>
            )}
        >
            <TabView/>
        </ParallaxScrollView>
    );
};


const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;
var {HEIGHT, WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        width: 300,
        justifyContent: 'flex-end'
    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
        margin: 10
    },
    fixedSection: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    fixedSectionText: {
        color: '#999',
        fontSize: 20
    },
    parallaxHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 52,
    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 24,
        paddingVertical: 5
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 5
    },
    row: {
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 20,
    },
    Grid: {
        backgroundColor: 'white',
        width:350,
        flex: 1,
        flexDirection: 'row',

    },
    button: {
        height: 300,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 8,
    },
});

export default connect(room=>room)(Test1);/**
 * Created by shi on 2016/11/3.
 */
