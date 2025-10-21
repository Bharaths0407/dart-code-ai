<script setup lang="ts">
import featurepage from '@/assets/bot.svg';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';

// Desktop/iPad sections
const desktopSections = [
    { title: 'Modular & Scalable', description: 'Use one module or all — no monoliths here.' },
    { title: 'Dart-Specific AI Intelligence', description: 'Fine-tuned for Dart codebases, not generic LLM bloat.' },
    { title: 'Feedback Loops Built In', description: 'The more you use it, the smarter it gets.' },
    { title: 'CLI + Dashboard Views', description: 'For builders who love the terminal and teams who need visibility.' },
    { title: 'GitHub/GitLab/Bitbucket Integration', description: 'OAuth-ready and secure from day one.' },
];
</script>

<template>
    <div class="max-w-7xl mx-auto px-5 py-10 flex flex-col gap-10">

        <!-- HEADER -->
        <h1 class="text-3xl md:text-4xl text-primary font-bold text-center">What Makes DartCode AI Different?</h1>

        <!-- DESKTOP & IPAD: text + image side by side -->
        <div class="hidden md:flex flex-row items-start justify-between gap-10">
            <!-- TEXT CONTENT -->
            <div class="w-1/2">
                <div class="max-w-md w-full space-y-5">
                    <div v-for="(section, index) in desktopSections" :key="index">
                        <h2 class="text-xl text-black font-semibold mb-1">{{ section.title }}</h2>
                        <p class="text-gray-500">{{ section.description }}</p>
                    </div>
                </div>
            </div>

            <!-- IMAGE -->
            <div class="w-1/2 flex items-center justify-center">
                <img :src="featurepage" alt="Feature image" class="w-full max-w-md" />
            </div>
        </div>

        <!-- MOBILE: ShadCN Accordion first, image below -->
        <div class="md:hidden flex flex-col gap-4">
            <h1 class="text-2xl text-black font-semibold">Frequently asked questions</h1>
            <Accordion type="single" collapsible class="w-full">
                <AccordionItem v-for="(section, index) in desktopSections" :key="index" :value="`item-${index}`">
                    <AccordionTrigger>{{ section.title }}</AccordionTrigger>
                    <AccordionContent class="text-gray-500">{{ section.description }}</AccordionContent>
                </AccordionItem>
            </Accordion>

            <!-- IMAGE below accordion -->
            <div class="flex justify-center mt-5">
                <img :src="featurepage" alt="Feature image" class="w-full max-w-md" />
            </div>
        </div>
    </div>
</template>
