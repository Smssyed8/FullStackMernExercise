import React, { Component } from 'react';
import axios from 'axios';

export default class Chat extends Component {
    constructor(props) {
        super(props); 
    }


    render() {
       
        return (
         
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Hello world </h1>
                    <br/>
                    <input id="name" className="form-control" placeholder="name"/>
                    <br/>
                    <br/>
                    <textarea id="message" className="form-control" placeholder="message"></textarea>
                    <br/>
                    <button id="send" className="btn btn-success">Send</button>
                </div>
                <div id="messages">

                </div>
            </div>
            )
    }
}  