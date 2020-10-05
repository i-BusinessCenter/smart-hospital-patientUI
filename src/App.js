import React, { Component } from 'react';
import Chat from './Chat/Chat';
import Login from './Login/Login';
import LogForm from './Login/LogForm';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
                uid: "noid",
                pass: "nopass",
                Auth: false
        }
    }
    updateState(state){
        this.setState(state);
        
        console.log("state was changed");
        console.log(this.state.Auth);
    }
    render(){
       
        return(
            <Router>
                <Switch>
                    <Route exact path="/" render={ () => <Login updateState={this.updateState.bind(this)}/> }/>
                    <Route exact path="/Chat" render={ () => <Chat /> }/>                  
                    
                </Switch>
            </Router>
            
        )
        
    }
}
//<PrivateRoute exact path="/Chat" component={Chat} Auth={this.state.Auth}/>

export default App;