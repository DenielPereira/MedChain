import { action } from '@storybook/addon-actions';

import Button from '.';

export default {
  title: 'Atom: Button',
  component: Button,
};

export const DefaultColor = () => ({
  components: { Button },
  template: '<Button @click="action">Hello Button</Button>',
  methods: { action: action('clicked') },
});

export const BlueGradient = () => ({
  components: { Button },
  template: '<Button color="blue-gradient">Enviar prontuário</Button>',
  methods: { action: action('clicked') },
});
