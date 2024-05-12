import { Alert, Button, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { Screen } from '../actions/screen';
import { createArrangement } from '../actions/arrangement';

const ArrangementScreen = ({createArrangement, navigation}) => {

    const [serialNumber, setSerialNumber] = useState("");
    const [title, setTitle] = useState("");
    const [composer, setComposer] = useState("");
    const [arranger, setArranger] = useState("");

    const valid = () => {
        return serialNumber != 0 && title && title.length > 0 && composer && composer.length > 0 && arranger && arranger.length > 0
    }

    const onPressCreate = async () => {
        const response = await createArrangement({
            serialNumber,
            title,
            composer,
            arranger
        });

        if(response.isSuccess) {
            Alert.alert("Skapat arrangemang!");
            navigation.navigate(Screen.SearchArrangement);
        }
        else {
            Alert.alert(`Misslyckaed att skapa arrangmang. ${response.message}`);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setSerialNumber}
                value={serialNumber}
                placeholder="Serienummer"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                placeholder="Titel"
            />
            <TextInput
                style={styles.input}
                onChangeText={setComposer}
                value={composer}
                placeholder="Kompsitör"
            />
            <TextInput
                style={styles.input}
                onChangeText={setArranger}
                value={arranger}
                placeholder="Arrangör"
            />
            <Button 
                title="Skapa" 
                disabled={!valid()}
                onPress={onPressCreate}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

const mapStateToProps = state => {
    return {
        arrangements: state.arrangement.arrangements
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createArrangement: (arrangement) => dispatch(createArrangement(arrangement))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArrangementScreen)