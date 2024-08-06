import classes from './RootLayout.module.css';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

// data for horizontal navabar
const HORIZONTAL_NAVBAR_DATA = [
  {
    name: 'messages',
    label: 'Messages',
    icon: 'messages',
    action: '',
  },
  {
    name: 'settings',
    label: 'Settings',
    icon: 'settings',
    action: '',
  },
  {
    name: 'notifications',
    label: 'Notifications',
    icon: 'notifications',
    action: '',
  },
];

// data for vertical navabar
const VERTICAL_NAVBAR_DATA = [
  {
    name: 'home',
    label: 'Home',
    icon: 'home',
    action: '',
  },
  {
    name: 'charts',
    label: 'Records',
    icon: 'charts',
    action: '',
  },
  {
    name: 'clipboard',
    label: 'History',
    icon: 'clipboard',
    action: '',
  },
  {
    name: 'wallet',
    label: 'Your Orders',
    icon: 'wallet',
    action: '',
  },
  {
    name: 'cart',
    label: 'Your Shopping List',
    icon: 'cart',
    action: '',
  },
  {
    name: 'logout',
    label: 'Logout',
    icon: 'logout',
    action: '',
  },
];

// component for root layout
export default function RootLayout() {
  return (
    <>
      <Navbar options={HORIZONTAL_NAVBAR_DATA} />
      <div className={classes.parallel}>
        <Navbar options={VERTICAL_NAVBAR_DATA} horizontal={false} />
        <Outlet />
      </div>
    </>
  );
}
