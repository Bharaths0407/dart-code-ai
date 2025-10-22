import { createRouter, createWebHistory } from 'vue-router';

import AboutUs from '@/components/AboutUs.vue';
import ThankyouCard from '@/components/ThankyouCard.vue';
import HomePage from '@/modules/home/components/HomePage.vue';
import SignIn from '@/modules/auth/signIn/components/SignIn.vue';
import SignUp from '@/modules/auth/signUp/components/SignUp.vue';
import GetEarlyAccessPage from '@/components/GetEarlyAccessPage.vue';
import PricingPage from '@/modules/pricing/components/PricingPage.vue';

import { ROUTES } from '@/constants';



const routes = [

    { path: ROUTES.HOME, component: HomePage },
    { path: ROUTES.SIGN_IN, component: SignIn },
    { path: ROUTES.SIGN_UP, component: SignUp },
    { path: ROUTES.ABOUT, component: AboutUs },
    { path: ROUTES.PRICING, component: PricingPage },
    { path: ROUTES.EARLY_ACCESS, component: GetEarlyAccessPage },
    { path: ROUTES.THANK_YOU, component: ThankyouCard },

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
