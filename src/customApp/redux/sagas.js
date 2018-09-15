import { all } from 'redux-saga/effects';
import githubSearchSagas from './githubSearch/sagas';
//import invoicesSagas from './invoice/saga';

export default function* devSaga() {
  yield all([
    githubSearchSagas()//,
    //invoicesSagas()
  ]);
}
