import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants';
import CustomButton from '../components/CustomButton';
import MenuIcon from '../components/MenuIcon';

export default function Onboarding({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/onboarding_image.jpg')}
                style={styles.banner}
                resizeMode='contain'
            />
            <MenuIcon />
            <Text style={styles.title}>Digital Ticket</Text>

            <Text style={styles.content}>Easy solution to buy tickets for your travel, business trips, transportation, lodging and culinary</Text>
            <CustomButton title='Start !' onPressed={() => navigation.navigate('Dashboard')} />
        </View>
    )
}

const { width, height } = Dimensions.get('window');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    banner: {
        width: mainWidth,
        height: mainHeight / 1.8
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        color: Colors.black
    },
    content: {
        color: Colors.accent,
        fontSize: 18,
        textAlign: 'center',
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 20,
        fontFamily: 'Roboto-Regular',
        lineHeight: 25
    }
})