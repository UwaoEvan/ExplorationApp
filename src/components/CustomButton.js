import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants';

export default function CutsomButton({ title, onPressed }) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPressed}
        >
            <LinearGradient
                colors={['#45b4ff', '#5099ff']}
                style={{ borderRadius: 10 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={styles.title}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const { width, height } = Dimensions.get('window');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 40,
        borderRadius: 8
    },
    title: {
        padding: 15,
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: 'Roboto-Regular'
    }
})