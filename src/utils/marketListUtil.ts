import MarketChanges from '../models/marketChangesModel';
import PriceChanges from '../models/priceChangesModel';
import SupportedCurrencies from '../models/supportedCurrenciesModel';

export function getMarketChangesListData(supportedCurrencies: SupportedCurrencies[], priceChanges: PriceChanges[]): MarketChanges[] {
    const newMarketChangesListData = supportedCurrencies.map((supportedCurrency) => {
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
}
