

const routes = [
  { isExact: true, component: '</>', path: '/', title: 'Home' },
  { isExact: false, component: '</>', path: '/About-us/', title: 'About us' },
  { isExact: false, component: '</>', path: '/profile/', title: 'Profile' },
  {
    isExact: false,
    component: '</>',
    path: '/contactUs/',
    title: 'Contact us',
  },
  { isExact: false, component: '</>', path: '/*', title: 'Not found' },
];

export default routes;
