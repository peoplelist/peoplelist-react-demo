import React, {Component} from 'react';
import css from './PeopleItem.css';


class PeopleListTitle extends Component {
    render() {
        return <div className={css.peopleTitle}>
            {this.props.titles.map((title, index) =>
                <label key={index}>{title}</label>
            )}
        </div>
    }
}

export default PeopleListTitle;