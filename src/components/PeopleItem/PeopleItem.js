import React, {Component} from 'react';
import css from './PeopleItem.css';
// import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class PeopleItem extends Component {
    constructor(props) {
        super(props);
        this.onEdit = () => {
            // window.location.replace("#/add/"+this.props.id);
            var {id, name, phone, note, updateTime, createTime, completed} = this.props;
            this.props.history.push({
                pathname: '/add/' + this.props.id,
                query: {id, name, phone, note, updateTime, createTime, completed}
            })
        }
    }

    render() {
        return <div className={css.peopleItem}>
            <label>{this.props.id}</label>
            <label>{this.props.name}</label>
            <label>{this.props.phone}</label>
            <label>{this.props.note}</label>
            <label>{this.props.completed}</label>
            <label>{this.props.updateTime}</label>
            <label>{this.props.createTime}</label>
            <div className={css.action}>
                <div onClick={this.onEdit.bind(this)}>Edit</div>
                <div onClick={() => this.props.onRemove()}>Delete</div>
            </div>
        </div>
    }
}

export default withRouter(PeopleItem);
// export default withRouter(connect()(PeopleItem));
