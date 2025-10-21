<script setup lang="ts">
    import { ref } from 'vue';
    import menuIcon from '@/assets/menuIcon.svg';
    import Button from './ui/button/Button.vue';

    const currentPath = ref(window.location.pathname); // using this because the project is staic page or else use vue router if its dynamic page
    
    const navLinks = ref([
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Pricing', href: '/pricing' },
    ]);

    const isMenuOpen = ref(false);
    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };
</script>

<template >
    <header class="top-0 bg-background z-50 sticky">
        <div class="relative flex items-center justify-between max-w-7xl mx-auto px-5 py-5">
            <!-- Logo -->
            <a href="/" class="flex items-center">
                <img src="/logo.svg" alt="Logo" class="h-10 w-auto"/>
            </a>

            <!-- Navigation Links -->
            <nav class="hidden lg:flex space-x-15 absolute left-1/2 transform -translate-x-1/2 items-center mb-1 pl-2" aria-label="Primary navigation">
                <router-link v-for="(link) in navLinks" 
                :to="link.label" 
                :href="link.href"
                :class="[
                    'font-semibold transition-colors duration-300',
                    currentPath === link.href
                    ? 'text-[#42389E]'
                    : 'text-foreground hover:text-[#42389E]'
                ]"
                >{{ link.label }}</router-link>
            </nav>

            <!-- Login and signup buttons -->
            <div class="hidden lg:block ml-3">
                <router-link to="/sign-in" asChild>
                    <Button
                        class="w-[125px]"
                        variant="outlineHover"
                    >
                        Login
                    </Button>
                </router-link>
                <router-link to="/sign-up" asChild>
                    <Button
                    class="w-[125px] ml-4"
                    >
                        Sign Up
                    </Button>
                </router-link>
            </div>

            <!-- Mobile Menu Button -->
            <Button 
                class="lg:hidden p-2 border-none" 
                variant="outlineHover" 
                size="icon" 
                @click="toggleMenu"
                aria-label="Toggle Menu"
                :aria-expanded="isMenuOpen.toString()"
                aria-controls="mobile-menu"
            >
                <img 
                    :src="menuIcon" 
                    alt="Menu" 
                    class="size-10" 
                />
            </Button>
        </div>

        <!-- Mobile menu -->
        <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
        >
            <aside 
                v-if="isMenuOpen" 
                id="mobile-menu" 
                class="lg:hidden bg-background shadow-lg py-4 px-4 absolute top-full left-0 right-0 z-40"
                aria-label="Mobile menu"
            >
                <nav aria-label="Mobile Navigation">
                    <ul class="flex flex-col space-y-4">
                        <li v-for="(link) in navLinks" :key="link.label">
                            <router-link
                                :to="link.href"
                                :class="[
                                    'block font-semibold transition-colors duration-300 px-2 py-2',
                                    currentPath === link.href
                                    ? 'text-[#42389E]'
                                    : 'text-foreground hover:text-[#42389E]'
                                    ]"
                                @click="toggleMenu"
                            >
                                {{ link.label }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/sign-in" asChild>
                                <Button
                                    class="w-[200px]"
                                    variant="outlineHover"
                                    @click="toggleMenu"
                                >
                                    Login
                                </Button>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/sign-up" asChild>
                                <Button
                                class="w-[200px] "
                                @click="toggleMenu"
                                >
                                    Sign Up
                                </Button>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </Transition>

    </header>
</template>


