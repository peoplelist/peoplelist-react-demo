import React, {Component} from 'react';
import './MyLabel.css';
import './Counter.js'
import Counter from './Counter';

class MyLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            style: {
                color: '#00f',
                background: '#0f0'
            }
        }
    }

    handleClick(event) {
        this.setState({
            counter: ++this.state.counter
        });
    }

    handleMouseOver(event) {
        // console.log(this, event);
        // window.e = event
        // event.persist()
        setTimeout(()=> {
            // console.table(event.target)
            // console.table(window.e)
        }, 1000)
        this.setState({
            style: {
                color: '#a0f',
                background: '#abc'
            }
        });
    }

    handleMouseLeave(event) {
        this.setState({
            counter: 0,
            style: {
                color: '#00f',
                background: '#0f0'
            }
        });
    }

    render() {
        return (
            <div>
            <label className="my-label" style={this.state.style}
                   onClick={this.handleClick.bind(this)}
                   onMouseLeave={this.handleMouseLeave.bind(this)}
                   onMouseOver={this.handleMouseOver.bind(this)}>{this.props.text}</label>
                <Counter value={this.state.counter}/>
            </div>
        );
    }
}

export default MyLabel;
