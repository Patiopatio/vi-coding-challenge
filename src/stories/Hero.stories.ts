import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';

import Hero from '../components/Hero.vue'; 
import Image from '../assets/Hero-mountains.jpg'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Hero',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
  },
  args: { 
    title: "A wonderful serenity has taken possession",
    description: "A wonderful serenity has taken possession of my entire soul, like these sweet moments.",
    buttonLabel: 'Contact us',
    imageSrc: Image,
    imageAlt: 'Mountains',
    headline: 'CTA - Main conversion',
  }, 
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    title: "A wonderful serenity has taken possession",
    description: "A wonderful serenity has taken possession of my entire soul, like these sweet moments.",
    buttonLabel: 'Contact us',
    imageSrc: Image,
    imageAlt: 'Mountains',
    headline: 'CTA - Main conversion',
  },
  render: (args) => ({
    components: { Hero },
    setup() {
      return {
        ...args,
        onClick: action('clicked'),
      };
    },
    template: '<Hero :title="title" :description="description" :buttonLabel="buttonLabel" :imageSrc="imageSrc" :imageAlt="imageAlt" :headline="headline" @open:contact="onClick"/>',
  }),
};