import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {deleteNote} from './actions/note';

class NoteList extends Component {
  static navigationOptions = {
    title: 'Note List',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'green',
    },
  };

  render() {
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.notes}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={data => (
          <ListItem
            title={data.item.name}
            bottomDivider
            rightIcon={
              <Icon
                name="delete"
                size={36}
                onPress={() => this.props.delete(data.item.key)}
              />
            }
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'grey',
    padding: 16,
  },
  listText: {
    fontSize: 30,
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
    delete: key => dispatch(deleteNote(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
