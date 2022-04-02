import AboutUsPage from './pages/about-us/about-us';
import HomePage from './pages/home/home';
import NotFoundPage from './pages/not-found/not-found';
import ProfilePage from './pages/profile/profile';

const mainRoutes = [
  {
    isExact: false,
    component: AboutUsPage,
    path: '/About-us/',
    title: 'About us',
    hasLink: true,
    id: 0,
  },
  {
    isExact: false,
    component: ProfilePage,
    path: '/profile/',
    title: 'Profile',
    hasLink: true,
    id: 1,
  },
  {
    isExact: true,
    component: HomePage,
    path: '/',
    title: 'Home',
    hasLink: true,
    id: 2,
  },
  {
    isExact: false,
    component: NotFoundPage,
    path: '/*',
    title: 'Not found',
    hasLink: false,
    id: 3,
  },
];

export default mainRoutes;
