import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
} from 'react-native';
import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';

export default class Player extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <Header message="Album nhạc buồn thất tình" />
                <AlbumArt url='https://i.ytimg.com/vi/-EGVaRBv2e0/maxresdefault.jpg' />
                <TrackDetails title={'Ký ức ngủ quên'} artist={'BÍCH PHƯƠNG'} />
                <SeekBar />
                <Controls
                    repeatOn
                    shuffleOn
                    forwardDisabled
                    paused />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#550000',
    },
    audioElement: {
        height: 0,
        width: 0,
    }
};