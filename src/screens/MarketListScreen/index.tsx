import React from 'react';
import { View } from 'react-native';
import FilterChipButton from './components/FilterChipButton';
import HeaderSection from './components/HeaderSection';
import MarketChangesList from './components/MarketChangesList';
import styles from './styles';

const MarketListScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderSection />
            <View style={styles.filterChipsContainer}>
                <FilterChipButton label='New' iconName='flower-outline' />
                <FilterChipButton label='DeFi' iconName='business-outline' />
                <FilterChipButton label='NFT/Gaming' iconName='game-controller-outline' />
                <FilterChipButton label='CEX' iconName='swap-horizontal' />
                <FilterChipButton label='DEX' iconName='swap-horizontal' />
            </View>
            <MarketChangesList />
        </View>
    );
}

export default MarketListScreen;
