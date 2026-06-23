import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import useUserStore from '../../../hooks/useUserStore';


const rootNav = () => {
    const { isGuest, user } = useUserStore();
    console.log(`isGues ${isGuest} isUser ${!!user}`)
    return (
        <Stack>
            <Stack.Protected guard={isGuest || !!user}>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack.Protected>

            <Stack.Protected guard={!isGuest && !user}>
                <Stack.Screen name="(public)" options={{ headerShown: false }} />
            </Stack.Protected>
        </Stack>
    )
}

export default rootNav

const styles = StyleSheet.create({})