import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    groundName: {
        fontSize: 24,
        color: '#333',
        fontWeight: '600'
    },
    title: {
        fontSize: 32,
        fontWeight: "600",
        color: '#333',
        margin: 20,
    },
    bookingContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
    },
    hourButton: {
        display: 'flex',
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginTop: 10,
    }
});