import { StyleSheet } from 'react-native';
import { blackColor, whiteColor } from '../../themes/colors';

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
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    sortContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginBottom: 16,
        alignItems: 'center',
    },
    sortText: {
        fontSize: 14,
        fontWeight: '700',
        color: blackColor,
    },
});
