<script setup lang="ts">
import google from '@/assets/google.svg';
import apple from '@/assets/apple.svg';
import github from '@/assets/github.svg';
import microsoft from '@/assets/microsoft.svg';
import { CircleCheck } from 'lucide-vue-next';

import Input from "@/components/ui/input/Input.vue";
import Button from '@/components/ui/button/Button.vue';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
</script>

<template>
    <div>
        <!-- Header -->
        <header class="top-0 bg-background z-50 sticky">
            <div class="relative flex items-center justify-between max-w-7xl mx-auto px-5 py-5">
                <a href="/" class="flex items-center">
                    <img src="/logo.svg" alt="Logo" class="h-10 w-auto" />
                </a>
            </div>
        </header>

        <!-- Main layout -->
        <div
            class="relative flex flex-col lg:flex-row items-top justify-center lg:justify-between max-w-7xl mx-auto px-5 py-10 gap-10">
            <!-- RIGHT SIDE CARD (on desktop) / TOP (on mobile) -->
            <div class="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
                <Card class="bg-primary text-white w-full sm:w-[400px] md:w-[450px] lg:w-[500px] rounded-3xl">
                    <CardHeader>
                        <CardTitle class="text-2xl font-bold">
                            Solve Issues Faster, Build Better
                        </CardTitle>
                        <CardDescription class="text-white/90 text-md">
                            Sign in to access priority issue resolution, expert guidance, and exclusive developer
                            resources.
                        </CardDescription>
                    </CardHeader>

                    <CardContent class="space-y-4">
                        <div v-for="(feature, index) in features" :key="index" class="flex items-start space-x-3">
                            <div class="mt-1 shrink-0">
                                <CircleCheck class="text-white size-4" />
                            </div>
                            <div>
                                <p class="font-semibold text-sm">
                                    {{ feature.title }}
                                    <span class="text-sm font-normal text-white/90">{{ feature.desc }}</span>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <!-- LEFT SIDE FORM -->
            <div class="flex flex-col mt-3 space-y-5 w-full lg:w-1/2 order-2 lg:order-1 items-center lg:items-start">
                <!-- Inner wrapper ensures consistent width -->
                <div class="w-full sm:w-[400px] md:w-[450px]">
                    <!-- OAuth Buttons -->
                    <div class="space-y-3">
                        <Button variant="outlineHover" class="w-full h-[54px] text-sm text-[#5B5959]">
                            <img :src="google" alt="Google" class="size-5 mr-3" />
                            Sign Up With Google
                        </Button>

                        <Button variant="outlineHover" class="w-full h-[54px] text-sm text-[#5B5959]">
                            <img :src="apple" alt="Apple" class="size-6 mr-3" />
                            Sign Up With Apple
                        </Button>

                        <Button variant="outlineHover" class="w-full h-[54px] text-sm text-[#5B5959]">
                            <img :src="github" alt="Github" class="size-5 mr-3" />
                            Sign Up With Github
                        </Button>

                        <Button variant="outlineHover" class="w-full h-[54px] text-sm text-[#5B5959]">
                            <img :src="microsoft" alt="Microsoft" class="size-5 mr-3" />
                            Sign Up With Microsoft
                        </Button>
                    </div>

                    <!-- Divider -->
                    <div class="w-full mx-auto px-1">
                        <div class="flex items-center gap-3 py-4 mt-2">
                            <div class="flex-1 h-px bg-primary" />
                            <h1 class="text-xl text-primary">Login</h1>
                            <div class="flex-1 h-px bg-primary" />
                        </div>
                    </div>

                    <!-- Login Form -->
                    <div class="flex flex-col space-y-5">
                        <div>
                            <h1 class="text-lg text-primary">Email</h1>
                            <Input class="border-primary mt-1 h-[50px] w-full" type="email" placeholder="Email" />
                        </div>

                        <div>
                            <h1 class="text-lg text-primary">Password</h1>
                            <Input class="border-primary mt-1 h-[50px] w-full" type="password" placeholder="Password" />
                        </div>

                        <div class="flex justify-end mt-1">
                            <Button variant="link" class="underline cursor-pointer">
                                Forgot password
                            </Button>
                        </div>

                        <Button class="mt-4 h-[50px] rounded-2xl w-full">
                            Sign in with email
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            features: [
                { title: 'Faster Response Times: ', desc: 'Get Priority Support On Critical Issues.' },
                { title: 'Expert Guidance: ', desc: 'Work Directly With Aortem Engineers For In-Depth Troubleshooting.' },
                { title: 'Exclusive Developer Tools: ', desc: 'Optimize Performance With Premium Resources.' },
                { title: 'Priority Resolutions: ', desc: 'Get Faster Response Times From Experts.' },
                { title: 'Dedicated Support Engineers: ', desc: 'Direct Assistance From The Team That Built Aortem.' },
                { title: 'Advanced Debugging & Optimization: ', desc: 'Tools And Guidance To Enhance Performance.' },
                { title: 'Security & Compliance Assistance: ', desc: 'Ensure Best Practices For System Integrity.' },
            ],
        };
    },
};
</script>
