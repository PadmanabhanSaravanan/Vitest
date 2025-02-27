/// tests/components/Button.test.js
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Button from '../../src/components/Button.vue';

describe('Button Component', () => {
  it('matches the snapshot', () => {
    const wrapper = mount(Button, {
      props: { label: 'Click Me' },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});