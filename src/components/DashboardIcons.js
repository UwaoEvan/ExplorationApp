import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import Colors from '../constants';

export default function DashboardIcons({ navigation, style }) {
    return (
        <View style={{ ...styles.icon, ...style }}>
            <Ionicons
                name="chevron-back"
                size={24}
                color={Colors.black}
                style={styles.iconLeft}
                onPress={() => navigation.navigate('Onboarding')}
            />
            <Feather
                name="more-vertical"
                size={24}
                color={Colors.black}
                style={styles.iconRight}
            />
        </View>
    )
}

const { width, height } = Dimensions.get('window');
const mainWidth = width;
const styles = StyleSheet.create({
    icon: {
        marginTop: mainWidth / 15,
    },
    iconLeft: {
        position: 'absolute',
        marginLeft: mainWidth / 20
    },
    iconRight: {
        position: 'absolute',
        marginLeft: mainWidth / 1.09
    }
})