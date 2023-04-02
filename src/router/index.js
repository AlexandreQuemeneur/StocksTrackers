import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            name: 'Home', 
            component: HomeView 
        },
        {
            path: '/dashboard', 
            name: 'dashboard', 
            component:() => import('../views/DashboardView.vue')
        },
    ] 
})

export default router;