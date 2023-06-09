import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import 'styles/global.css';

const Layout = () => (
  <div className="layout">
    <Nav />
    <Outlet />
  </div>
);

export default Layout;
