import './App.css';
import React from 'react'
import MainPage from './mainpage';
import Dashboard from './components/Dashboard/dashboard';
import Room from './components/Room/Room';
import { Route, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={MainPage}/>
        <Route path='/homepage' component={Dashboard}/>
        <Route path="/room" component={Room}/>
      </Router>
    </div>
  )

}

export default App;
