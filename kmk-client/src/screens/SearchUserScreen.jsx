import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getUsers } from '../actions/user';
import { useEffect } from 'react';

const SearchUserScreen = ({getUsers, users}) => {

    useEffect(() => {
        async function load() {
            await getUsers();
        }
        load();
    }, []);

    return (
        <View style={styles.container}>
            {users.map(x => <Text>{x.name}</Text>)}
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
    }
});

const mapStateToProps = state => {
    return {
        users: state.user.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUserScreen)