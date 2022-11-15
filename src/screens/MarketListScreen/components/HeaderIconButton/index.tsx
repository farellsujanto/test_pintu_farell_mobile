import React from 'react';
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { blackColor } from '../../../../themes/colors';
import styles from './styles';

interface HeaderIconButtonProps {
    onPress: () => void;
    children: React.ReactNode;
}

interface CustomizedIconButtonProps {
    onPress: () => void;
}

const HeaderIconButton = ({ onPress, children }: HeaderIconButtonProps) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                android_ripple={{
                    color: blackColor,
                    borderless: true,
                }}
                onPress={onPress}>
                {children}
            </Pressable>
        </View>
    );
}

const SearchIconButton = React.memo(({ onPress }: CustomizedIconButtonProps) => {
    return (
        <HeaderIconButton onPress={onPress}>
            <Icon name={'search1'} size={24} color={blackColor} />
        </HeaderIconButton>
    );
});

const FavouriteIconButton = React.memo(({ onPress }: CustomizedIconButtonProps) => {
    return (
        <HeaderIconButton onPress={onPress}>
            <Icon name={'staro'} size={24} color={blackColor} />
        </HeaderIconButton>
    );
});


export {
    SearchIconButton,
    FavouriteIconButton,
}
