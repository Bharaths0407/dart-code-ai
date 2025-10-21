<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const route = useRoute();

const showNavbar = computed(() => !['/sign-in',].includes(route.path))
</script>

<template>
  <div>
    <Navbar  v-if="showNavbar" />
    <router-view />
    <Footer v-if="showNavbar" />
  </div>
</template>

