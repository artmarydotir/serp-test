<template>
  <v-app-bar color="primary">
    <v-container class="fill-height d-flex align-center">
      <v-btn variant="text">
        <NuxtLink
          to="/dashboard"
          exact
          class="font-weight-bold text-white text-decoration-none inline-block"
        >
          Bar Chart
        </NuxtLink>
      </v-btn>
      |
      <v-btn variant="text">
        <NuxtLink
          exact
          to="/dashboard/graph1"
          class="font-weight-bold text-white text-decoration-none inline-block"
        >
          Graph 1
        </NuxtLink>
      </v-btn>
      |
      <v-btn variant="text">
        <NuxtLink
          exact
          to="/dashboard/graph2"
          class="font-weight-bold text-white text-decoration-none inline-block"
        >
          Graph 2
        </NuxtLink>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme">toggle theme</v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify';
const theme = useTheme();

function toggleTheme() {
  return (theme.global.name.value = theme.global.current.value.dark
    ? 'light'
    : 'dark');
}
</script>
