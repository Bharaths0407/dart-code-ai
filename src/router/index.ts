import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '@/components/AboutUs.vue';
import SignIn from '@/modules/auth/signIn/components/SignIn.vue'
import SignUp from '@/modules/auth/signUp/components/SignUp.vue';
import PricingPage from '@/modules/pricing/components/PricingPage.vue';
import HomePage from '@/modules/home/components/HomePage.vue';
import GetEarlyAccessPage from '@/components/GetEarlyAccessPage.vue';
import ThankyouCard from '@/components/ThankyouCard.vue';



const routes = [

    {path: '/', component: HomePage},
    { path: '/sign-in', component: SignIn },
    { path: '/sign-up', component: SignUp },
    { path: '/about', component: AboutUs },
    { path: '/pricing', component: PricingPage },
    { path: '/early-access', component: GetEarlyAccessPage },
    { path: '/thank-you', component: ThankyouCard},

]

const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } 
        else {
            return { top: 0, behavior: 'smooth' }
        }
    },
})

export default router
