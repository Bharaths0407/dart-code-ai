import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/modules/auth/signIn/components/SignIn.vue'
import SignUp from '@/modules/auth/signUp/components/SignUp.vue';



const routes = [

    { path: '/sign-in', component: SignIn },
    { path: '/sign-up', component: SignUp },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
