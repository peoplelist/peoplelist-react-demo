import {combineReducers} from 'redux';
import peoples from './peoples';
import peopleFilter from './peopleFilter';

export default combineReducers({
    peoples,
    peopleFilter
});
