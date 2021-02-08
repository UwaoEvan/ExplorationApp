import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Colors from '../constants';

export default function MenuIcon() {
    return (
        <TouchableOpacity style={styles.icon}>
            <Feather name="menu" size={24} color={Colors.black} />
        </TouchableOpacity>
    )
}

const { width, height } = Dimensions.get('window');
const mainWidth = width;
const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        marginTop: mainWidth / 20,
        marginLeft: mainWidth / 1.13
    }
})