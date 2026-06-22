import { Button, StyleSheet, Text, View } from 'react-native';
import useUserStore from '../../../../hooks/useUserStore';

const Page = () => {
    const { setIsGuest } = useUserStore();

    return (
        <View>
            <Text>My inside page</Text>
            <Button title='Go to login' onPress={() => setIsGuest(false)} />
        </View>
    )
}

export default Page

const styles = StyleSheet.create({})