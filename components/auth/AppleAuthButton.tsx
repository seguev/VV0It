import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const AppleAuthButton = () => {
    return (
        <TouchableOpacity style={styles.appleButton}>
            <Ionicons name="logo-apple" size={24} color="#fff" />
            <Text style={styles.appleButtonText}>Sign in with Apple</Text>
        </TouchableOpacity>
    )
}

export default AppleAuthButton

const styles = StyleSheet.create({
    appleButton: {
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        gap: 8,

        borderRadius: 12,

    },
    appleButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})