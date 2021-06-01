import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';


function* addComment(action) {
    console.log('Adding comments');
    console.log('CHECKING PAYLOAD ADD COMMENT', action.payload);
    try {
        yield axios.post('/api/task_user', action.payload);
        console.log('CHECKING ADD COMMENTS PAYLOAD', action.payload);
        yield put({type: 'FETCH_TASK'})
    } catch(err){
        console.log('ERROR in add Comments', err);
        
    }
    
}

function* addCommentSaga() {
    yield takeLatest('ADD_COMMENT', addComment);
  }

  export default addCommentSaga;