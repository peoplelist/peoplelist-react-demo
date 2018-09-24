import React, {Component} from 'react';
import './MyForm.css';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                {
                    name: 'red',
                    value: false
                },
                {
                    name: 'green',
                    value: false
                },
                {
                    name: 'blue',
                    value: false
                },
                {
                    name: 'grey',
                    value: false
                },
            ]

        }
    }

    render() {
        return <form>
            {this.state.colors.map((color, index) =>
                <span className="item" key={index}>
                    <input type="radio" id={color.name} name="colors" value={color.value}/>
                    <label htmlFor={color.name}>{color.name}</label>
                </span>
            )}
        </form>
    }

}

export default MyForm;
