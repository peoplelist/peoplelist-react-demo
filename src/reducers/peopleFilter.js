import C from '../common/js/constants';

const peopleFilter = (state = C.SHOW_ALL, action) => {
    switch (action.type) {
        case C.FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default peopleFilter;