import { Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';


const Profile = ({user}) => {
    return (
        <View style={styles.profile}>
        <Image source={{ uri: user.picture.data.url }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
        <Text>ID: {user.id}</Text>
      </View>);
}


const ProfileScreen = ({user}) => {
    if(!user) {
        return <View></View>
    }

    return (
        <View style={styles.container}>
            <Profile user={user}></Profile>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        height: "100%"
    },
    profile: {
        alignItems: "center",
      },
      name: {
        fontSize: 20,
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
    // text: {
    //     fontSize: 24,
    //     fontWeight: "bold"
    // },
});


const mapStateToProps = state => {
    return {
        user: state.authentication.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)


  