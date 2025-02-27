/// tests/components/HelloWorld.test.js
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HelloWorld from '../../src/components/HelloWorld.vue';

describe('HelloWorld Component', () => {
  it('renders the message properly', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest!' },
    });
    expect(wrapper.text()).toContain('Hello Vitest!');
  });
});