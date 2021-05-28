import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

function* updateComplete(action){
    try{
        console.log('UPDATE FROM COMPLETE SAGA', action.payload);
        yield axios.put(`/api/task_user/${action.payload}`)
        console.log('SAGA: Completed updating', action.payload);
        yield put({type: 'FETCH_TASK'});
    } catch (err) {
        console.log('PUT ROUTE error', err);
        
    }
}

function* updateCompleteSaga() {
    yield takeLatest('UPDATE_COMPLETE', updateComplete)
}

export default updateCompleteSaga;