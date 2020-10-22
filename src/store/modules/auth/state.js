import {
    getAccessToken
} from "@/utils/auth"
export const state = {
    access_token: getAccessToken()
}