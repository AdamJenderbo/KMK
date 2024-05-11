import { StyleSheet, Text, View } from 'react-native';
import { LoginButton, Settings } from 'react-native-fbsdk-next';
import { onLogIn } from '../actions/authentication';
import { connect } from 'react-redux';

// // Ask for consent first if necessary
// // Possibly only do this for iOS if no need to handle a GDPR-type flow
Settings.initializeSDK();

const LoginScreen = ({onLogIn}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Kungälvs musikkår</Text>
            </View>
            <View style={styles.content}>
                <LoginButton
                    onLoginFinished={onLogIn}
                    onLogoutFinished={() => console.log("logout.")}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#fff',
        alignItems: "center",
        // justifyContent: "center",
        height: "100%"
    },
    
    textContainer: {
        margin: 10
    },
    content: {
        flex: 1,
        justifyContent: "center",
        height: "100%"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold"
    },
});

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogIn: (error, data) => dispatch(onLogIn(error, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)


  