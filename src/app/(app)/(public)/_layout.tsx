import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';


const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="index"
                options={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }} />

            <Stack.Screen name="otherOptions"
                options={{
                    headerShown: false,
                    presentation: 'formSheet',
                    title: '',
                    headerShadowVisible: false,
                    sheetAllowedDetents: [0.6],
                    sheetCornerRadius: 16

                }} />
        </Stack>
    )
}

export default Layout

const styles = StyleSheet.create({})