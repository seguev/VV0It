import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import { ColorValue } from 'react-native';



const tabs = () => {

    const deliveryIcon = ({ color, size }: {
        focused: boolean;
        color: ColorValue;
        size: number;
    }): React.JSX.Element => (
        <MaterialIcons name='delivery-dining' color={color} size={size} />
    )
    //High order function that wraps above logic and make it reussable
    //props is being derived from the MaterialIcons
    const tabIcon = (name: React.ComponentProps<typeof MaterialIcons>['name']) => ({ color, size }: {
        focused: boolean;
        color: ColorValue;
        size: number;
    }): React.JSX.Element => (
        <MaterialIcons name={name} color={color} size={size} />
    )


    return (
        <Tabs screenOptions={{
            tabBarLabelStyle: {
                fontSize: 9,
                fontWeight: '600'
            }
        }}>
            <Tabs.Screen name='restaurants' options={{
                title: 'Restaurants', headerShown: false,
                tabBarIcon: deliveryIcon //none-reusable but organized

            }} />
            <Tabs.Screen name='discovery' options={{
                title: 'Discovery', headerShown: false, tabBarIcon: tabIcon('store') //reusable AF
            }} />
            <Tabs.Screen name='stores' options={{
                title: 'Stores', headerShown: false, tabBarIcon: tabIcon('compass-calibration')
            }} />
            <Tabs.Screen name='search' options={{
                title: 'Search', headerShown: false,
                tabBarIcon: ({ color, focused, size }) => ( //Inline
                    <MaterialIcons name={focused ? 'search-off' : 'search'} color={color} size={size} />
                )
            }} />
            <Tabs.Screen name='profile' options={{ title: 'Profile', headerShown: false, tabBarIcon: tabIcon('person') }} />
        </Tabs>
    )
}

export default tabs