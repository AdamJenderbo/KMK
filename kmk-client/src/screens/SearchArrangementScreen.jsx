import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getArrangements } from '../actions/arrangement';
import { Screen } from '../actions/screen';

const SearchArrangementScreen = ({
    arrangements,
    getArrangements,
    navigation
}) => {

    useEffect(() => {
        async function load() {
            await getArrangements();
        }
        load();
    }, []);

    const onPressCreateArrangement = async () => {
        navigation.navigate(Screen.Arrangement);
    }

    return (
        <View style={styles.container}>
            <Button title='Skapa arrangemang' onPress={onPressCreateArrangement}></Button>
            {arrangements.map(x => <Text key={x.serialNumber}>{x.title}</Text>)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});

const mapStateToProps = state => {
    return {
        arrangements: state.arrangement.arrangements,
        token: state.authentication.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getArrangements: () => dispatch(getArrangements())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchArrangementScreen)