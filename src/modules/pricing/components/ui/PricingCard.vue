<script setup lang="ts">
import { ref, watch } from 'vue';
import { Check } from 'lucide-vue-next';

import PriceLoading from '@/assets/PriceLoading.svg';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

interface Plan {
    name: string
    popular: boolean
    features: string[]
};

const plans: Plan[] = [
    {
        name: 'Standard Plan',
        popular: false,
        features: [
            'AI Documentation Module',
            'AI CLI for Dart'
        ]
    },
    {
        name: 'Enhance Plan',
        popular: true,
        features: [
            'AI Documentation Module',
            'AI CLI for Dart',
            'AI QA Testing'
        ]
    },
    {
        name: 'Enterprise Plan',
        popular: false,
        features: [
            'AI Documentation Module',
            'AI CLI for Dart',
            'AI QA Testing',
            'AI Release Management'
        ]
    },
];

// Carousel API state
const emblaApi = ref()
const selectedIndex = ref(0)

function setApi(api: any) {
    emblaApi.value = api
}

function onSelect() {
    if (!emblaApi.value) return
    selectedIndex.value = emblaApi.value.selectedScrollSnap()
}

watch(emblaApi, (api) => {
    if (!api) return

    // Set initial selected index
    selectedIndex.value = api.selectedScrollSnap()

    // Listen to select events
    api.on('select', onSelect)
    api.on('reInit', onSelect)
}, { immediate: true })
</script>

<template>
    <div class="bg-transparent">
        <div class="max-w-6xl mx-auto">
            <Carousel :opts="{ align: 'center' }" class="w-full" @init-api="setApi">
                <CarouselContent class="-ml-4">
                    <CarouselItem v-for="(plan, index) in plans" :key="index" class="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div class="relative">
                            <Card :class="[
                                'relative overflow-hidden shadow-xl transition-all hover:shadow-2xl',
                                plan.popular
                                    ? 'bg-primary'
                                    : 'bg-white border-gray-200'
                            ]">
                                

                                <CardHeader class="relative pt-7 pb-8">
                                    <div class="flex items-center gap-3 mb-4">
                                        <img :src="PriceLoading" alt="loading image" class="size-9"/>
                                    <span v-if="plan.popular"
                                            class="bg-[#F9A71E] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                            Popular
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-3 mb-6">
                                        <h3 :class="[
                                            'text-xl font-semibold',
                                            plan.popular ? 'text-white' : 'text-black'
                                        ]">
                                            {{ plan.name }}
                                        </h3>
                                        
                                    </div>

                                    
                                        

                                    <div :class="[
                                        'text-5xl font-bold leading-tight',
                                        plan.popular ? 'text-white' : 'text-primary'
                                    ]">
                                    <!-- Billed annually badge -->
                                    <div :class="[
                                            'absolute right-4 -mt-5  px-3 py-1 rounded-full text-xs font-semibold shadow-md transform -rotate-12 z-10',
                                            plan.popular
                                                ? 'bg-white/20 text-white backdrop-blur-sm'
                                                : 'bg-[#E1E2F0] text-primary'
                                        ]">
                                            Billed annually
                                        </div>
                                        Coming Soon
                                    </div>
                                </CardHeader>

                                <CardContent class="pb-8 min-h-[280px]">
                                    <div class="space-y-4">
                                        <div v-for="(feature, featureIndex) in plan.features" :key="featureIndex"
                                            class="flex items-start gap-3">
                                            <div :class="[
                                                'mt-0.5 shrink-0',
                                                plan.popular ? 'text-white' : 'text-black'
                                            ]">
                                                <Check class="w-5 h-5 stroke-2" />
                                            </div>
                                            <span :class="[
                                                'text-sm',
                                                plan.popular ? 'text-white' : 'text-black'
                                            ]">
                                                {{ feature }}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter class="pb-8">
                                    <Button variant="outline" :class="[
                                        'w-full py-6 text-base font-semibold transition-all border-2',
                                        plan.popular
                                            ? 'bg-transparent text-white border-white hover:bg-white hover:text-primary'
                                            : 'bg-white text-primary border-primary hover:bg-indigo-50 hover:border-primary hover:text-primary/70'
                                    ]">
                                        Subscribe
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious class="hidden md:flex -left-12" />
                <CarouselNext class="hidden md:flex -right-12" />
            </Carousel>

            <!-- Dot Indicators (Non-clickable, visual only) -->
            <div class="flex justify-center items-center gap-2 mt-8">
                <div v-for="(_plan, index) in plans" :key="index" :class="[
                    'h-2 rounded-full transition-all duration-300 ease-in-out',
                    index === selectedIndex
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-gray-300'
                ]" :aria-label="`Slide ${index + 1}`" />
            </div>
        </div>
    </div>
</template>
