import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {addNote} from './actions/note';

class NoteForm extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'blue',
    },
  };

  state = {
    note: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Redux</Text>
        <TextInput
          value={this.state.note}
          placeholder="Name"
          style={styles.noteInput}
          onChangeText={note => this.setState({note})}
        />
        <Button
          title="Submit"
          color="black"
          onPress={() => this.props.add(this.state.note)}
        />
        <Button
          title="Go to NoteList"
          onPress={() => this.props.navigation.navigate('NoteList')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 64,
    marginBottom: 48,
  },
  noteInput: {
    fontSize: 32,
    marginBottom: 32,
    borderWidth: 1,
    padding: 8,
    width: '80%',
    borderRadius: 10,
  },
});

const mapStateToProps = state => {
  console.log(state);
  return {
    notes: state.noteReducer.noteList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: note => dispatch(addNote(note)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
