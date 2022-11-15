import React from 'react';
import { FlatList, View } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const MarketChangesCardShimmer = () => {
    return (
        <View style={styles.shimmerCardContainer}>
            <ShimmerPlaceholder style={styles.shimmerLogo} />
            <View style={styles.shimmerInfoContainer}>
                <View style={styles.shimmerInfoContainer}>
                    <ShimmerPlaceholder style={styles.textShimmer} />
                    <View style={styles.shimmerSpace} />
                    <ShimmerPlaceholder style={styles.textShimmer} />
                </View>
            </View>
        </View>
    );
}

const MarketChangesListShimmer = () => {
    return (
        <FlatList
            data={Array.from(Array(10).keys())}
            renderItem={MarketChangesCardShimmer} />
    );
}

export default React.memo(MarketChangesListShimmer);
