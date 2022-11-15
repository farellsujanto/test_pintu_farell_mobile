import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';

import { MarketChanges } from '../../../../models/marketChangesModel';
import { usePriceChangesQuery, useSupportedCurrenciesQuery } from '../../../../queries/marketQuery/marketQueryHooks';
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

    const marketChangesListData: MarketChanges[] = useMemo(() => {
        const isDataStillLoading = isSupportedCurrenciesLoading || isPriceChangesLoading;
        const isDataEmpty = !supportedCurrencies || !priceChanges;
        if (isDataStillLoading || isDataEmpty) {
            return [];
        }

        const newMarketChangesListData = supportedCurrencies.map((supportedCurrency) => {
            console.log(supportedCurrency)
            const currencyPriceChanges = priceChanges.find((priceChange) => {
                const splittedCurrencyPair = priceChange.pair.split('/');
                return splittedCurrencyPair[0].toLowerCase() === supportedCurrency.currencySymbol.toLowerCase();
            });

            return {
                name: supportedCurrency.name,
                currencySymbol: supportedCurrency.currencySymbol,
                color: supportedCurrency.color,
                logo: supportedCurrency.logo,
                changes: currencyPriceChanges?.month ?? '',
                latestPrice: currencyPriceChanges?.latestPrice ?? '',
            }
        }).filter((data) => data.changes);

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
