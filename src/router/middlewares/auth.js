import store from "@/store";
export default function auth({
    next,
    router
}) {
    store.dispatch("auth/checkExperesToken").then((res) => {
        if (!res) {
            return router.push({
                name: 'Login'
            })
        }
    })
    return next()
}