import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

function* fetchRandomTask (){
    try {
        const task = yield axios.get('/api/task/random')
        yield put({ type: 'SET_RANDOM', payload: task.data})
    } catch (error ){
        console.log('Error with task fetching request', error);
        
    }
}

function* randomTaskSaga() {
    yield takeLatest('FETCH_RANDOM_TASK', fetchRandomTask);
  }

export default randomTaskSaga;