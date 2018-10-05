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
            'ID', 'Name', 'Phone', 'Note', 'State', 'UpdateTime', 'CreateTime', 'Action'
        ]
    }

    render() {
        return <div className={css.peopleList}>
            <PeopleListTitle titles={this.titles}/>
            {this.props.peoples.map(p =>
                <PeopleItem key={p.id} {...p}
                            onRemove={() => this.props.onRemove(p.id)}
                    // onUpdate={()=> this.props.onUpdate(p)}
                />)
            }
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
        item.createTime = item.createTime.substr(0, 10);
        item.updateTime = item.updateTime.substr(0, 10);
        return item;
    });
    return state
}, mapDispatchToProps)(PeopleList));
