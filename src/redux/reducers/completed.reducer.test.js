import completed from './completed.reducer';

describe('Testing completed...', () => {

    test('Initial stage should be an empty OBJECT...', () => {
        let action = [];
        let state = undefined;
        let returnedState = completed(state, action);
        expect( returnedState ).toEqual( [] );
    })
    //TODO - set task action
    test('Test set completed (used after login)...', () => {
        let complete = {notes: 'complete', id: 0 }
        let action = {type: 'SET_TASK', payload: complete};
        let state = [];
        let returnedState = completed(state, action);
        expect( returnedState ).toEqual( complete );
    })
})