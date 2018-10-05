import {connect} from 'react-redux';

import PeopleList from '../PeopleList/PeopleList';
import {setPeopleFilter} from "../../actions/index";

const mapStateToProps = state => ({
    peoples: (state) => {
        return state;
    }
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    // onClick: () => dispatch(setPeopleFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
