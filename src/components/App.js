import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import MainNotification from '../containers/MainNoti';
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <hr />
    <MainNotification />
  </div>
)

export default App