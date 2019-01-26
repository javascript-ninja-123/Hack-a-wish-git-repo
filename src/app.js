import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// -- Components
import Main from 'containers/main';



class App extends Component {
  render() {
    return (
      <div>
        {/* <Header/> */}
        <Main /> {/*TODO: Add Router*/}
      </div>
    )
  }
}

export default App