import UserAvatar from '.';

export default {
  title: 'Atom: UserAvatar ',
  component: UserAvatar,
};

export const Only_Image = () => ({
  components: { UserAvatar },
  template: '<UserAvatar src=\'https://userstock.io/data/wp-content/uploads/2020/06/women-s-white-and-black-button-up-collared-shirt-774909-2-1024x1024.jpg\'/>'
});

export const Avatar_Size_120 = () => ({
  components: { UserAvatar },
  template: '<UserAvatar src=\'https://userstock.io/data/wp-content/uploads/2020/06/women-s-white-and-black-button-up-collared-shirt-774909-2-1024x1024.jpg\' size=\'size-120\'/>'
});

export const Avatar_Size_120_Roudend = () => ({
  components: { UserAvatar },
  template: '<UserAvatar src=\'https://userstock.io/data/wp-content/uploads/2020/06/women-s-white-and-black-button-up-collared-shirt-774909-2-1024x1024.jpg\' size=\'size-120\' style_border=\'roudend\'/>'
});

export const Avatar_Size_60 = () => ({
  components: { UserAvatar },
  template: '<UserAvatar src=\'https://userstock.io/data/wp-content/uploads/2020/06/women-s-white-and-black-button-up-collared-shirt-774909-2-1024x1024.jpg\' size=\'size-60\'/>'
});

export const Avatar_Size_60_Roudend = () => ({
  components: { UserAvatar },
  template: '<UserAvatar src=\'https://userstock.io/data/wp-content/uploads/2020/06/women-s-white-and-black-button-up-collared-shirt-774909-2-1024x1024.jpg\' size=\'size-60\' style_border=\'roudend\'/>'
});



/*size=\'size-60\' style_border=\'roudend\'*/