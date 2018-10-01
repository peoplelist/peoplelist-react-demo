import React, {Component} from 'react';
import logo from './assets/logo.svg';
import './App.css';
import MyLabel from "./components/MyLabel/MyLabel";
import MyForm from "./components/MyForm/MyForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to Lisper React</h1>
                </header>
                <MyLabel text={"click me"}/>
                <MyForm/>
            </div>
        );
    }
}

export default App;
