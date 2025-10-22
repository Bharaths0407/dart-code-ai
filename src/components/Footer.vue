<script setup lang="ts">
import { ref } from 'vue';

const companyLinks = ref([
        { label: 'Pricing', href: '/pricing' },
        { label: 'Docs', href: '/docs' },
        { label: 'About Us', href: '/about' },
]);
const helpLinks =  ref(['Customer Support', 'Terms & conditions','Privacy Policy']);
const socialLinks = ref([
    {img:'/twitter.svg', url:'/twitter'},
    {img:'/facebook.svg', url:'/facebook'},
    {img:'/instagram.svg', url:'/instagram'},
    {img:'/github.svg', url:'/github'},
])

</script>

<template >
    <footer class="bg-[#E6E7F3] text-gray-500 pt-12 pb-6 ">
        <div class="container mx-auto px-4 relative flex items-center justify-between max-w-7xl">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
                <div>
                    <img src="/logoIcon.svg" alt="Logo Icon" class="h-10 w-auto mb-4"/>
                    <p class="text-sm text-[#667085]">Smarter automation. Faster releases. Fewer headaches. Join engineering teams who are transforming how they build and ship code, from pull request to production.</p>
                    <div class="flex space-x-4 mt-4">
                        <router-link v-for="(social, index) in socialLinks"
                            :to="social.url"
                            :key = "index"
                        >
                            <img :src="social.img" class="w-7 h-7"/>
                        </router-link>
                    </div>
                </div>

                <div>
                    <p class="text-sm text-gray-400 font-semibold mb-4">Company</p>
                    <ul class="space-y-2">
                        <li v-for="(link) in companyLinks" 
                        :key="link.label" 
                        :href="link.href"
                        class="font-semibold text-gray-500">
                        <router-link :to="link.href">
                            {{ link.label }}
                        </router-link>
                    </li>
                    </ul>
                </div>

                <div>
                    <p class="text-sm text-gray-400 mb-4 font-semibold">Help</p>
                    <ul class="space-y-2">
                        <li v-for="(link,index) in helpLinks" :key="index">
                            <a href="#" class="font-semibold text-gray-500">{{ link }}</a>
                        </li>
                    </ul>
                </div>

                <!-- News letter -->
                <div>
                    <p class="text-sm text-gray-400 mb-4 font-semibold">Subscribe to Newsletter</p>
                    <div class="flex">
                        <input type="email" placeholder="Enter email address" class="bg-white px-4 py-2 w-full pl-4  pr-12 rounded-l-lg"/>
                        <router-link to="/thank-you" aschild>
                            <button type="button" class="px-6 py-2 bg-primary text-white rounded-r-lg">Join</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
