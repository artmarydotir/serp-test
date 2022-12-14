import { describe, expect, it, test } from 'vitest';
import { setup, $fetch, isDev } from '@nuxt/test-utils';
import { mount, shallowMount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import Btn from '../components/Btn.vue';

describe('Vuetify Component Btn', async () => {
  const vuetify = createVuetify({ components, directives });

  const wrapper = mount(Btn, {
    global: {
      plugins: [vuetify],
      stubs: ['v-btn-stub'],
    },
    // props: { title: 'Hello Vitest' },
  });
  console.log(wrapper.html());

  const p = `Sign In`;

  test('this is a test', async () => {
    expect(wrapper.text()).toBe(p);
    // expect(true).toBe(true);
  });
});

// describe('runs', () => {
//   test('it works =)', () => {
//     expect(true).toBe(true);
//   });
// });
