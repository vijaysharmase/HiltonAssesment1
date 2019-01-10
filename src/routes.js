import Home from './components/Home';
import About from './components/About';
import Hotel from './components/Hotel';
import NotFound from './components/NotFound';
import PanelRight from './components/PanelRight';
import Contact from './components/Contact';

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/panel-right/',
    component: PanelRight,
  },
  {
    path: '/about/',
    component: About,
  },
  {
    path: '/contact/',
    component: Contact,
  },
  {
    path: '/hotel/',
    component: Hotel,
  },
  {
    path: '(.*)',
    component: NotFound,
  },
];
