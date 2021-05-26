import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

function* fetchTask (){
    try {
        const task = yield axios.get('/api/task')
        yield put({ type: 'SET_TASK', payload: task.data})
    } catch (error ){
        console.log('Error with task fetching request', error);
        
    }
}

function* taskSaga() {
    yield takeLatest('FETCH_TASK', fetchTask);
  }

export default taskSaga;