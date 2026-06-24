import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Profile = () => {
    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic' contentContainerStyle={{ flex: 1 }} style={styles.container}>

            <View>

                <Text>Profile</Text>
            </View>

        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})