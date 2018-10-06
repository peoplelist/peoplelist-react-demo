import C from '../common/js/constants';
import uuid from 'uuid';

export const add = (data) => {
    var date = new Date().toISOString();
    return Object.assign({}, data, {
        type: C.ADD,
        id: uuid.v4().split('-')[0],
        completed: 'false',
        updateTime: date,
        createTime: date
    });
};

export const remove = (id) => ({
    type: C.REMOVE,
    id
});

export const update = (data) => {
    return {
        type: C.UPDATE,
        updateTime: new Date().toISOString(),
        id: data.id,
        name: data.name,
        phone: data.phone,
        note: data.note,
        createTime: data.createTime,
        completed: data.completed
    };
};

export const setPeopleFilter = filter => ({
    type: C.FILTER,
    filter
});

export const initStore = (store) => ({
    type: C.INIT_STORE,
    store: store
});