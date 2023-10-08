import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  },
  args: { 
    default: 'Click me' 
  }, // default value
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    default: 'Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        args,
        onClick: action('clicked'),
      };
    },
    template: '<Button @click:button="onClick">{{args.default}}</Button>',
  }),
};