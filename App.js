import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import NoteForm from './src/noteForm';
import NoteList from './src/noteList';

const AppStack = createStackNavigator({
  NoteForm: NoteForm,
  NoteList: NoteList,
});

export default createAppContainer(AppStack);
