import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Routes;