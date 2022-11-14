import React from 'react';
import { Text, View } from 'react-native';
import { FavouriteIconButton, SearchIconButton } from '../HeaderIconButton';
import styles from './styles';

const HeaderSection = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Market</Text>
                <View style={styles.spacer} />
                <FavouriteIconButton onPress={() => {}} />
                <View style={styles.spaceBetweenIconButtons} />
                <SearchIconButton onPress={() => {}} />
            </View>
        </View>
    );
}

export default React.memo(HeaderSection);
