import React, { Component } from 'react';
import './css/Todo.css';
var typeflag = true;
class Todo extends Component {
    
    handleflag(){
        const type = this.props.type;
        if(type==="USER"){
            typeflag = true;
        }else{
            typeflag = false;
        }
    }
    render() {
        var className = 'USER';
        this.handleflag();
        if(typeflag){
            return(
            <div className={className}>
                <div className="bms_message bms_right">
                    <div className="bms_message_box">
                        <div className="bms_message_content">
                            <div className="bms_message_text">{this.props.title}</div>
                        </div>
                    </div>
                </div>
                <div className="bms_clear"></div>
            </div>
            );
        }else{
            className = 'API';
            return(
            <div className={className}>
                <div className="bms_message bms_left">
                    <div className="bms_message_box">
                        <div className="bms_message_content">
                            <div className="bms_message_text">{this.props.title}</div>
                        </div>
                    </div>
                </div>
                <div className="bms_clear"></div>
            </div>
                
            );
        }
        
      }
    }
    export default Todo