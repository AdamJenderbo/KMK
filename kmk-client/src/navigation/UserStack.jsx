import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import SearchUserScreen from '../screens/SearchUserScreen';

const Stack = createStackNavigator();

export const UserStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="SearchUser" 
                component={SearchUserScreen}
                options={{
                    title: "Sök medlem"
                }}
            />
            <Stack.Screen 
                name="User" 
                component={ProfileScreen}
                options={{
                    title: "Min profil"
                }}
            />
        </Stack.Navigator>
    );
};