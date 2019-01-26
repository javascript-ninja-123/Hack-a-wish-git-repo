import React, { Component } from 'react';


// -- Components
import Search from 'containers/search';



class App extends Component{
    render(){
        return(
          <div>
            <Search /> {/*TODO: Add Router*/}
            </div>
        )
    }
}

export default App