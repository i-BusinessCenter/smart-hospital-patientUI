import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';
import './css/Chat.css';
import { withRouter } from 'react-router';
import { animateScroll as scroll } from 'react-scroll';

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          id: 1,
          title: "今日はどうなさいましたか？",
          type: "API",
        }
      ],
      countmsg: 2
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const type = "USER";
    if (!title) {
      alert("メッセージを入力してください");
      return;
    }
    const messages = this.state.messages.slice();
    
    
    messages.push({
      title: title,
      type: type,
      id: this.state.countmsg,
    });
    const countmsg = this.state.countmsg+1;
    this.setState({ messages });
    this.setState({countmsg});
    
    e.target.title.value = '';//入力欄をクリアする.
    //this.Scroll();
    scroll.scrollToBottom();
    //以下、API接続
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"userId":"hoge","input":title});
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("http://104.198.114.103:9002/api/response/shiraishi-health interview", requestOptions)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        var oUtput = json;
        console.log(oUtput.textToSpeech);
        messages.push({
          title: oUtput.displayText,
          type: "API",
          id: this.state.countmsg,
        });
        const countmsg = this.state.countmsg+1;
        this.setState({ messages });
        this.setState({countmsg});
      })
     /* .then(result => {
        console.log(result);
        
      })*/
      .catch(error => console.log('error', error));
      //以下, スクロール用プログラム
      //this.Scroll();
      scroll.scrollToBottom();
  }
  handleToLogin=()=>{
      this.props.history.push('/');
      console.log("Log change");
  }
  Scroll(){
    var element = document.getElementById("Chat");
    element.scrollIntoView(false);
    element.scrollIntoView({behavior: "smooth", block: "end"});
    
    console.log(element);
  }

  render() {
    //そのうちheaderを分離したコンポーネントとして扱いたい
    return(
      <div className="app">
        <div id="message_container">
        <div id="header">飯塚市立病院
          <button id="back_to_login" onClick={this.handleToLogin}/>
        </div>
        <br/>
        <br/>
        <TodoList messages={this.state.messages} />
       </div>
        
       <Form onSubmit={this.handleSubmit.bind(this)} />
       
      </div>
       )
   /*ページ分岐の方法
    let content=()=>{
    if(this.props.pass=='ibc948'){
       return(
      <div className="app">
        <div id="message_container">
          <button id="back_to_login"/>
          <div id="header">HIRO TALK</div>
          <br/>
          <br/>
          <TodoList messages={this.state.messages} />
       </div>
        
       <Form onSubmit={this.handleSubmit.bind(this)} />
       <button id="bms_speech_to_text"/>
      </div>
       )  
    }
    else{
      return(
      <h1>unauthorized access</h1>
      )
  }
}
    return(
      <div>
      <content />
      </div>
    );
    */
  }
  
}

export default withRouter(Chat);