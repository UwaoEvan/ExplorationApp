import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Ionicons, Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import RatingsCard from '../components/RatingsCard';
import Colors from '../constants';

export default function TripDetails({ navigation }) {
    return (
        <View style={{ flex: 1 }}>

            {/* Banner Image */}

            <Image
                source={require('../../assets/ski_villa.jpg')}
                resizeMode='stretch'
                style={styles.banner}
            />

            {/* Header Icons */}

            <Ionicons
                name="chevron-back"
                size={24}
                color='black'
                style={styles.iconLeft}
                onPress={() => navigation.navigate('Dashboard')}
            />
            <Feather
                name="more-vertical"
                size={24}
                color='black'
                style={styles.iconRight}
            />

            {/* Ratings Card */}
            <RatingsCard />

            {/* Icons */}
            <View style={styles.bottomIcons}>
                <View>
                    <Ionicons name="ios-home" size={40} color={Colors.primary} />
                    <Text style={{ textAlign: 'center', paddingTop: 10, fontFamily: 'Roboto-Regular' }}>Villa</Text>
                </View>
                <View>
                    <FontAwesome5 name="parking" size={40} color={Colors.primary} />
                    <Text style={{ textAlign: 'center', paddingTop: 10, fontFamily: 'Roboto-Regular' }}>Parking</Text>
                </View>
                <View>
                    <MaterialCommunityIcons name="weather-windy" size={40} color={Colors.primary} />
                    <Text style={{ textAlign: 'center', paddingTop: 10, fontFamily: 'Roboto-Regular' }}>4.C</Text>
                </View>
            </View>

            {/* About Us */}

            <View style={styles.about}>
                <Text style={{ fontFamily: 'Roboto-Bold', paddingBottom: 10 }}>About</Text>
                <Text style={{ fontFamily: 'Roboto-Regular', lineHeight: 25, color: 'gray' }}>Located in the Alps with an altitude of 1.702 meters. This ski area is the largest in the world and is known as the largest place to ski. May other facilities, such as fitness center,sauna,steam room to star-rated restaurants.</Text>
            </View>
        </View>

    )
}

const { width, height } = Dimensions.get('window');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    banner: {
        height: mainHeight / 2,
        width: mainWidth
    },
    headerIcons: {
        marginTop: 20
    },
    iconLeft: {
        position: 'absolute',
        marginLeft: mainWidth / 20,
        marginTop: mainWidth / 15
    },
    iconRight: {
        position: 'absolute',
        marginLeft: mainWidth / 1.09,
        marginTop: mainWidth / 15
    },
    bottomIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: mainWidth / 4,
        marginRight: mainWidth / 8,
        marginLeft: mainWidth / 8
    },
    about: {
        marginLeft: mainWidth / 20,
        marginRight: mainWidth / 20,
        marginTop: mainWidth / 20
    }
})