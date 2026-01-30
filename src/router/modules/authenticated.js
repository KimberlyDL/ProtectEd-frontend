const authenticatedRoutes = [
    {
        path: '/dashboard',
        component: () => import('@/layouts/UserDashboardLayout.vue'),
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'user.dashboard',
                component: () => import('@/views/dashboard/UserDashboard.vue'),
                meta: { title: 'Dashboard' }
            },
            {
                path: 'modules/:id',
                name: 'user.module',
                component: () => import('@/views/dashboard/ModuleDetail.vue'),
                meta: { title: 'Module' }
            },
            {
                path: 'learning-paths/:id',
                name: 'user.learning-path',
                component: () => import('@/views/dashboard/LearningPath.vue'),
                meta: { title: 'Learning Path' }
            },
            {
                path: 'leaderboard',
                name: 'user.leaderboard',
                component: () => import('@/views/dashboard/Leaderboard.vue'),
                meta: { title: 'Leaderboard' }
            },
            {
                path: 'settings',
                name: 'user.settings',
                component: () => import('@/views/dashboard/Settings.vue'),
                meta: { title: 'Settings' }
            }
        ]
    },

    {
        path: '/settings',
        component: () => import('@/layouts/UserDashboardLayout.vue'),
        children: [
            {
                path: '',
                name: 'settings',
                component: () => import('@/views/dashboard/Settings.vue'),
                meta: { requiresAuth: true, title: 'Account Settings' }
            }
        ]
    }
]

export default authenticatedRoutes
