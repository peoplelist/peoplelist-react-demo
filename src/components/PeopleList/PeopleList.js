import React, {Component} from "react";
import {connect} from 'react-redux';
import css from './PeopleList.css';
import {remove} from '../../actions/index';
import {withRouter} from 'react-router';
import {splitTime} from '../../common/js/common';

class PeopleList extends Component {
    constructor(props) {
        super(props);
        // this.peoples = props.peoples;
        this.titles = [
            // 'Name', 'Phone', 'Note', 'State', 'Update Time', 'Create Time', 'Action'
            'Name', 'Phone', 'Update At', 'Action'
        ];

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
                        <td width="25%">
                            <div>{p.name}</div>
                        </td>
                        <td width="35%">
                            <div>{p.phone}</div>
                        </td>
                        {/*<td width="30%">*/}
                        {/*<div>{p.note}</div>*/}
                        {/*</td>*/}
                        {/*<td width="10%">*/}
                        {/*<div>{p.completed}</div>*/}
                        {/*</td>*/}
                        <td width="20%">
                            <div className={css.timeBox}>
                                {splitTime(p.updateTime).map((v, i) =>
                                    <div key={i}> {v} </div>)
                                }
                            </div>
                        </td>
                        {/*<td width="10%">*/}
                        {/*<div className={css.timeBox}>*/}
                        {/*<div>{p.createTimeDate}</div>*/}
                        {/*<div>{p.createTimeTime}</div>*/}
                        {/*</div>*/}
                        {/*</td>*/}
                        <td width="20%">
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
    //根据id删除一项
    onRemove: (id) => {
        console.log('remove id=' + id);
        dispatch(remove(id));
    },
});

export default withRouter(connect(state => {
    if (!state.peoples) {
        state.peoples = [];
    }
    return state;
}, mapDispatchToProps)(PeopleList));
