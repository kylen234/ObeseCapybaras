import { put, call } from 'redux-saga/effects';
import { loginUserService } from '../services/authenticationService';
import { push } from 'react-router-redux';
import * as types from '../actions'
import MyProfile from "../pages/MyProfile";
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
        // const response = yield call(() => loginUserService, payload);
        console.log(response);
        yield put({ type: types.LOGIN_USER_SUCCESS, response })

    } catch(error) {
        yield put({ type: types.LOGIN_USER_ERROR, error })
    }
}