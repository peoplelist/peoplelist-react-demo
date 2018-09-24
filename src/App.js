import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyLabel from "./MyLabel";
import MyForm from "./MyForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Lisper React</h1>
                </header>
                <MyLabel text={"this is a label"}/>
                <MyForm/>
            </div>
        );
    }
}

export default App;
