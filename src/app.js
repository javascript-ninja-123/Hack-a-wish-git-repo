import React, { Component, Fragment } from 'react';
import Header from './containers/header/header'
import { Link } from 'react-router-dom';


// -- Components
import Main from 'containers/main';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main /> {/*TODO: Add Router*/}
      </Fragment>
    )
  }
}

export default App