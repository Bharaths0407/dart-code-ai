<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';

const route = useRoute();

const showNavbar = computed(() => !['/sign-in', '/sign-up'].includes(route.path))
</script>

<template>
  <div>
    <Navbar  v-if="showNavbar" />
    <router-view />
  </div>
</template>

