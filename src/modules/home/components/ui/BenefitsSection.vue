<script setup lang="ts">
interface FeatureItem {
    feature: string;
    benefit: string;
}

const features: FeatureItem[] = [
    {
        feature: "AI-Powered QA & Release Automation",
        benefit: "Save dev hours, eliminate manual work"
    },
    {
        feature: "Multi-Repo Sync & Dependency Management",
        benefit: "Avoid version mismatches and update chaos"
    },
    {
        feature: "CLI + Dashboard Flexibility",
        benefit: "Use it your way — terminal or web UI"
    },
    {
        feature: "Coverage + Test-First Release Logic",
        benefit: "Stop broken code before it ships"
    },
    {
        feature: "Docs, Changelogs, Tags Auto-Generated",
        benefit: "Never miss a release note or a Git tag again"
    },
    {
        feature: "OAuth + Git Integration",
        benefit: "Plug in GitHub, GitLab, or Bitbucket in seconds"
    }
];
</script>

<template>
    <section
        class="w-full bg-[#E6E7F3] flex items-center justify-center py-12 sm:py-16 lg:py-24 px-5 sm:px-8 md:px-12">
        <div class="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
            <!-- Header -->
            <h1
                class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary mb-10 sm:mb-14 lg:mb-20 leading-tight">
                Built for Dev Teams Who Hate Bottlenecks
            </h1>

            <!-- Features and Benefits Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 w-full">
                <!-- Features Column -->
                <div class="flex flex-col items-start justify-center space-y-6 sm:space-y-8 mx-auto">
                    <h2 class="text-2xl sm:text-3xl font-semibold text-[#262E35] mb-4 sm:mb-6 text-left w-full">
                        Features
                    </h2>
                    <div v-for="(item, index) in features" :key="`feature-${index}`"
                        class="flex items-start space-x-3 group">
                        <div
                            class="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-150 transition-transform duration-200 shrink-0">
                        </div>
                        <p
                            class="text-base sm:text-lg text-[#262E35] leading-relaxed group-hover:text-primary transition-colors duration-200 text-left">
                            {{ item.feature }}
                        </p>
                    </div>
                </div>

                <!-- Benefits Column -->
                <div class="flex flex-col items-start justify-center space-y-6 sm:space-y-8 mx-auto">
                    <h2 class="text-2xl sm:text-3xl font-semibold text-[#262E35] mb-4 sm:mb-6 text-left w-full">
                        Benefits
                    </h2>
                    <div v-for="(item, index) in features" :key="`benefit-${index}`"
                        class="flex items-start space-x-3 group">
                        <div
                            class="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-150 transition-transform duration-200 shrink-0">
                        </div>
                        <p
                            class="text-base sm:text-lg text-[#262E35] leading-relaxed group-hover:text-primary transition-colors duration-200 text-left">
                            {{ item.benefit }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
