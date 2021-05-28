import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

function* addTask(action) {
    console.log('Adding task');
    console.log('CHECKING PAYLOAD', action.payload);
    try {
        yield axios.post('/api/task/', action.payload);
        console.log('CHECKING PAYLOAD', action.payload);
        
        yield put({ type: 'FETCH_RANDOM' })
    } catch (error) {
        console.log('Error adding task', error);
    }
}

function* addTaskSaga() {
    yield takeLatest('ADD_TASK', addTask);
  }

  export default addTaskSaga;