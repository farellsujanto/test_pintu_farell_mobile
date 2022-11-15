import { StyleSheet } from 'react-native';
import { blackColor, whiteColor } from '../../../../themes/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: whiteColor,
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
    },
    spacer: {
        flex: 1,
    },
    spaceBetweenIconButtons: {
        width: 10,
    },
    title: {
        fontWeight: '800',
        fontSize: 24,
        color: blackColor,
    },
});
