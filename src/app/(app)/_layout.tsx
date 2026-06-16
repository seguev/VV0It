import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';


const rootNav = () => {
    return (
        <Stack>
            <Stack.Screen name="(public)" options={{ headerShown: false }} />
        </Stack>
    )
}

export default rootNav

const styles = StyleSheet.create({})