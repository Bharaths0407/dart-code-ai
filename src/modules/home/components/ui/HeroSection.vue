<script setup lang="ts">

import leftLines from '@/assets/heroleftline.svg'
import rightLines from '@/assets/herorightline.svg'


import googleCloud from '@/assets/googlecloud.svg'
import aws from '@/assets/aws.svg'
import azure from '@/assets/azure.svg'
import digitalOcean from '@/assets/digitalocean.svg'
import ibm from '@/assets/ibm.svg'
import Button from '@/components/ui/button/Button.vue'

</script>

<template>
    <section
        class="relative flex flex-col items-center justify-center overflow-hidden bg-background text-center px-5 py-10 md:py-26">

        <!-- Background SVGs -->
        <img :src="leftLines" alt="Left background lines"
            class="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 w-1/3 max-w-[500px]  pointer-events-none" />
        <img :src="rightLines" alt="Right background lines"
            class="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 max-w-[500px]  pointer-events-none" />

        <!-- Hero Text -->
        <h1 class="text-3xl md:text-6xl font-bold text-[#262E35] max-w-7xl leading-tight">
            Accelerate Your Development & QA Workflow with
            <span class="block text-primary mt-2">AI-Powered Automation</span>
        </h1>

        <!-- Description -->
        <p class="mt-5 max-w-2xl text-[#5B617A] text-base md:text-lg">
            DartCode AI streamlines your QA and release processes by automating pull request management,
            coordinating multi-repository operations, and enhancing quality assurance.
        </p>

        <!-- Buttons -->
        <div class="mt-8 flex flex-col items-center gap-4">
            <router-link to="/early-access" asChild>
                <Button class="px-8 py-6 text-base">Get Started</Button>
            </router-link>
            <Button variant="link" href="#"
                class=" bg-[#E6E7F4] w-[450px] rounded-none text-primary underline underline-offset-4 hover:text-primary/80 mt-6 cursor-pointer">
                Explore DartCode AI for free.
            </Button>
        </div>

        <!-- Company Logos -->
        <div class="mt-16 text-sm text-[#5B617A]">Trusted by teams building fast, shipping smart</div>
        <div class="mt-7 flex flex-wrap justify-center items-center gap-10 opacity-80">
            <img :src="googleCloud" alt="Google Cloud" class="h-6 md:h-12" />
            <img :src="aws" alt="AWS" class="h-6 md:h-12" />
            <img :src="azure" alt="Microsoft Azure" class="h-6 md:h-12" />
            <img :src="digitalOcean" alt="Digital Ocean" class="h-6 md:h-12" />
            <img :src="ibm" alt="IBM" class="h-6 md:h-12" />
        </div>
    </section>
</template>
