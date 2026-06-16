import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';


const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }} />
        </Stack>
    )
}

export default Layout

const styles = StyleSheet.create({})