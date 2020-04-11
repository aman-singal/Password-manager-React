import React, { Component , createContext } from 'react';
import NavBar from './components/NavBar'
import ReactRouter from './components/ReactRouter'
import fire from './components/Fire'
import LockedNavBar from './components/LockedNavBar'
import LockedRouter from './components/LockedRouter'
import {UserContext} from './components/UserContext'

class App extends Component {
  
  

  constructor(props) {
    super(props)
  
    this.state = {
       user: {},
    }
  }
  

  

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }

  render (){
    return(
      <div className="App">
      {this.state.user ? 
      (<>
        <UserContext.Provider value={this.state.user.uid}>
          <NavBar />
          <ReactRouter/>
        </UserContext.Provider>
      </>)
      : 
      (<>
        <LockedNavBar />
        <LockedRouter />
      </>)
      
    }
      </div>

    )
    

  }
}

export default App
