import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

function* updateNote(action){
   console.log('UPDATE FROM NOTE SAGA', action.payload); 
   try{
        yield axios.put(`/api/note/${action.payload.id}`, action.payload)
        console.log('SAGA: Completed updating', action.payload);
        yield put({type: 'FETCH_NOTE', payload: action.payload.id});
        yield put({type: 'SET_NOTE', payload: action.payload})
    } catch (err) {
        console.log('PUT ROUTE WITH UPDATING NOTE error', err);
        
    }
}

function* updateNoteSaga() {
    yield takeLatest('UPDATE_NOTE', updateNote)
}

export default updateNoteSaga;