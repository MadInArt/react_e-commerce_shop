import { all, call, takeLatest, put } from "redux-saga/effects";

import { clearCart } from "./cart-action";
import  userActions  from "../user/user-constants";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActions.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}