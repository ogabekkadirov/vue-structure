import Cookies from "js-cookie";

const AccessTokenKey = "docs_web_access_token"
const RefreshTokenKey = "docs_web_refresh_token"

//set functions
export function setAccessToken(token) {
    return Cookies.set(AccessTokenKey, token);
}
export function setRefreshToken(token) {
    return Cookies.set(RefreshTokenKey, token);
}
//remove functions
export function removeAccessToken() {
    return Cookies.remove(AccessTokenKey);
}
export function removeRefreshToken() {
    return Cookies.remove(RefreshTokenKey);
}
// get functions
export function getAccessToken() {
    return Cookies.get(AccessTokenKey);
}
export function getRefreshToken() {
    return Cookies.get(RefreshTokenKey);
}