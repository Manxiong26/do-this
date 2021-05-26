import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchDistance (){
    try {
        const distance = yield axios.get('/api/distance/')
        yield put({ type: 'SET_DISTANCE', payload: distance.data})
    } catch (error ){
        console.log('Error with distance fetching request', error);
        
    }
}



export default fetchDistance;