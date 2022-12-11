<template>
  <div>
    <VApp>
      <v-btn @click="toggleTheme">toggle theme</v-btn>
      <VMain>
        <slot />
      </VMain>
    </VApp>
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();

function toggleTheme() {
  return (theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "dark");
}
</script>
