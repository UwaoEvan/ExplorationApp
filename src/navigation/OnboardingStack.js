import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../screens/Onboarding';
import TabsNavigation from '../navigation/TabsNavigation';
import TripDetailsStack from './TripDetailsStack';

const Stack = createStackNavigator();

export default function DashboardStack() {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Onboarding' component={Onboarding} />
            <Stack.Screen name='Dashboard' component={TabsNavigation} />
            <Stack.Screen name='Details' component={TripDetailsStack} />
        </Stack.Navigator>
    )
}