import React, { Component } from 'react';
import './css/Form.css';

class Form extends Component {

  render() {
    return (
    <div className="bms_send">
        <form onSubmit={this.props.onSubmit}>       
           <textarea  name="title" id="bms_send_message"></textarea>
           <button id="bms_send_btn_cover"></button>       
        </form>
    </div>
    );
  }
}

export default Form;