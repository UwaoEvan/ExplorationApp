import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function TripsIcons({ icon, style }) {
    return (
        <TouchableOpacity style={{ ...styles.container, ...style }}>
            {icon}
        </TouchableOpacity>
    )
}

const { width, height } = Dimensions.get('window');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: mainWidth / 6,
        height: mainWidth / 8,
        padding: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})