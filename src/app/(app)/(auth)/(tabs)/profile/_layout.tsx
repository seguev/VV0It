import { Stack } from 'expo-router'

const Layout = () => {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen name='index' options={{ title: 'Profile', headerLargeTitleEnabled: true, headerTransparent: true }} />
        </Stack>
    )
}

export default Layout