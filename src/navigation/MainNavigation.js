import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import OnboardingStack from './OnboardingStack';

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <OnboardingStack />
        </NavigationContainer>
    )
}