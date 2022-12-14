import { describe, expect, it, test } from 'vitest';

import { setup, $fetch, isDev } from '@nuxt/test-utils';
import { mount, shallowMount } from '@vue/test-utils';

import App from '../components/Hello.vue';

describe('Simple', async () => {
  // console.log(shallowMount(App).html());

  // const wrapper = mount(App, {
  //   global: {
  //     plugins: [vuetify],
  //     stubs: ['v-btn-stub'],
  //   },
  //   // props: { title: 'Hello Vitest' },
  // });
  // console.log(wrapper.html());

  const p = `Hello Game`;

  test('this is a test', async () => {
    expect(mount(App).text()).toBe(p);
    // expect(true).toBe(true);
  });
});

// describe('runs', () => {
//   test('it works =)', () => {
//     expect(true).toBe(true);
//   });
// });
