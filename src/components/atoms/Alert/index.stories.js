import Badge from '.';

export default {
  title: 'Atom: Badge',
  component: Badge,
};

export const DefaultColor = () => ({
  components: { Badge },
  template: '<Badge>hemorroida</Badge>',
});

export const Yellow = () => ({
  components: { Badge },
  template: '<Badge color="yellow">diabetes</Badge>',
});

export const Blue = () => ({
  components: { Badge },
  template: '<Badge color="blue">pressAo BaixA</Badge>',
});

