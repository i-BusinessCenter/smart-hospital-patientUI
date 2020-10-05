import React, { Component } from 'react';
import './css/Logbutton.css';
import { withRouter } from 'react-router';
class Logbutton extends Component {
    constructor(props){
        super(props);
    }
    handleToChat= () =>{
        if(this.props.Auth){
            this.props.history.push('/Chat')
        }else{
            this.props.history.push('/')
        }
    }
    render(){
        return(
            
            <button id="logbutton" onClick={this.handleToChat}/>

        )
    }
}
export default withRouter(Logbutton);