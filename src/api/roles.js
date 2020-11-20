import request from "@/utils/request";

export function permissionParents(query) {
    return request({
        url: "permissions/parents",
        method: "GET",
        params: query
    });
}