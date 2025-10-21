<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
</script>

<template>
    <div class="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-7xl mx-auto px-5 py-10 gap-10">
        <div class="w-full flex justify-center order-1 lg:order-2">
            <Card class="bg-primary text-white w-full border-none shadow-2xl">
                <!-- Radial Gradient -->
                <div class="absolute inset-0 pointer-events-none"
                    style="background: radial-gradient(circle at center bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 65%);">
                </div>

                <CardContent class="p-6 md:p-8 lg:p-10 text-center space-y-6">
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Thank You
                    </h1>

                    <p class="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        You're on our list! We'll keep you updated. In the meantime, explore AORTEM and see what’s coming.
                    </p>

                    <div class="pt-4">
                        <Button size="lg"
                            class="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            Explore Aortem
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</template>


