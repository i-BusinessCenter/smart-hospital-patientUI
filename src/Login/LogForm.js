import React, { Component } from 'react';
import './css/LogForm.css';
import { withRouter } from 'react-router';
//import {Link} from 'react-router-dom';


class LogForm extends Component {
    constructor(props){
        super(props);
        this.state={
            link:"/"
        }
    }
    /*handleToChat= () =>{
        if(this.props.Auth){
            this.props.history.push('/Chat');
            console.log("Chat change");
        }else{
            this.props.history.push('/');
            console.log("root change");
        }
    }*/
    /*handleLogin=()=>{
        if(this.props.Auth){
            this.state.link="/Chat";
        }else{
            this.state.link="/";
        }

    }*/
    render(){
        return(
            <div className="logform">
                <form onSubmit={this.props.onSubmit}>
                    <h1>ID</h1>       
                    <textarea  name="uid" id="uid"></textarea>
                    <br/>
                    <h1>PASSWORD</h1>
                    <textarea  name="pass" id="pass"></textarea>
                    <br/>
                    <br/>
                    <button id="logbutton" onClick={this.props.handleToChat}/>
                </form>
            </div>
        )
    }
}
//<li><Link to={this.state.link} onClick={this.handleLogin}>link</Link></li>
export default withRouter(LogForm);