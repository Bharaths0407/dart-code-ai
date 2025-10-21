<script setup lang="ts">
    import google from '@/assets/google.svg';
    import apple from '@/assets/apple.svg';
    import github from '@/assets/github.svg';
    import microsoft from '@/assets/microsoft.svg';
    import { CircleCheck } from 'lucide-vue-next';

    import Input  from "@/components/ui/input/Input.vue";
    import Button from '@/components/ui/button/Button.vue';
    import {
        Card,
        CardContent,
        CardDescription,
        CardHeader,
        CardTitle,
    } from "@/components/ui/card"

    // Todo: should work on responsiveness of the page
</script>

<template>
    <div>
        <header class="top-0 bg-background z-50 sticky">
            <div class="relative flex items-center justify-between max-w-7xl mx-auto px-5 py-5">
                <!-- Logo -->
                <a href="/" class="flex items-center">
                    <img src="/logo.svg" alt="Logo" class="h-10 w-auto"/>
                </a>
            </div>
        </header>
        <div class="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-7xl mx-auto px-5 py-5 gap-10">
            <div class="flex flex-col mt-3 space-y-3">
                <!-- Sign-in and sign up buttons -->
                <Button 
                    variant="outlineHover"
                    class="w-[450px] h-[54px] text-sm text-[#5B5959]"
                >
                <img 
                    :src="google" 
                    alt="Menu" 
                    class="size-5 mr-3"
                />
                Sign Up With Google
                </Button>
                <Button 
                    variant="outlineHover"
                    class="w-[450px] h-[54px] text-sm text-[#5B5959]"
                >
                <img 
                    :src="apple" 
                    alt="Menu" 
                    class="size-6 mr-3"
                />
                Sign Up With Apple
                </Button>
                <Button 
                    variant="outlineHover"
                    class="w-[450px] h-[54px] text-sm text-[#5B5959]"
                >
                <img 
                    :src="github" 
                    alt="Menu" 
                    class="size-5 mr-3"
                />
                Sign Up With Github
                </Button>
                <Button 
                    variant="outlineHover"
                    class="w-[450px] h-[54px] text-sm text-[#5B5959]"
                >
                <img 
                    :src="microsoft" 
                    alt="Menu" 
                    class="size-5 mr-3"
                />
                Sign Up With Microsoft
                </Button>
                <div>
                    <div class="w-full max-w-3xl mx-auto px-1">
                        <div class="flex items-center gap-3 py-4 mt-2">
                        <!-- Left line -->
                        <div class="flex-1 h-px bg-primary" />
                        
                        <!-- Login text -->
                        <h1 class="text-xl text-primary">Login</h1>
                        
                        <!-- Right line -->
                        <div class="flex-1 h-px bg-primary" />
                        </div>
                    </div>
                </div>

                <!-- input box can use form to warp up it in the form item --> 
                <div class="flex flex-col"> 
                    <div>
                        <h1 class="text-lg text-primary">Email</h1>
                        <Input class="border-primary mt-1 h-[50px]" type="email" placeholder="Email"/>
                    </div>
                    <div class="mt-5">
                        <h1 class="text-lg text-primary">Password</h1>
                        <Input class="border-primary mt-1 h-[50px]" type="password" placeholder="Password"/>
                    </div>
                    <!-- Wrap button in flex -->
                    <div class="flex justify-end mt-1">
                        <Button variant="link" class="underline cursor-pointer">
                        Forgot password
                        </Button>
                    </div>
                    <Button class="mt-7 h-[50px] rounded-2xl">Sign in with email</Button>
                </div>
            </div>
            
            <!-- Right side: Info Card -->
            <div class="shrink-0">
                <Card class="bg-primary text-white w-[500px] h-[700px] rounded-3xl">
                    <CardHeader>
                        <CardTitle class="text-2xl font-bold">
                            Solve Issues Faster, Build Better
                        </CardTitle>
                        <CardDescription class="text-white/90 text-md">
                            Sign in to access priority issue resolution, expert guidance, and exclusive developer resources.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <div class="mt-1 shrink-0">
                                <CircleCheck class="text-white size-4"/>
                            </div>
                            <div>
                                <p class="font-semibold text-sm">
                                    Faster Response Times: 
                                    <span class="text-sm font-normal text-white/90">Get Priority Support On Critical Issues.</span>
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3">
                            <div class="mt-1 shrink-0">
                                <CircleCheck class="text-white size-4"/>
                            </div>
                            <div>
                                <p class="font-semibold text-sm">
                                    Expert Guidance: <span class="text-sm font-normal text-white/90">Work Directly With Aortem Engineers For In-Depth Troubleshooting.</span>
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3">
                            <div class="mt-1 shrink-0">
                                <CircleCheck class="text-white size-4"/>
                            </div>
                            <div>
                                <p class="font-semibold text-sm">
                                    Exclusive Developer Tools: <span class="text-sm font-normal text-white/90">Optimize Performance With Premium Resources.</span>
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3">
                            <div class="mt-1 shrink-0">
                                <CircleCheck class="text-white size-4"/>
                            </div>
                            <div>
                                <p class="font-semibold text-sm">
                                    Priority Resolutions: <span class="text-sm font-normal text-white/90">Get Faster Response Times From Experts.</span>
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3">
                            <div class="mt-1 shrink-0">
                                <CircleCheck class="text-white size-4"/>
                            </div>
                            <div>
                                <p class="font-semibold text-sm">
                                    Dedicated Support Engineers: <span class="text-sm font-normal text-white/90">Direct Assistance From The Team That Built Aortem.</span>
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3">
                            <div class="mt-1 shrink-0">
                                <CircleCheck class="text-white size-4"/>
                            </div>
                            <div>
                                <p class="font-semibold text-sm">
                                    Advanced Debugging & Optimization: <span class="text-sm font-normal text-white/90">Tools And Guidance To Enhance Performance.</span>
                                </p>
                                
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3">
                            <div class="mt-1 shrink-0">
                                <CircleCheck class="text-white size-4"/>
                            </div>
                            <div>
                                <p class="font-semibold text-sm">
                                    Security & Compliance Assistance: <span class="text-sm font-normal text-white/90">Ensure Best Practices For System Integrity.</span>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
</template>

