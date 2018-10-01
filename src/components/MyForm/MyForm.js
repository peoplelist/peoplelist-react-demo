import React, {Component} from 'react';
import './MyForm.css';
import 'whatwg-fetch';

class MyForm extends Component {
    lastIndex = -1;
    currentColor;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            colors: [
                {
                    name: 'Red',
                    value: false
                },
                {
                    name: 'Green',
                    value: false
                },
                {
                    name: 'Blue',
                    value: false
                },
                {
                    name: 'Grey',
                    value: true
                },
            ],
            animal: [
                {
                    name: 'Cat',
                    value: false
                },
                {
                    name: 'Dog',
                    value: false
                },
                {
                    name: 'Pug',
                    value: false
                },
                {
                    name: 'Pig',
                    value: false
                }
            ]
        }

        this.state.colors.map((color, index) => {
            if (color.value) {
                this.lastIndex = index;
                this.currentColor = color.name;
            }
        })
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value
        })
    }

    //select color
    handleRadio(event) {
        // console.log(event.target.value);
        // console.log(event.target.checked);
        // console.log(event.target.dataset.index);
        var colors = this.state.colors;
        colors[event.target.dataset.index].value = true;
        this.currentColor = event.target.value;
        if (this.lastIndex >= 0) {
            colors[this.lastIndex].value = false;
        }
        this.setState({
            colors: colors
        });
        this.lastIndex = event.target.dataset.index;
    }

    //select animal
    handleCheckbox(event) {
        var animal = this.state.animal;
        animal[event.target.dataset.index].value = event.target.checked;
        this.setState({
            animal: animal
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit');

        var animal = this.state.animal.filter(animal => animal.value);
        animal = animal.map(animal => animal.name);
        // animal = animal.join(',');

        var data = {
            color: this.currentColor,
            name: this.state.name,
            animal: animal
        };

        fetch('/infosubmit', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            console.log("res:");
            console.log(res);
            console.log(res.status);
            if (res.status === 200) {
                return res.json();
            } else {
                return res;
            }
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log('catch error: ' + error);
        })
    }

    render() {
        return <form onSubmit={this.handleSubmit.bind(this)}>

            {/*colors*/}
            <fieldset>
                <legend>Colors</legend>
                <div>
                    {this.state.colors.map((color, index) =>
                            <span className="item" key={index}>
                    <input type="radio" id={color.name} name="colors" data-index={index} value={color.name}
                           checked={color.value} onChange={this.handleRadio.bind(this)}/>
                    <label htmlFor={color.name}>{color.name}</label>
                </span>
                    )}
                </div>
            </fieldset>

            {/*animal*/}
            <fieldset>
                <legend>Animal</legend>
                <div>
                    {this.state.animal.map((animal, index) =>
                            <span className="item" key={index}>
                    <input type="checkbox" id={animal.name} name="animal" data-index={index} value={animal.name}
                           checked={animal.value} onChange={this.handleCheckbox.bind(this)}/>
                    <label htmlFor={animal.name}>{animal.name}</label>
                </span>
                    )}
                </div>
            </fieldset>

            {/*infomation*/}
            <fieldset>
                <legend>Infomation</legend>
                <div className="item">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handleChangeName.bind(this)}
                           placeholder="Jane"/>
                </div>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    }

}

export default MyForm;
