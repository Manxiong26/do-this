import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

function* fetchTask (action){
    console.log('fetching add task by id');
    
    
    try {
        const task = yield axios.get(`/api/task_user/`)
        yield put({ type: 'SET_TASK', payload: task.data})
        
    } catch (error ){
        console.log('Error with task fetching request', error);
        
    }
}

function* taskSaga() {
    yield takeLatest('FETCH_TASK', fetchTask);
  }

export default taskSaga;