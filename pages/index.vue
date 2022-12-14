<template>
  <v-container fluid class="fill-height">
    <v-row no-gutters align="center" justify="center" class="fill-height">
      <v-col cols="12" md="6" lg="5" sm="6">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" md="6">
            <h1>Sign In</h1>
            <Hello />
            <p class="text-medium-emphasis">
              Enter your details to get started
            </p>

            <v-form class="mt-7" @submit.prevent="submit">
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="email">
                  Email
                </label>
                <v-textField
                  id="email"
                  v-model="email"
                  :rules="[ruleRequired, ruleEmail]"
                  prepend-inner-icon="mdi-email"
                  name="email"
                  type="email"
                />
              </div>
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="password"
                  >Password</label
                >
                <VTextField
                  id="password"
                  v-model="password"
                  :rules="[ruleRequired, rulePassLen]"
                  prepend-inner-icon="mdi-password"
                  name="password"
                  type="password"
                />
              </div>
              <div class="mt-5">
                <v-btn
                  type="submit"
                  block
                  min-height="44"
                  class="gradient primary"
                  >Sign In
                </v-btn>
              </div>
            </v-form>
            <p class="text-center text-caption mt-10">
              <span
                >Don't have an account?
                <!-- <NuxtLink to="/signup" class="font-weight-bold text-primary">
                  Sign Up
                </NuxtLink> -->
                <NuxtLink to="/dashboard" class="font-weight-bold text-primary">
                  Dashboard
                </NuxtLink>
              </span>
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="hidden-md-and-down fill-height" md="6" lg="7">
        <v-img
          src="https://wallpaper.dog/large/5557744.jpg"
          cover
          class="h-100 rounded-xl d-flex align-center justify-center"
        >
          <div class="text-center w-50 text-white mx-auto">
            <h2 class="mb-4">Start your journey today</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, inventore quia. Dolorum dolores ad ipsum voluptatum
              rem, hic placeat, odio, odit numquam quod veritatis accusantium
              assumenda! Sequi, provident in! Iure!
            </p>
          </div>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// import { ComputedRef, ref, computed } from 'vue';

const email = ref('');

const password = ref('');
const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();
const submit = async () => {
  console.log(email.value, password.value);
};
</script>
