// combine reducers with this
import { combineReducers } from 'redux'

// importing other reducers
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'



export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
})