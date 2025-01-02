import { FaMobile, FaMugHot, FaTruck } from 'react-icons/fa6';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import {
  HiDevicePhoneMobile,
  HiOutlineClock,
  HiOutlineDevicePhoneMobile,
  HiOutlineTrophy,
  HiOutlineTruck,
  HiOutlineUsers,
} from 'react-icons/hi2';
import { IoLocationOutline } from 'react-icons/io5';
import { BsCupHot } from 'react-icons/bs';

import { GiTreeBranch } from 'react-icons/gi';

import { GrUserWorker } from 'react-icons/gr';
import { TbBinaryTree2 } from 'react-icons/tb';

export const nav_links = [
  {
    id: 1,
    label: 'Home',
    url: '/',
  },
  {
    id: 2,
    label: 'menu',
    url: '/menu',
  },
  {
    id: 3,
    label: 'blog',
    url: '/blog',
  },
  {
    id: 4,
    label: 'shop',
    url: '/shop',
  },
  {
    id: 5,
    label: 'about',
    url: '/about',
  },
  {
    id: 6,
    label: 'contact',
    url: '/contact',
  },
  {
    id: 7,
    // label: 'contact',
    icon: <HiOutlineShoppingCart />,
    url: '/cart',
  },
];

export const background_hero_imgs = [
  {
    id: 1,
    img: '/hero/image1.jpg',
    welcome_message: 'Welcome',
    title: 'Amazing taste & beautiful place',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quibusdam est autem quas atque ipsum',
  },
  {
    id: 2,
    img: '/hero/image2.jpg',
    welcome_message: 'Welcome',
    title: 'Amazing taste & beautiful place',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quibusdam est autem quas atque ipsum',
  },
  {
    id: 3,
    img: '/hero/image3.jpg',
    welcome_message: 'Welcome',
    title: 'Amazing taste & beautiful place',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quibusdam est autem quas atque ipsum',
  },
];

export const all_information = [
  {
    id: 1,
    icon: <HiDevicePhoneMobile />,
    more_info: '(000) 321 534 9865',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, doloribus!',
  },
  {
    id: 2,
    icon: <IoLocationOutline />,
    more_info: '453 Main Street',
    paragraph: '203 Glass St. Mountain View, San Francisco, California, USA',
  },
  {
    id: 3,
    icon: <HiOutlineClock />,
    more_info: 'Open Monday-Friday',
    paragraph: 'Please Join Us, We are Available --> 8:00am - 9:00pm',
  },
];

export const main_feature_box_data = [
  {
    id: 1,
    icon: <HiOutlineDevicePhoneMobile />,
    title: 'easy to order',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sint dignissimos nemo provident reprehenderit quam.',
  },
  {
    id: 2,
    icon: <HiOutlineTruck />,
    title: 'fastest delivery',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sint dignissimos nemo provident reprehenderit quam.',
  },
  {
    id: 3,
    icon: <BsCupHot />,
    title: 'quality coffee',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sint dignissimos nemo provident reprehenderit quam.',
  },
];

export const right_menu_imgs = [
  {
    id: 1,
    image: '/menu/menu_image1.jpg',
  },
  {
    id: 2,
    image: '/menu/menu_image2.jpg',
  },
  {
    id: 3,
    image: '/menu/menu_image3.jpg',
  },
  {
    id: 4,
    image: '/menu/menu_image4.jpg',
  },
];

export const stats_info = [
  {
    id: 1,
    // icon: <GiTreeBranch />,
    icon: <TbBinaryTree2 />,
    number: 36,
    stat_footer: 'Coffee Branches',
  },
  {
    id: 2,
    icon: <HiOutlineTrophy />,
    number: 99,
    stat_footer: 'Number of Awards',
  },
  {
    id: 3,
    icon: <HiOutlineUsers />,
    number: 9040,
    stat_footer: 'Happy Customers',
  },
  {
    id: 4,
    icon: <GrUserWorker />,
    number: 1056,
    stat_footer: 'Staff',
  },
];

export const testimonials = [
  {
    id: 1,
    image: '/testimonials/client1.jpg',
    testimony:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit Assumenda doloribus qui nemo earum perspiciatis fugiat quae a numquam quibusdam asperiores.',
    name: 'Baron Corbin',
  },
  {
    id: 2,
    image: '/testimonials/client2.jpg',
    testimony:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil et, quam repudiandae facere nulla nobis rerum quasi commodi  ',
    name: 'Max Freedman',
  },
  {
    id: 3,
    image: '/testimonials/client3.jpg',
    testimony:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, illo! Architecto autem voluptatibus eum iste neque dolores vitae. Animi, eius? ',
    name: 'Christian Cage',
  },
  {
    id: 4,
    image: '/testimonials/client4.jpg',
    testimony:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, recusandae. ',
    name: 'Kris Statlander',
  },
  {
    id: 5,
    image: '/testimonials/client5.jpg',
    testimony:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, illo! Architecto autem voluptatibus eum .',
    name: 'Ariana Grace',
  },
];
