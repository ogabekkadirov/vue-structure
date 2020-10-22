import {
    login,
    logout,
    refresh
} from "@/api/auth"
import * as types from './properties/mutation_types'
import {
    setAccessToken,
    removeAccessToken,
    getAccessToken,
    getRefreshToken
} from "@/utils/auth"
export const actions = {
    login({
        commit
    }, ruleForm) {
        const {
            username,
            password
        } = ruleForm;
        return new Promise((resolve, reject) => {
            login({
                    username: username,
                    password: password,
                })
                .then(response => {
                    const data = response
                    commit(types.SET_AUTH_ACCESS_TOKEN, data.access_token);
                    setAccessToken(data.access_token);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    // logout
    logout({
        commit
    }) {
        return new Promise((resolve, reject) => {
            logout()
                .then(() => {
                    commit(types.REMOVE_AUTH_ACCESS_TOKEN);
                    removeAccessToken();
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    // refresh auth token
    refresh({
        commit,
        dispatch
    }) {
        return new Promise((resolve, reject) => {
            const refresh_token = getRefreshToken()
            refresh({
                    refresh: refresh_token
                })
                .then((response) => {
                    const data = response
                    if (data.access) {
                        commit(types.SET_AUTH_ACCESS_TOKEN, data.access_token);
                        setAccessToken(data.access_token);
                        resolve(response);
                    }
                })
                .catch((err) => {
                    reject(err);
                    dispatch("resetToken");
                });
        });
    },
    resetToken({
        commit
    }) {
        commit(types.REMOVE_AUTH_ACCESS_TOKEN);
        removeAccessToken();
    },

    checkExperesToken({
        commit,
        dispatch
    }) {
        let token = getAccessToken();
        if (!token) {
            return false
        }
        var base64Url = token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(
            atob(base64)
            .split("")
            .map(function(c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );
        if (!JSON.parse(jsonPayload).exp) {
            dispatch("resetToken");
            return false;
        }
        let time = new Date((JSON.parse(jsonPayload).exp - 1200) * 1000);
        if (time < new Date()) {
            dispatch("refresh");
        }
        // setTimeout(checkExperesToken(), 120000);
        return true;
    },
}