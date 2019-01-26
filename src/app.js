import React, { Component } from 'react';
import Header from './containers/header/header'


// -- Components
import Search from 'containers/search';



class App extends Component{
    render(){
        return(
          <div>
            <Header />
            {/* <Search /> TODO: Add Router */}
            </div>
        )
    }
}

export default App