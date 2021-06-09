import taskReducer from './task.reducer';

describe('Testing taskReducer...', () => {

    test('Initial stage should be an empty OBJECT...', () => {
        let action = [];
        let state = undefined;
        let returnedState = taskReducer(state, action);
        expect( returnedState ).toEqual( [] );
    })
    //TODO - set task action
    test('Test set task (used after login)...', () => {
        let task = {task: 'walk', id: 0 }
        let action = {type: 'SET_TASK', payload: task};
        let state = {};
        let returnedState = taskReducer(state, action);
        expect( returnedState ).toEqual( task );
    })
})