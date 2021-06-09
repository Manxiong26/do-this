import distanceReducer from './distance.reducer';

describe('Testing distanceReducer...', () => {

    test('Initial stage should be an empty OBJECT...', () => {
        let action = {};
        let state = undefined;
        let returnedState = distanceReducer(state, action);
        expect( returnedState ).toEqual( {} );
    })
    //TODO - set task action
    test('Test set distance (used after login)...', () => {
        let distance = {notes: 'bleh', id: 0 }
        let action = {type: 'SET_DISTANCE', payload: distance};
        let state = {};
        let returnedState = distanceReducer(state, action);
        expect( returnedState ).toEqual( distance );
    })
})