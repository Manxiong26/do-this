import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchDistance (){
    try {
        const distance = yield axios.get('/api/distance/')
        yield put({ type: 'SET_DISTANCE', payload: distance.data})
    } catch (error ){
        console.log('Error with distance fetching request', error);
        
    }
}

function* distanceSage() {
    yield takeLatest('FETCH_DISTANCE', fetchDistance);
  }

export default distanceSage;