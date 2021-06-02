import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import distanceSaga from './distance.saga';
import randomTaskSaga from './randomTask.saga';
import addTaskSaga from './addTask.saga';
import taskSaga from './task.saga';
import deleteSaga from './delete.saga';
import updateCompleteSaga from './completed.saga';
import getNoteSaga from './getNote.saga';
import updateNoteSaga from './note.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    distanceSaga(),
    randomTaskSaga(),
    addTaskSaga(),
    taskSaga(),
    deleteSaga(),
    updateCompleteSaga(),
    getNoteSaga(),
    updateNoteSaga(),
  ]);
}
