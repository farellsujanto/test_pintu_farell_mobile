import { StyleSheet } from 'react-native';
import { whiteColor } from '../../themes/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: whiteColor,
    },
    spacer: {
        flex: 1,
    },
    filterChipsContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
});