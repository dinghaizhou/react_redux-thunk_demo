import * as actionTypes from './actionTypes'

export function login(value, ...params) {
    return {
        type: actionTypes.LOGIN,
        payload: value
    }
}