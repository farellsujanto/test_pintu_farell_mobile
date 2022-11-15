import React from 'react';
import { Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import { MarketChanges } from '../../../../models/marketChangesModel';
import { greenColor, redColor } from '../../../../themes/colors';
import styles from './styles';

interface MarketChangesCardProps {
    marketChanges: MarketChanges;
}

interface ChangesTextProps {
    changes: string;
}

const ChangesText = ({ changes }: ChangesTextProps) => {

    const changesNumber = Number(changes);
    // TODO: Handle 0% change
    const isChangesPositive = changesNumber > 0;

    return (
        <>
            <Icon
                name={isChangesPositive ? 'caret-up' : 'caret-down'}
                color={isChangesPositive ? greenColor : redColor}
                style={styles.changesIcon} />
            <Text style={isChangesPositive ? styles.changesTextGreen : styles.changesTextRed}>{changes} %</Text>
        </>
    );
}

const MarketChangesCard = ({ marketChanges }: MarketChangesCardProps) => {
    return (
        <View style={styles.cardContainer}>
            <SvgUri
                width={32}
                height={32}
                color={marketChanges.color}
                uri={marketChanges.logo} />
            <View style={styles.infoContainer}>
                <View style={styles.topSectionInfoContainer}>
                    <Text style={styles.mainText}>{marketChanges.name}</Text>
                    <View style={styles.spacer} />
                    {/* TODO: Move to utils */}
                    <Text style={styles.mainText}>Rp {Number(marketChanges.latestPrice).toLocaleString('id')}</Text>
                </View>
                <View style={styles.bottomSectionInfoContainer}>
                    <Text style={styles.subText}>{marketChanges.currencySymbol}</Text>
                    <View style={styles.spacer} />
                    <ChangesText changes={marketChanges.changes} />
                </View>
            </View>
        </View>
    );
}

export default React.memo(MarketChangesCard);
