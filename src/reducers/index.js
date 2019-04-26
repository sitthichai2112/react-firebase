import { combineReducers } from 'redux'
import projectReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
  project: projectReducer,
  firestore: firestoreReducer,
})