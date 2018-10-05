import C from '../common/js/constants';

const peoples = (state = [], action) => {
    var data;
    switch (action.type) {
        case C.INIT_STORE:
            return action.store;
        case C.ADD:
            data = [
                ...state,
                Object.assign({}, action)
            ];
            localStorage.setItem('store', JSON.stringify(data));
            return data;
        case C.REMOVE:
            data = state.filter(p => p.id !== action.id);
            localStorage.setItem('store', JSON.stringify(data));
            return data;
        case C.UPDATE:
            data = state.map(p => {
                if (p.id === action.id) {
                    return Object.assign({}, p, action);
                } else {
                    return p;
                }
            })
            localStorage.setItem('store', JSON.stringify(data));
            return data;
        default:
            return state;
    }

}

export default peoples;