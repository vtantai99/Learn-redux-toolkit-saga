import { PayloadAction } from "@reduxjs/toolkit";
import { STORAGE } from "constant";
import { call, fork, put, take } from "redux-saga/effects";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "utils";
import { authAction, LoginPayload } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
  try {
    setLocalStorage(STORAGE.ACCESS_TOKEN, 'Nothing')
    yield put(authAction.loginSuccess({
      id: 1,
      name: 'Tai Vo'
    }))
  } catch (error) {
    yield put(authAction.loginFailed('Error'))
  }
}

function* handleLogout() {
  console.log('Handle logout')
  removeLocalStorage(STORAGE.ACCESS_TOKEN)
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(getLocalStorage(STORAGE.ACCESS_TOKEN))

    if (!isLoggedIn) {
      // FOR listen login
      const action: PayloadAction<LoginPayload> = yield take(authAction.loginRequest.type)
      yield fork(handleLogin, action.payload)
    }
    // FOR listen logout
    yield take(authAction.logoutRequest.type)
    yield call(handleLogout)
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow)
}