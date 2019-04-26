import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProjectDetail from "./pages/projects/ProjectDetail";
import { Switch } from 'react-router'


import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore' // make sure you add this for firestore

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    // reactReduxFirebase(fbConfig)
  )
)

render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={fbConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/project-detail/:projectId" component={ProjectDetail} />
        </Switch>
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
)