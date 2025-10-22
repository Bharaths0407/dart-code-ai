<script setup lang="ts">

import aiIcon from '@/assets/icons/ai.svg';
import qaIcon from '@/assets/icons/qa.svg';
import cliIcon from '@/assets/icons/cli.svg';
import codeIcon from '@/assets/icons/code.svg';
import multiIcon from '@/assets/icons/multi.svg';
import automatedIcon from '@/assets/icons/automated.svg';

import { Card, CardContent } from '@/components/ui/card';

interface Feature {
    iconPath: string;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        iconPath: automatedIcon,
        title: "Automated Pull Request",
        description: "Streamline PR reviews with AI-assisted release detection and changelog generation."
    },
    {
        iconPath: multiIcon,
        title: "Multi-Repo Coordination",
        description: "Keep packages in sync, auto-bump versions, and manage dependencies at scale."
    },
    {
        iconPath: aiIcon,
        title: "AI Documentation",
        description: "Auto-generate and sync release notes and developer docs (Markdown + GitBook-ready)."
    },
    {
        iconPath: qaIcon,
        title: "Full QA Automation",
        description: "Run smart, AI-generated tests across unit, integration, and end-to-end layers."
    },
    {
        iconPath: codeIcon,
        title: "Code Coverage Integration",
        description: "Enforce release gates with Codecov/Coveralls thresholds — no surprises in production."
    },
    {
        iconPath: cliIcon,
        title: "Intelligent Dart CLI",
        description: "Ship faster with our CLI assistant 'Pious' — get fixes, tests, and refactor directly from your terminal."
    }
];
</script>

<template>
    <div class="w-full bg-background py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header Section -->
            <div class="text-center mb-16">
                <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">
                    Explore DartCode AI Features
                </h1>
                <p class="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    DartCode AI helps your team move faster, fix less, and ship better code.
                    <br />
                    Skip the manual QA process. Focus on building.
                </p>
            </div>

            <!-- Features Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card v-for="(feature, index) in features" :key="index"
                    class="border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white">
                    <CardContent class="p-8">
                        <!-- Icon Container -->
                        <div class="mb-6">
                            <div class="w-20 h-20 rounded-full flex items-center justify-center">
                                <img :src="feature.iconPath" :alt="feature.title" class="object-contain" />
                            </div>
                        </div>

                        <!-- Title -->
                        <h3 class="text-xl font-bold text-gray-900 mb-3">
                            {{ feature.title }}
                        </h3>

                        <!-- Description -->
                        <p class="text-gray-600 leading-relaxed">
                            {{ feature.description }}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
</template>
