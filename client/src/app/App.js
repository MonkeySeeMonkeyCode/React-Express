import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import userList from './pages/userList';
import noteList from './pages/noteList';
import tictactoe from './pages/tictactoe/tictactoe';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <nav>
          <ul className='navbar'>
            <li className='navbar'>
              <Link to={'./'}>Home</Link>
            </li>
            <li className='navbar'>
              <Link to={'./userList'}>List of Users</Link>
            </li>
            <li className='navbar'>
              <Link to={'./noteList'}>List of Notes</Link>
            </li>
            <li className='navbar'>
              <Link to={'./tictactoe'}>Tic Tac Toe</Link>
            </li>
          </ul>
        </nav>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/userlist' component={userList}/>
      <Route path='/noteList' component={noteList}/>
      <Route path='/tictactoe' component={tictactoe}/>
      <Route path='*' component={Home}/>
    </Switch>
      </div>
    )
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;