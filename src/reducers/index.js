import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import projectReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
  project: projectReducer,
  firestore: firestoreReducer,
  todos,
  visibilityFilter
})