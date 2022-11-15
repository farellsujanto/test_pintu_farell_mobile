import { StyleSheet } from 'react-native';
import { blackColor, greenColor, greyColor, redColor } from '../../../../themes/colors';

export default StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        height: 64,
        width: '100%',
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    spacer: {
        flex: 1,
    },
    infoContainer: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 16,
    },
    topSectionInfoContainer: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    bottomSectionInfoContainer: {
        flexDirection: 'row',
    },
    mainText: {
        fontSize: 18,
        color: blackColor,
        fontWeight: '600',
    },
    subText: {
        fontSize: 12,
        color: greyColor,
    },
    changesIcon: {
        alignSelf: 'flex-end',
        marginRight: 4,
    },
    changesTextGreen: {
        fontSize: 12,
        color: greenColor,
    },
    changesTextRed: {
        fontSize: 12,
        color: redColor,
    },
});