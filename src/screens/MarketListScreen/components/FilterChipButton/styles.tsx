import { StyleSheet } from 'react-native';
import { blackColor, whiteColor } from '../../../../themes/colors';

export default StyleSheet.create({
    chipContainer: {
        backgroundColor: whiteColor,
        borderRadius: 24,
    },
    chipPressableContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: whiteColor,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 24,
        borderColor: blackColor,
        borderWidth: 0.1,
    },
    chipText: {
        fontSize: 12,
        color: blackColor,
    },
});
