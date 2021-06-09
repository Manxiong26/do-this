import note from './note.reducer';

describe('Testing note...', () => {

    test('Initial stage should be an empty OBJECT...', () => {
        let action = {};
        let state = undefined;
        let returnedState = note(state, action);
        expect( returnedState ).toEqual( {} );
    })
    //TODO - set task action
    test('Test set note (used after login)...', () => {
        let notes = {notes: 'note', id: 0 }
        let action = {type: 'SET_NOTE', payload: notes};
        let state = {};
        let returnedState = note(state, action);
        expect( returnedState ).toEqual( notes );
    })
})