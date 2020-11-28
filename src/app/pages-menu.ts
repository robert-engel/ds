import {Menu} from './theme/menu/menu';

export const MENU_ITEMS: Menu[] = [
  {
    title: 'Dashboard',
    link: '/',
  },
];

export const MENU_ITEMS_USER: Menu[] = [
  ...MENU_ITEMS,
  /*{
    title: 'Farm Manager',
    link: '/farmmanager',
  },*/
  {
    title: 'Incs',
    link: '/incs',
  },
  {
    title: 'Planer',
    link: '/planner',
  },
  {
    title: 'Befehle',
    link: '/command',
  },
  {
    title: 'Rausstell Manager',
    link: '/rausstell',
  },
  {
    title: 'Res Mover',
    link: '/resmover',
  },
  /*{
    title: 'Kata',
    link: '/catas',
  },
  {
    title: 'Auto Builder',
    link: '/autobuilder',
  },*/
];
