import randomTaskReducer from './randomTask.reducer';

describe('Testing randomTaskReducer...', () => {

    test('Initial stage should be an empty OBJECT...', () => {
        let action = {};
        let state = undefined;
        let returnedState = randomTaskReducer(state, action);
        expect( returnedState ).toEqual( {} );
    })
    //TODO - set task action
    test('Test set task (used after login)...', () => {
        let task = {task: 'walk', id: 0 }
        let action = {type: 'SET_RANDOM', payload: task};
        let state = {};
        let returnedState = randomTaskReducer(state, action);
        expect( returnedState ).toEqual( task );
    })
})