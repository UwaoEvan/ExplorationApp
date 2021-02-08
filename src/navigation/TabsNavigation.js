import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';

import Colors from '../constants';
import DashboardStack from './DashboardStack';

const Tab = createBottomTabNavigator();

export default function TabsNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Dashboard' component={DashboardStack} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({ focused }) => focused ? (
                    <Entypo name="home" size={24} color={Colors.primary} />
                ) : (
                        <Entypo name="home" size={24} color={Colors.accent} />
                    )
            }} />
            <Tab.Screen name='Search' component={DashboardStack} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({ focused }) => focused ? (
                    <Ionicons name="search" size={24} color={Colors.primary} />
                ) : (
                        <Ionicons name="search" size={24} color={Colors.accent} />
                    )
            }} />
            <Tab.Screen name='Bookmark' component={DashboardStack} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({ focused }) => focused ? (
                    <Ionicons name="bookmark" size={24} color={Colors.primary} />
                ) : (
                        <Ionicons name="bookmark" size={24} color={Colors.accent} />
                    )
            }} />
            <Tab.Screen name='Profile' component={DashboardStack} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({ focused }) => focused ? (
                    <FontAwesome name="user" size={24} color={Colors.primary} />
                ) : (
                        <FontAwesome name="user" size={24} color={Colors.accent} />
                    )
            }} />
        </Tab.Navigator>
    )
}