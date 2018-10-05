import React from 'react';
import {connect} from 'react-redux';
import {add, update} from '../../actions';
import css from "./AddPeople.css";
import {withRouter} from 'react-router';

class AddPeople extends React.Component {
    constructor(props) {
        super(props);
        this.name = '';
        this.phone = '';
        this.note = '';
        this.state = {
            isNew: true,
            btnLabel: 'Add'
        }
        this.query = null;

    }

    componentDidMount() {
        if (this.props.match.params.id === 'new') {
            this.isNew = true;
        } else {
            var query = this.props.location.query;
            this.query = query;
            console.log('query:');
            console.log(query);
            if (query) {
                this.setState({isNew: false, btnLabel: 'Update'});
                this.name.value = query.name;
                this.phone.value = query.phone;
                this.note.value = query.note;
            }
        }
    }

    submitDate(e) {
        e.preventDefault();
        if (this.state.isNew) {
            this.props.dispatch(add({name: this.name.value, phone: this.phone.value, note: this.note.value}));
        } else {
            this.props.dispatch(update({
                id: this.props.match.params.id,
                name: this.name.value,
                phone: this.phone.value,
                note: this.note.value,
                completed: this.query.completed,
                createTime: this.query.createTime
            }));
        }
        this.name.value = '';
        this.phone.value = '';
        this.note.value = '';
        this.props.history.push('/');
    }

    render() {
        return <div>
            <form onSubmit={this.submitDate.bind(this)}>
                <div className={css.formItem}>
                    <label>Name:</label>
                    <input ref={ref => this.name = ref}/>
                </div>
                <div className={css.formItem}>
                    <label>Phone:</label>
                    <input ref={ref => this.phone = ref}/>
                </div>
                <div className={css.formItem}>
                    <label>Note:</label>
                    <input ref={ref => this.note = ref}/>
                </div>
                <div>
                    <button className={css.submitBtn} type="submit">{this.state.btnLabel}</button>
                </div>
            </form>
        </div>
    }
}

export default withRouter(connect()(AddPeople));