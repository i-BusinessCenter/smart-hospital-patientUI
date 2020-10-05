import React, { Component } from 'react';
import LogForm from './LogForm';
import { withRouter } from 'react-router';

import './css/Login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
                uid: "noid",
                pass: "nopass",
                Auth: false
        };
        //this.props.updateState(this.state);
    }

    
    handleLogin(e) {
        e.preventDefault();
        const uid = e.target.uid.value;
        const pass = e.target.pass.value;
        
        if (!uid) {
          alert("IDを入力してください");
          this.state.Auth=false;
          return;
        }
        if(!pass){
          alert("PASSWORDを入力してください");
          this.state.Auth=false;
          return;
        }
        
        if(uid=="shiraishi"){
            if(pass=="7822"){
                this.state.Auth=true;
            }
        }
        if(this.state.Auth){
        
            this.setState({ uid:uid });
            this.setState({pass:pass});

            console.log(this.state.Auth);
            
        }
        else{
            alert("IDかPASSWORDが間違っています");
            this.state.Auth=false;
            return;
        }
        this.props.updateState(this.state);
        this.handleToChat();//2回目のhandleToChat発火
    }
    handleToChat(){
        if(this.state.Auth){
            this.props.history.push('/Chat');
            console.log("Chat change2");
        }else{
            this.props.history.push('/');
            console.log("root change2");
        }
    }
    
    render(){
            return(
            <div className="login">
                <div id="header">飯塚市立病院</div>
                <LogForm onSubmit={this.handleLogin.bind(this)} Auth={this.state.Auth} handleToChat={this.handleToChat.bind(this)}/>
            </div>
            )
    }
}
export default withRouter(Login);