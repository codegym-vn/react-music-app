import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import Slider from 'react-native-slider';

const SeekBar = ({}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.text}>02:05</Text>
                <View style={{flex: 1}} />
                <Text style={[styles.text, {width: 40}]}>01:04</Text>
            </View>
            <Slider
                value={0.7}
                style={styles.slider}
                minimumTrackTintColor='#fff'
                maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
                thumbStyle={styles.thumb}
                trackStyle={styles.track}/>
        </View>
    );
};

export default SeekBar;

const styles = StyleSheet.create({
    slider: {
        marginTop: -12,
    },
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
    },
    track: {
        height: 2,
        borderRadius: 1,
    },
    thumb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    text: {
        color: 'rgba(255, 255, 255, 0.72)',
        fontSize: 12,
        textAlign:'center',
    }
});