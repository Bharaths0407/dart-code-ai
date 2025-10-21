import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/modules/auth/signIn/components/SignIn.vue'


const routes = [

    { path: '/sign-in', component: SignIn },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
