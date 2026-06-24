import { Stack } from 'expo-router'

const Layout = () => {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen name='index' options={{ title: 'Restaurants', headerLargeTitleEnabled: true, headerTransparent: true }} />
        </Stack>
    )
}

export default Layout