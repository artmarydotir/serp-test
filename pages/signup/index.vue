<template>
  <VContainer fluid class="fill-height">
    <SignIn @submit="submitData" />
  </VContainer>
</template>

<script setup lang="ts">
function submitData(data: { name: string; email: string; password: string }) {
  console.log('-------------');
  console.log(data);
}
</script>
