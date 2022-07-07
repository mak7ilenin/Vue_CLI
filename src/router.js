import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home';

// Vue.use(Router)

const routes = [
    { 
        path: '/',
        component: Home
    },
    {
        path: '/todos',
        component: () => import('@/views/Todos.vue')
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;