import MainLayout from '@/layouts/main';
import AuthMiddleware from '../middlewares/auth';
export const roleRoutes = {
    path: '/roles',
    component: MainLayout,
    redirect: '/roles/list',
    children: [{
            path: '/roles/list',
            component: () =>
                import ('@/views/Roles'),
            name: 'Roles',
            meta: {
                title: 'Роллар',
                middleware: [AuthMiddleware],
            },
        },
        {
            path: '/roles/create',
            component: () =>
                import ('@/views/Roles/Create'),
            name: 'RoleStore',
            meta: {
                title: 'Рол қўшиш',
                middleware: [AuthMiddleware],
            },
        },
        {
            path: '/roles/update/:id',
            component: () =>
                import ('@/views/Roles/Update'),
            name: 'RoleUpdate',
            meta: {
                title: 'Ролни ўзгартириш',
                middleware: [AuthMiddleware],
            },
        },
    ],
};