import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import Employees from './pages/Employees/Employees'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/employees" component={Employees} />
        </Switch>
      </main>
    </div>
  )
}

export default App
