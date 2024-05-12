import { connect } from 'react-redux';
import { loadUser } from '../actions/authentication';
import { NavigationContainer } from '@react-navigation/native';
import { ArrangementStack } from './ArrangementStack';
import { UserStack } from './UserStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const Router = ({isLoggedIn, loadUser}) => {

    // loadUser();

    return (
        <NavigationContainer>
            {/*!isLoggedIn ? <LoginScreen/> :*/ 
                <Tab.Navigator>
                    <Tab.Screen 
                        name="ArrangementStack" 
                        component={ArrangementStack} 
                        options={{
                            title: "Noter",
                            headerShown: false,
                            tabBarIcon: () => {
                                return <FontAwesome namea="music"></FontAwesome>
                            }
                        }}
                    />
                    <Tab.Screen 
                        name="UserStack" 
                        component={UserStack} 
                        options={{
                            title: "Medlemmar",
                            headerShown: false
                        }} 
                    />
                </Tab.Navigator>
            }
        </NavigationContainer>
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authentication.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => dispatch(loadUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)