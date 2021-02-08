import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default function RatingsCard() {
    return (
        <View style={styles.card}>
            <View style={{ padding: 15 }}>
                <View style={styles.titleContainer}>
                    <Image
                        source={require('../../assets/ski_villa.jpg')}
                        resizeMode='stretch'
                        style={styles.banner}
                    />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', paddingBottom: 3 }}>Ski Villa</Text>
                        <Text style={{ paddingBottom: 5 }}>France</Text>
                        <Text>Ratings</Text>
                    </View>
                </View>
                <Text style={{ paddingTop: 10, fontFamily: 'Roboto-Regular', lineHeight: 25 }}>
                    Ski Villa offers simple rooms with mountain views infront of the ski lift to the ski Resort
            </Text>
            </View>
        </View>
    )
}

const { width, height } = Dimensions.get('window');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        backgroundColor: '#fff',
        marginTop: mainWidth / 1.4,
        marginRight: mainWidth / 12,
        marginLeft: mainWidth / 12,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 3.84
    },
    titleContainer: {
        flexDirection: 'row',
        fontFamily: 'Roboto-Regular'

    },
    banner: {
        width: mainWidth / 5,
        height: mainHeight / 10,
        borderRadius: 10
    },

})