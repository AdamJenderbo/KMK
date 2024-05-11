import { View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { connect } from 'react-redux';
import { loadUser } from './actions/authentication';
import SearchUserScreen from './screens/SearchUserScreen';

const Router = ({isLoggedIn, loadUser}) => {

    loadUser();

    return (
        <View>
            {isLoggedIn ? <SearchUserScreen/> : <LoginScreen/>}
        </View>
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