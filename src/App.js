import React, {Component} from 'react';
import {makeRequest} from "./services/APIServices";

import "../src/scss/app.css";

class App extends Component {
    state = {
        hi: ''
    };

    componentDidMount() {
        makeRequest('/hi').then(response => {
            return response.text();
        }).then(result => {
            this.setState({
                hi: result
            });
        })
    }

    render() {
        const {hi} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">{hi}</h1>
                </header>

                <div className="div App-logo">
                    <img src="/assets/images/logo.png" alt="Logo"/>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
