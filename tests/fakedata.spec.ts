import { fileURLToPath } from 'node:url';
import { describe, expect, it, test } from 'vitest';

import { setup, $fetch, isDev } from '@nuxt/test-utils';
import { mount, shallowMount } from '@vue/test-utils';
import { useFakeData } from '../composables/fakedata';

describe('fake data', async () => {
  // console.log(useFakeData(2, 4));

  test('fake data', async () => {
    expect(useFakeData(2, 4)).toHaveProperty('nodes');
    expect(useFakeData(2, 4)).toHaveProperty('links');
    expect(useFakeData(2, 4)).toHaveProperty('categories');
  });
});
