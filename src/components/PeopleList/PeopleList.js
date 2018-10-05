import React, {Component} from "react";
import {connect} from 'react-redux';
import css from './PeopleList.css';
import PeopleItem from '../PeopleItem/PeopleItem';
import PeopleListTitle from '../PeopleItem/PeopleListTitle';
import {remove} from '../../actions/index';
import {withRouter} from 'react-router';


class PeopleList extends Component {
    constructor(props) {
        super(props);
        // this.peoples = props.peoples;
        this.titles = [
            'Name', 'Phone', 'Note', 'State', 'Update Time', 'Create Time', 'Action'
        ]

        this.onEdit = (data) => {
            // window.location.replace("#/add/"+this.props.id);
            // var {id, name, phone, note, updateTime, createTime, completed} = data;
            delete data.createTimeDate;
            delete data.createTimeTime;
            delete data.updateTimeDate;
            delete data.updateTimeTime;
            this.props.history.push({
                pathname: '/add/' + data.id,
                query: {...data}
            });
        }

    }

    render() {
        return <div className={css.peopleList}>
            <table className={css.table} border="0" width="100%" cellPadding="0" cellSpacing="1px">
                <thead>
                <tr>
                    {this.titles.map((v, i) =>
                        <th key={i}>{v}</th>
                    )}
                </tr>
                </thead>
                <tbody>
                {this.props.peoples.map(p =>
                    <tr key={p.id}>
                        <td width="15%">
                            <div>{p.name}</div>
                        </td>
                        <td width="20%">
                            <div>{p.phone}</div>
                        </td>
                        <td width="20%">
                            <div>{p.note}</div>
                        </td>
                        <td width="10%">
                            <div>{p.completed}</div>
                        </td>
                        <td width="10%">
                            <div className={css.timeBox}>
                                <div> {p.updateTimeDate} </div>
                                <div> {p.updateTimeTime} </div>
                            </div>
                        </td>
                        <td width="10%">
                            <div className={css.timeBox}>
                                <div>{p.createTimeDate}</div>
                                <div>{p.createTimeTime}</div>
                            </div>
                        </td>
                        <td width="15%">
                            <div className={css.action}>
                                <div onClick={() => this.onEdit(p)}>Edit</div>
                                <div onClick={() => this.props.onRemove(p.id)}>Delete</div>
                            </div>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    onRemove: (id) => {
        console.log('remove id=' + id);
        dispatch(remove(id));
    },

    // onUpdate: (p) => {
    //     dispatch(update(id, name, note));
    // }
});

export default withRouter(connect(state => {
    state.peoples.map(item => {
        item.createTimeDate = item.createTime.substr(2, 8).split('-').join('/');
        item.createTimeTime = item.createTime.substr(11, 8);
        item.updateTimeDate = item.updateTime.substr(2, 8).split('-').join('/');
        item.updateTimeTime = item.updateTime.substr(11, 8);
        return item;
    });
    return state
}, mapDispatchToProps)(PeopleList));
