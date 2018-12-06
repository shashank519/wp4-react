import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  LOGGING_IN
} from "Actions/loginActions.js";
import {
  logingInUser,
  userLoggedIn,
  userLoginError
} from "Actions/loginActions.js";

export function* loginUserApi() {
  try {
    // const loginApiResponse = yield call(request, resuestUrl)
    // yield put(logingInUser);
    setTimeout(() => {
      yield put(userLoggedIn({name: 'Shashank', age: 28, email: 'sd@gmail.com'}));
    }, 2000);
  } catch (error) {
    yield put(userLoginError({error: 'Error login user.'}));
  }
}

export default function* loginUser(){
  yield takeLatest(LOGGING_IN, loginUserApi)
}
