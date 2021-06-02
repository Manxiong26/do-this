import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

function* getNote(action) {
    console.log('fetching note by id', action.payload);
    try {
        const note = yield axios.get(`/api/note/${action.payload}`)
        yield put({ type: 'SET_NOTE', payload: note.data })
    } catch (error) {
        console.log('Error with note request', error);
    }
}

function* getNoteSaga() {
    yield takeLatest('FETCH_NOTE', getNote)
}

export default getNoteSaga;