import { Stack } from 'expo-router';

const Layout = () => (
    <Stack>
        <Stack.Screen name='index' options={{ title: 'Feed' }} />
    </Stack>
);


export default Layout