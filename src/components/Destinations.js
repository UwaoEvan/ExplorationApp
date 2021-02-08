import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Dimensions, Text } from 'react-native';

import Colors from '../constants';

export default function Destinations({ image, title, navigation }) {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details')}
        >
            <Image
                source={image}
                resizeMode='stretch'
                style={styles.img}
            />
            <Text style={styles.label}>{title}</Text>
        </TouchableOpacity>
    )
}

const { width, height } = Dimensions.get('window');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        width: mainWidth / 4,
        height: mainHeight / 5,
        marginRight: 10,
        shadowColor: '#ccc',
        shadowRadius: 6,
        shadowOpacity: 5,
        shadowOffset: { width: 2, height: 5 }
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    },
    label: {
        color: Colors.black,
        paddingTop: 5,
        fontFamily: 'Roboto-Regular'
    }
})