import React, { Component } from 'react';

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