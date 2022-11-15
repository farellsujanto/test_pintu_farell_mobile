import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MarketListScreen from './screens/MarketListScreen';
import NotFoundScreen from './screens/NotFoundScreen';

import TabBarLabel from './components/labels/TabBarLabel';
import TabBarIcon from './components/icons/TabBarIcon';

import {
    ACCOUNT_SCREEN_ROUTE,
    DISCOVER_SCREEN_ROUTE,
    HOME_SCREEN_ROUTE,
    MARKET_SCREEN_ROUTE,
    WALLET_SCREEN_ROUTE,
} from './constants/routeNames';

const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {
                        return (
                            <TabBarIcon
                                routeName={route.name}
                                focused={focused}
                                size={size} />
                        );
                    },
                    tabBarLabel: ({ focused }) => {
                        return (
                            <TabBarLabel
                                focused={focused}
                                label={route.name} />
                        );
                    },
                    tabBarStyle: { paddingVertical: 4 },
                })} >
                <Tab.Screen name={HOME_SCREEN_ROUTE} component={NotFoundScreen} />
                <Tab.Screen name={DISCOVER_SCREEN_ROUTE} component={NotFoundScreen} />
                <Tab.Screen name={MARKET_SCREEN_ROUTE} component={MarketListScreen} />
                <Tab.Screen name={WALLET_SCREEN_ROUTE} component={NotFoundScreen} />
                <Tab.Screen name={ACCOUNT_SCREEN_ROUTE} component={NotFoundScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
