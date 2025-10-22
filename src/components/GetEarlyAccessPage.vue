<script setup lang="ts">
import getEarlyAccessBackground from "@/assets/earlyaccessbackground.svg";

import { ROUTES } from '@/constants';

import { Button } from '@/components/ui/button';
</script>

<template>
    <div class="relative min-h-screen w-full overflow-hidden">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
            <img :src="getEarlyAccessBackground" alt="Background" class="h-full w-full object-cover bg-black/70" />
            <div class="absolute inset-0 "/>
        </div>

        <!-- Content -->
        <div class="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-4xl text-center">
                <!-- Top Text -->
                <p class="mb-4 text-md font-normal tracking-[0.3em] text-white/90 sm:text-xl md:mb-6 md:text-2xl">
                    WE ARE LAUNCHING SOON
                </p>

                <!-- Main Heading -->
                <h1
                    class="mb-6 text-5xl space-x-2 font-semibold tracking-widest text-white sm:text-6xl md:mb-8 md:text-7xl lg:text-8xl">
                    COMING SOON
                </h1>

                <!-- Description -->
                <p
                    class="mx-auto mb-8 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base md:mb-12 md:text-lg md:leading-relaxed lg:text-xl">
                    Get Exclusive Early Access To Cutting-Edge Tools Built For Dart Devs, Including Serverless
                    Cloud Functions, A High-Speed Backend Framework, And An AI Code Assistant Tailored For
                    Dart. Be The First To Try It, Shape It, And Ship With It.
                </p>

                <router-link :to="`${ROUTES.SIGN_UP}` " aschild>
                <Button
                    class=" px-8 py-6  text-base font-medium  sm:px-10 sm:text-lg md:px-12 md:py-7 md:text-xl"
                    size="lg">
                    Get Early Access
                </Button>
                </router-link>
            </div>
        </div>
    </div>
</template>
