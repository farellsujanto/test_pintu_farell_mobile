import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    ACCOUNT_SCREEN_ROUTE,
    DISCOVER_SCREEN_ROUTE,
    HOME_SCREEN_ROUTE,
    MARKET_SCREEN_ROUTE,
    WALLET_SCREEN_ROUTE,
} from '../../../constants/routeNames';
import { blackColor } from '../../../themes/colors';

interface TabBarIconProps {
    routeName: string;
    focused: boolean;
    size: number;
}

const TabBarIcon = ({ routeName, focused, size }: TabBarIconProps) => {

    const tabIconName: string = useMemo(() => {
        switch (routeName) {
            case HOME_SCREEN_ROUTE:
                return focused ? 'home' : 'home-outline';
            case DISCOVER_SCREEN_ROUTE:
                return focused ? 'receipt' : 'receipt-outline';
            case MARKET_SCREEN_ROUTE:
                return focused ? 'stats-chart' : 'stats-chart-outline';
            case WALLET_SCREEN_ROUTE:
                return focused ? 'wallet' : 'wallet-outline';
            case ACCOUNT_SCREEN_ROUTE:
                return focused ? 'person' : 'person-outline';
            default:
                return '';
        }
    }, [routeName, focused]);

    return (
        <Icon name={tabIconName} size={size} color={blackColor} />
    );
}

export default React.memo(TabBarIcon);
