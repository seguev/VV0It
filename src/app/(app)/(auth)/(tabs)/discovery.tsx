import { StyleSheet, Text, View } from 'react-native';
import useUserStore from '../../../../../hooks/useUserStore';


const Discovery = () => {
    const { setIsGuest } = useUserStore();

    return (
        <View>
            <Text>Discovery!</Text>

        </View>
    )
}

export default Discovery

const styles = StyleSheet.create({})