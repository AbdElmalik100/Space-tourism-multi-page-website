import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/Space-tourism-multi-page-website/',
        name: "home",
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/Space-tourism-multi-page-website/destination',
        name: "destination",
        component: () => import('../views/DestinationView.vue')
    },
    {
        path: '/Space-tourism-multi-page-website/crew',
        name: "crew",
        component: () => import('../views/CrewView.vue')
    },
    {
        path: '/Space-tourism-multi-page-website/technology',
        name: "technology",
        component: () => import('../views/TechnologyView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router