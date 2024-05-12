import { createStackNavigator } from '@react-navigation/stack';

import SearchArrangementScreen from '../screens/SearchArrangementScreen';
import ArrangementScreen from '../screens/ArrangementScreen';
import { Screen } from '../actions/screen';

const Stack = createStackNavigator();

export const ArrangementStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={Screen.SearchArrangement} 
                component={SearchArrangementScreen}
                options={{
                    title: "Sök arrangemang"
                }}
            />
            <Stack.Screen 
                name={Screen.Arrangement}
                component={ArrangementScreen}
                options={{
                    title: "Nytt arrangemang"
                }}
            />
        </Stack.Navigator>
    );
};