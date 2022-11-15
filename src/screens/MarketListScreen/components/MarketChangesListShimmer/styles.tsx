import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    shimmerCardContainer: {
        flexDirection: 'row',
        height: 64,
        width: '100%',
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    shimmerLogo: {
        height: 32,
        width: 32,
        borderRadius: 64,
    },
    shimmerSpace: {
        height: 8,
    },
    shimmerInfoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 16,
    },
    textShimmer: {
        height: 8,
        width:  '100%',
        borderRadius: 8,
    },
    
});