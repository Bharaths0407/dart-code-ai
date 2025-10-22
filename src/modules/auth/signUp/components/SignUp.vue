<script setup lang="ts">
    import { CircleCheck } from 'lucide-vue-next';

    import Input from '@/components/ui/input/Input.vue';
    import Button from '@/components/ui/button/Button.vue';
    import {
            Card,
            CardContent,
            CardDescription,
            CardHeader,
            CardTitle,
        } from "@/components/ui/card";
</script>

<template >
    <div class="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-7xl mx-auto px-5 py-10 gap-10">
    <!-- CARD: On top in mobile, right in desktop -->
        <div class="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <Card class="bg-primary text-white w-[500px] h-[500px] rounded-3xl">
                    <CardHeader>
                        <CardTitle class="text-2xl font-bold">
                            Be First. Build Faster. Get Ahead.
                        </CardTitle>
                        <CardDescription class="text-white/90 text-md">
                            Join Our community of early adopters shaping the future of Dart-powered development.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <div class="mt-1 shrink-0">
                                <CircleCheck class="text-white size-4"/>
                            </div>
                            <div>
                                <p class="font-normal text-sm">
                                    Priority access to features before public release
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3">
                            <div class="mt-1 shrink-0">
                                <CircleCheck class="text-white size-4"/>
                            </div>
                            <div>
                                <p class="font-normal text-sm">
                                    Direct influence on the product roadmap
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3">
                            <div class="mt-1 shrink-0">
                                <CircleCheck class="text-white size-4"/>
                            </div>
                            <div>
                                <p class="font-normal text-sm">
                                    Limited-edition early adopter badge
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex items-start space-x-3">
                            <div class="mt-1 shrink-0">
                                <CircleCheck class="text-white size-4"/>
                            </div>
                            <div>
                                <p class="font-normal text-sm">
                                    Special pricing and partner perks at launch
                                </p>
                            </div>
                        </div>
                    </CardContent>
            </Card>
        </div>

    <!-- LOGIN FORM: Below in mobile, left in desktop -->
        <div class="flex flex-col mt-3 space-y-5 w-full lg:w-1/2 order-2 lg:order-1 items-center lg:items-start">
            <div class="max-w-md w-full">
                <!-- Header -->
                <div class="flex items-center gap-3 py-4 mt-2">
                    <div class="flex-1 h-px bg-primary" />
                    <h1 class="text-xl md:text-2xl text-primary font-semibold">Early Bird Sign-up</h1>
                    <div class="flex-1 h-px bg-primary" />
                </div>

                <!-- Form -->
                <div class="flex flex-col space-y-5 mt-5">
                <div>
                    <h1 class="text-base md:text-lg text-primary">Name</h1>
                    <Input
                    class="border-primary mt-1 h-[45px] md:h-[50px] w-full"
                    type="text"
                    placeholder="Name"
                    />
                </div>

                <div>
                    <h1 class="text-base md:text-lg text-primary">Email</h1>
                    <Input
                    class="border-primary mt-1 h-[45px] md:h-[50px] w-full"
                    type="email"
                    placeholder="Email"
                    />
                </div>

                <div>
                    <h1 class="text-base md:text-lg text-primary">Job Title</h1>
                    <Input
                    class="border-primary mt-1 h-[45px] md:h-[50px] w-full"
                    type="search"
                    placeholder="Title"
                    />
                </div>

                <div>
                    <h1 class="text-base md:text-lg text-primary">What do you build primarily?</h1>
                    <Input
                    class="border-primary mt-1 h-[45px] md:h-[50px] w-full"
                    type="search"
                    placeholder="Search"
                    />
                </div>

                <router-link to="/thank-you" aschild>
                    <Button class="h-[45px] md:h-[50px] rounded-full w-full mt-3">
                        Get Early Access
                    </Button>
                </router-link>
                </div>
            </div>
        </div>
    </div>

</template>

