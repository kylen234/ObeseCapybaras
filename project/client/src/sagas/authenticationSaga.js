import { put, call } from 'redux-saga/effects';
import * as types from '../actions'
import axios from "axios";
export function* loginSaga(payload) {
    try {
        const response = yield call(() =>
            axios
            .post(`http://localhost:3000/collection2/login`, payload.user)
                .then(response => {
                // If data comes back with a CastError, send error message to client
                    return response;
                }).then(json => {
                    return json;
                }));
        yield put({ type: types.LOGIN_USER_SUCCESS, response })

    } catch(error) {
        yield put({ type: types.LOGIN_USER_ERROR, error })
    }
}

export function* logoutSaga(payload) {
    try {
        const response = yield call(() =>
            axios
                .post(`http://localhost:3000/collection2/logout`, payload)
                .then(response => {
                    // If data comes back with a CastError, send error message to client
                    return response;
                }).then(json => {
                return json;
            }));
        yield [
            put({ type: types.LOGOUT_USER_SUCCESS, response })
        ];
    } catch(error) {
        yield put({ type: types.LOGOUT_USER_ERROR, error });
    }
}