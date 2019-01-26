import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// -- Components
import Search from 'containers/search';



class App extends Component {
  render() {
    return (
      <div>
        <h1>Hack-A-Wish Main Page</h1>
        <ul>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </div>
    )
  }
}

export default App