import loginApi from '@/api/login'
import { setItem } from '@/helpers/PersistanceStorage'

const state = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}

export const mutationTypes = {
    loginStart: '[login] loginStart',
    loginSuccess: '[login] loginSuccess',
    loginFailure: '[login] loginFailure'
}

const mutations = {
    [mutationTypes.loginStart](state) {
        state.isSubmitting = true;
        state.validationErrors = null;
    },
    [mutationTypes.loginSuccess](state, payload) {
        state.isSubmitting = false;
        state.currentUser = payload;
        state.isLoggedIn = true;
    },
    [mutationTypes.loginFailure](state, payload) {
        state.isSubmitting = false;
        state.validationErrors = payload;
    }
}

export const actionTypes = {
    login: '[login] login'
}

const actions = {
    [actionTypes.login](context, credentials) {
        return new Promise( resolve => {
            context.commit(mutationTypes.loginStart)
            loginApi
            .login(credentials)
            .then(response => {
                context.commit(mutationTypes.loginSuccess, response.data.user);
                setItem('acessToken', response.data.user.token);
                resolve(response.data.user)
            })
            .catch(result => {
                context.commit(mutationTypes.loginFailure, result.response.data.errors)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
}