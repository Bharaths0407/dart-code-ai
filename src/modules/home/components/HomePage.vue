<script setup lang="ts">
import HeroSection from '@/modules/home/components//ui/HeroSection.vue';
import BenefitsSection from '@/modules/home/components//ui/BenefitsSection.vue';
import ExploreDartSection from '@/modules/home/components//ui/ExploreDartSection.vue';
import DartFeaturesSection from '@/modules/home/components//ui/DartFeaturesSection.vue';

import PricingCard from '@/modules/pricing/components/ui/PricingCard.vue';
import GetStartedBackground from '@/components/GetStartedBackground.vue';

</script>

<template>
    <main class="flex flex-col w-full overflow-hidden bg-background text-foreground">
        <!-- Hero Section -->
        <section id="hero" class="w-full">
            <HeroSection />
        </section>

        <!-- Explore Dart Section -->
        <section id="explore-dart" class="w-full">
            <ExploreDartSection />
        </section>

        <!-- Benefits Section -->
        <section id="benefits" class="w-full">
            <BenefitsSection />
        </section>

        <!-- Pricing Section -->
        <section id="pricing" class="w-full">
            <h1 class="text-4xl md:text-5xl font-bold text-primary text-center mb-9 mt-10">
                Choose a plan that works for you
            </h1>
            <PricingCard/>
        </section>

        <!-- Feature section -->
        <section id="dart-feature" class="w-full">
            <DartFeaturesSection/>
        </section>

        <!-- Feature section -->
        <section id="get-started" class="w-full">
            <GetStartedBackground/>
        </section>

    </main>
</template>
