<script setup lang="ts">
import pricingpagebackground from '@/assets/pricingpagebackground.svg';

import PricingCard from './ui/PricingCard.vue';
import DartCodeAiFeatures from './ui/DartCodeAiFeatures.vue';
import GetStartedBackground from '@/components/GetStartedBackground.vue';
</script>

<template>
  <div class="relative w-full flex flex-col items-center justify-center py-2 md:py-5">

    <!-- Background SVG with controlled height -->
    <img
      :src="pricingpagebackground"
      alt="Background SVG"
      class="absolute top-0 left-0 w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]  pricing-bg-steep"
    />

    <!-- Overlay content -->
    <div class="relative z-10 w-full px-5 flex flex-col items-center">

      <!-- Heading (only this is centered) -->
      <h1 class="text-4xl md:text-6xl font-bold text-primary text-center mb-4">
        Explore Our Plans 
      </h1>
      <p class="text-[#262E35] text-center font-semibold mb-10">Simple, transparent pricing that grows with you. Try any plan free for 10 days.</p>

      <!-- Pricing Card wrapper -->
      <div class="w-full max-w-7xl flex flex-col items-center ">

        <!-- PricingCard + DartCodeAiFeatures -->
        <div class="flex flex-col md:flex-col gap-0 md:gap-10 w-full">
          <PricingCard class="w-full"/>
          <div class="w-full">
            <DartCodeAiFeatures />
          </div>
        </div>

        <!-- Get Started Section -->
        <GetStartedBackground class="mt-10 w-full"/>
      </div>
    </div>
    
  </div>
</template>
