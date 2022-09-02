import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';

export function* logSaga(action: PayloadAction) {
  console.log('Boy => Saga:', action);
}

export default function* counterSaga() {
  yield takeEvery('*', logSaga);
}
