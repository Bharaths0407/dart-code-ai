<script setup lang="ts">
import aboutus from '@/assets/aboutus.svg';

import GetStartedBackground from './GetStartedBackground.vue';
</script>

<template>
    <div class="max-w-7xl mx-auto px-5 py-10 flex flex-col gap-10">

        <!-- Text + Image container -->
        <div class="flex flex-col lg:flex-row items-start md:items-center justify-between gap-10">

            <!-- TEXT CONTENT -->
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-md w-full">
                    <!-- Header -->
                    <div class="flex items-center gap-3 py-4 mt-2">
                        <h1 class="text-3xl md:text-4xl text-primary font-bold">About</h1>
                    </div>

                    <div class="flex flex-col space-y-5 mt-1">
                        <h3 class="text-gray-500 font-sans text-lg text-justify">
                            At DartCode AI, we aim to revolutionize software development by integrating artificial
                            intelligence into the core of development workflows. Our goal is to empower teams to deliver
                            high-quality software more efficiently and intelligently.
                        </h3>

                        <div>
                            <h1 class="text-2xl text-black font-semibold mb-4">Why Choose DartCode AI?</h1>

                            <ul class="space-y-3 list-disc list-inside text-gray-500 text-justify">
                                <li>
                                    <strong>Intelligent Automation:</strong> Our AI-driven platform automates complex
                                    development tasks, allowing your team to focus on strategic initiatives.
                                </li>
                                <li>
                                    <strong>Seamless Integration:</strong> DartCode AI integrates effortlessly with your
                                    existing tools and workflows, ensuring a smooth transition and immediate
                                    productivity gains.
                                </li>
                                <li>
                                    <strong>Commitment to Excellence:</strong> We are dedicated to continuous
                                    improvement, regularly updating our platform with the latest advancements in AI and
                                    software development practices.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- IMAGE -->
            <div class="w-full md:w-1/2 flex items-center justify-center">
                <img :src="aboutus" alt="About us image" sizes="500px" class="shrink-0" />
            </div>
            
        </div>

        <!-- GET STARTED: copomponent -->
        <div class="w-full mt-10">
            <GetStartedBackground />
        </div>
    </div>
</template>
