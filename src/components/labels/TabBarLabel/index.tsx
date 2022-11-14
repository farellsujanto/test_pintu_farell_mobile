import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

interface TabBarLabelProps {
    label: string;
    focused: boolean;
}

const TabBarLabel = ({ label, focused }: TabBarLabelProps) => {
    return (
        <Text style={focused ? styles.activeText : styles.inactiveText}>
            {label}
        </Text>
    );
}

export default React.memo(TabBarLabel);
