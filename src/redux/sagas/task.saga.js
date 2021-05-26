import axios from 'axios';
import { put} from 'redux-saga/effects';

function* fetchTask (){
    try {
        const task = yield axios.get('/api/task')
        yield put({ type: 'SET_TASK', payload: task.data})
    } catch (error ){
        console.log('Error with distance fetching request', error);
        
    }
}


export default fetchTask;