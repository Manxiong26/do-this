import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* deleteTask(action) {
    try{
        console.log('action payload', action.payload);

        yield axios.delete(`/api/task_user/${action.payload}`);
        yield put({ type: 'FETCH_TASK'});
    } catch (error) {
        console.log('error in Delete', error);
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_TASK', deleteTask);
  }

export default deleteSaga;