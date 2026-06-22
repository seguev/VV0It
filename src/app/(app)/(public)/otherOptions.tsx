import Ionicons from '@expo/vector-icons/Ionicons'
import { useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import AppleAuthButton from '../../../../components/auth/AppleAuthButton'
import GoogleAuthButton from '../../../../components/auth/GoogleAuthButton'
import { Colors, Fonts } from '../../../../constants/theme'
import useUserStore from '../../../../hooks/useUserStore'




const otherOptions = () => {

    const router = useRouter();
    const { setIsGuest } = useUserStore();


    const continueAsGuest = () => {
        setIsGuest(true)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeButton} onPress={() => router.dismiss()}>
                <Ionicons name='close' size={24} />
            </TouchableOpacity>

            <Text style={styles.title}>log in or create account</Text>
            {/* {login buttons} */}
            <View style={styles.buttonsContainer} >

                <Animated.View entering={FadeInDown.delay(100)}>
                    <AppleAuthButton />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200)}>
                    <GoogleAuthButton />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(300)} style={styles.faceBookButton}>
                    <Ionicons name='logo-facebook' size={22} />
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>Sign in with FaceBook</Text>

                </Animated.View>

                <Animated.View entering={FadeInDown.delay(400)} >

                    <Text style={styles.guestText} onPress={continueAsGuest}>
                        Continue as guest
                    </Text>

                </Animated.View>



            </View>


        </View>
    )
}
export default otherOptions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14
    },
    buttonsContainer: {
        gap: 12,
        width: '100%',
    },
    closeButton: {

        borderRadius: 40,
        padding: 8,
        alignSelf: 'flex-end'
    },
    title: {
        fontSize: 30,
        fontFamily: Fonts.brandBlack,
        marginVertical: 22
    },
    faceBookButton: {
        flexDirection: 'row',
        backgroundColor: Colors.light,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    guestText: {
        fontSize: 16,
        fontWeight: '400',
        color: 'Colors.secondary',
        textDecorationLine: 'underline',
        textAlign: 'center'
    }

})