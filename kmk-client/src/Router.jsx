import { View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { connect } from 'react-redux';

const Router = ({isLoggedIn}) => {

    return (
        <View>
            {isLoggedIn ? <ProfileScreen/> : <LoginScreen/>}
        </View>
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authentication.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)