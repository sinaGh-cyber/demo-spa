import AboutUsPage from './pages/about-us/about-us';
import BlogPage from './pages/blogPage/blogPage';
import Dashboard from './components/Dashboard/dashboard';
import HomePage from './pages/home/home';
import NotFoundPage from './pages/not-found/not-found';
import PostPage from './pages/post/postPage';
import ProfilePage from './pages/profile/profile';
import Download from './components/downloads/downloads';

const mainRoutes = [
  {
    isExact: false,
    component: PostPage,
    path: '/blog/:id',
    title: 'Post',
    hasLink: false,
    id: 0,
  },

  {
    isExact: false,
    component: AboutUsPage,
    path: '/About-us/',
    title: 'About us',
    hasLink: true,
    id: 1,
  },
  {
    isExact: false,
    component: ProfilePage,
    path: '/profile/',
    title: 'Profile',
    hasLink: true,
    id: 2,
  },  {
    isExact: false,
    component: BlogPage,
    path: '/blog',
    title: 'Blog',
    hasLink: true,
    id: 3,
  },
  {
    isExact: true,
    component: HomePage,
    path: '/',
    title: 'Home',
    hasLink: true,
    id: 4,
  },


  {
    isExact: false,
    component: NotFoundPage,
    path: '*',
    title: 'Not found',
    hasLink: false,
    id: 5,
  },
];

const profileRoutes = [
  {
    isExact: true,
    component: Dashboard,
    path: '/profile/dashboard',
    title: 'Dashboard',
    id: 0,
  },
  {
    isExact: true,
    component: Download,
    path: '/profile/downloads',
    title: 'Downloads',
    id: 1,
  },
];

export { mainRoutes, profileRoutes };
