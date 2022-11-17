import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { usePriceChangesQuery, useSupportedCurrenciesQuery } from '../../../../queries/marketQuery/marketQueryHooks';
import { getMarketChangesListData } from '../../../../utils/marketListUtil';
import MarketChangesCard from '../MarketChangesCard';
import MarketChangesListShimmer from '../MarketChangesListShimmer';
import styles from './styles';

const MarketChangesList = () => {

    const {
        data: supportedCurrencies,
        isLoading: isSupportedCurrenciesLoading,
    } = useSupportedCurrenciesQuery();

    const {
        data: priceChanges,
        isLoading: isPriceChangesLoading,
    } = usePriceChangesQuery();

    const marketChangesListData = useMemo(() => {
        const isDataStillLoading = isSupportedCurrenciesLoading || isPriceChangesLoading;
        const isDataEmpty = !supportedCurrencies || !priceChanges;
        if (isDataStillLoading || isDataEmpty) {
            return [];
        }

        const newMarketChangesListData = getMarketChangesListData(supportedCurrencies, priceChanges);
        return newMarketChangesListData;
    }, [
        supportedCurrencies,
        isSupportedCurrenciesLoading,
        priceChanges,
        isPriceChangesLoading,
    ]);

    return (
        <>
            {(isSupportedCurrenciesLoading || isPriceChangesLoading) ? (
                <MarketChangesListShimmer />
            ) : (
                <FlatList
                    data={marketChangesListData}
                    keyExtractor={(item) => item.currencySymbol}
                    ItemSeparatorComponent={() => <View style={styles.cardSeparator} />}
                    renderItem={({ item }) => <MarketChangesCard marketChanges={item} />} />
            )}
        </>
    );
}

export default React.memo(MarketChangesList);
