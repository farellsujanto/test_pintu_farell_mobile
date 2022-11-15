import React from 'react';
import { View, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { blackColor } from '../../../../themes/colors';
import styles from './styles';

interface FilterChipButtonProps {
    label: string;
    iconName: string;
}

const FilterChipButton = ({ label, iconName }: FilterChipButtonProps) => {
    return (
        <View
            style={styles.chipContainer}>
            <Pressable
                android_ripple={{
                    color: blackColor,
                    borderless: true
                }}
                style={styles.chipPressableContainer}
                onPress={() => { }} >
                <Icon name={iconName} />
                <Text style={styles.chipText}> {label}</Text>
            </Pressable>
        </View>
    );
}

export default React.memo(FilterChipButton);
