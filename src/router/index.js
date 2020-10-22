import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '@/layouts/main'
import AuthMiddleware from './middlewares/auth'
Vue.use(VueRouter)

const routes = [{
        path: "/",
        component: MainLayout,
        redirect: '/',
        children: [{
            path: '/',
            component: () =>
                import ('../views/Home'),
            name: 'Home',
            meta: {
                title: 'Асосий саҳифа',
                middleware: [AuthMiddleware],
            }
        }]
    },
    {
        path: "/auth",
        component: MainLayout,
        redirect: '/auth/login',
        children: [{
            path: '/auth/login',
            component: () =>
                import ('../views/Auth/login'),
            name: 'Login',
            meta: {
                title: 'Кириш',
            }
        }]
    },

]

const createRouter = () =>
    new VueRouter({
        mode: "history",
        scrollBehavior: () => ({
            y: 0,
        }),
        routes,
    });

const router = createRouter();

function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];
    if (!subsequentMiddleware) return context.next;

    return (...parameters) => {
        context.next(...parameters);
        const nextMiddleware = nextFactory(context, middleware, index + 1);
        subsequentMiddleware({
            ...context,
            next: nextMiddleware,
        });
    };
}

router.beforeEach((to, from, next) => {

    if (to.meta.middleware) {

        const middleware = Array.isArray(to.meta.middleware) ?
            to.meta.middleware : [to.meta.middleware];
        const context = {
            from,
            next,
            router,
            to,
        };
        const nextMiddleware = nextFactory(context, middleware, 1);

        return middleware[0]({
            ...context,
            next: nextMiddleware,
        });
    }
    return next();
});
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
}
export default router;