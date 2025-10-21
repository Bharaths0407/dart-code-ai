import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '@/components/AboutUs.vue';
import SignIn from '@/modules/auth/signIn/components/SignIn.vue'
import SignUp from '@/modules/auth/signUp/components/SignUp.vue';



const routes = [

    { path: '/sign-in', component: SignIn },
    { path: '/sign-up', component: SignUp },
    { path: '/about', component: AboutUs },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
