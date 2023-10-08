import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';

import Contact from '../components/Contact.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Contact',
  component: Contact,
  tags: ['autodocs'],
  argTypes: {
  },
  args: { 
    title: 'Contact us' 
  }, // default value
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    title: 'Contact us',
  },
  render: (args) => ({
    components: { Contact },
    setup() {
      return {
        ...args,
        onClick: action('clicked'),
      };
    },
    template: '<Contact :title="title" @close:contact="onClick"/>',
  }),
};