import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TripDetails from '../screens/TripDetails';

const Stack = createStackNavigator();

export default function TripDetailsStack() {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Details' component={TripDetails} />
        </Stack.Navigator>
    )
}