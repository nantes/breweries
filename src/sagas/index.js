import { put, takeLatest, all } from 'redux-saga/effects';

function* searchBreweries(query) {

  const json = yield fetch('https://api.openbrewerydb.org/breweries?by_name='+query.value)
        .then(response =>  response.json());    

  yield put({ type: "SEARCH_BREWERIES_BY_NAME_SUCCESS", json: json, });
}

function* actionWatcher() {
     yield takeLatest('SEARCH_BREWERIES_BY_NAME', searchBreweries)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}