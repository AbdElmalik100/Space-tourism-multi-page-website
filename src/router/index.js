import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: "home",
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/destination',
        name: "destination",
        component: () => import('../views/DestinationView.vue')
    },
    {
        path: '/crew',
        name: "crew",
        component: () => import('../views/CrewView.vue')
    },
    {
        path: '/technology',
        name: "technology",
        component: () => import('../views/TechnologyView.vue')
    },
]

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
    routes
})

export default router