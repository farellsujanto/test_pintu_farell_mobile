import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { greyColor } from '../../themes/colors';
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
            <View style={styles.sortContainer}>
                <Text style={styles.sortText}>Sort By</Text>
                <View style={styles.spacer} />
                <Text style={styles.sortText}>Default </Text>
                <Icon size={24} name={'chevron-down'} color={greyColor} />
            </View>
            <MarketChangesList />
        </View>
    );
}

export default MarketListScreen;
