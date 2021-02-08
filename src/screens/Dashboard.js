import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import DashboardIcons from '../components/DashboardIcons';
import TripsIcons from '../components/TripsIcons';
import Destinations from '../components/Destinations';
import Colors from '../constants';

export default function Dashboard({ navigation }) {
    return (
        <View>

            {/* Header Icons */}

            <DashboardIcons navigation={navigation} />

            {/* Banner Image */}

            <View style={styles.container}>
                <Image
                    source={require('../../assets/home_banner.jpg')}
                    resizeMode='stretch'
                    style={styles.banner}
                />

                {/* Trips Icons */}

                <View style={styles.iconsContainer}>
                    <View>
                        <LinearGradient
                            colors={['#7aaafb', '#578bff']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.iconBg}
                        >
                            <TripsIcons
                                icon={<Ionicons name="airplane" size={24} color="#fefefe" />}
                            />
                        </LinearGradient>
                        <Text style={styles.title}>Flight</Text>
                    </View>
                    <View>
                        <LinearGradient
                            colors={['#fddd42', '#fddd47']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.iconBg}
                        >
                            <TripsIcons
                                icon={<MaterialIcons name="train" size={24} color="#fff" />}
                            />
                        </LinearGradient>
                        <Text style={styles.title}>Train</Text>
                    </View>
                    <View>
                        <LinearGradient
                            colors={['#e066da', '#d849c4']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.iconBg}
                        >
                            <TripsIcons
                                icon={<MaterialCommunityIcons name="bus" size={24} color="#fff" />}
                            />
                        </LinearGradient>
                        <Text style={styles.title}>Bus</Text>
                    </View>
                    <View>
                        <LinearGradient
                            colors={['#fd7eb6', '#ec347b']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.iconBg}
                        >
                            <TripsIcons
                                icon={<MaterialCommunityIcons name="taxi" size={24} color="#fff" />}
                            />
                        </LinearGradient>
                        <Text style={styles.title}>Taxi</Text>
                    </View>
                </View>

                <View style={styles.iconsContainer}>
                    <View>
                        <LinearGradient
                            colors={['#ffb664', '#ffb263']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.iconBg}
                        >
                            <TripsIcons
                                icon={<MaterialIcons name="hotel" size={24} color="#fff" />}
                            />
                        </LinearGradient>
                        <Text style={styles.title}>Hotel</Text>
                    </View>
                    <View>
                        <LinearGradient
                            colors={['#72e6fd', '#65d8fd']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.iconBg}
                        >
                            <TripsIcons
                                icon={<MaterialCommunityIcons name="silverware-fork-knife" size={24} color="#fff" />}
                            />
                        </LinearGradient>
                        <Text style={styles.title}>Eats</Text>
                    </View>
                    <View>
                        <LinearGradient
                            colors={['#6fe29b', '#57d4a8']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.iconBg}
                        >
                            <TripsIcons
                                icon={<MaterialCommunityIcons name="compass" size={24} color="#fff" />}
                            />
                        </LinearGradient>
                        <Text style={styles.title}>Adventure</Text>
                    </View>
                    <View>
                        <LinearGradient
                            colors={['#fd9d91', '#fe897b']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.iconBg}
                        >
                            <TripsIcons
                                icon={<MaterialCommunityIcons name="party-popper" size={24} color="#fff" />}
                            />
                        </LinearGradient>
                        <Text style={styles.title}>Events</Text>
                    </View>
                </View>

                {/* Destinations */}

                <Text style={styles.des}>Destinations</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list}>
                    <Destinations image={require('../../assets/ski_villa_banner.jpg')} title='Ski Villa' navigation={navigation} />
                    <Destinations image={require('../../assets/climbing_hills.jpg')} title='Climbing Hills' navigation={navigation} />
                    <Destinations image={require('../../assets/frozen_hills.jpg')} title='Frozen Hills' navigation={navigation} />
                    <Destinations image={require('../../assets/beach.jpeg')} title='Beach' navigation={navigation} />
                </ScrollView>
            </View>
        </View>
    )
}

const { width, height } = Dimensions.get('window');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        marginLeft: mainWidth / 20,
        marginRight: mainWidth / 20
    },
    banner: {
        width: mainWidth * 0.9,
        height: mainHeight * 0.3,
        marginTop: mainWidth / 9,
        borderRadius: 10
    },
    headerIcons: {
        position: 'absolute',
        marginTop: 20
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    iconBg: {
        borderRadius: 10
    },
    title: {
        textAlign: 'center',
        color: Colors.black,
        fontSize: 15,
        paddingTop: 5,
        fontFamily: 'Roboto-Regular'
    },
    list: {
        height: mainHeight
    },
    des: {
        paddingTop: 10,
        fontFamily: 'Roboto-Bold'
    }
})