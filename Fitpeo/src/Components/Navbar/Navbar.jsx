import { useState } from 'react';
import DashboardLogo from '../DashboardLogo/DashboardLogo';
import ReactIcons from '../ReactIcons.jsx/ReactIcons';
import SearchBar from '../SearchBar/SearchBar';
import classes from './Navbar.module.css';

function NavbarMobile({ options, activeElement, onSelect, notify }) {
  return (
    <div className={classes.navbarMobile}>
      <div className={classes.navbarBtn}>
        <label htmlFor="navBtn">
          <input id="navBtn" className={classes.navBtn} type="checkbox" />
        </label>
      </div>
      <ul className={classes.navSidebar}>
        <img src="/profile.png" alt="profile" />
        {options.map((option) => (
          <li
            key={option.name}
            className={`${
              option.name === activeElement ? classes.active : ''
            } ${
              notify && option.name === 'notifications' ? classes.notify : ''
            }`}
            title={option.name}
          >
            <a
              href={`#${option.action}`}
              onClick={(e) => {
                e.preventDefault();
                onSelect(option.name);
              }}
            >
              <ReactIcons
                icon={option.icon}
                isActive={activeElement === option.name}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Navbar({ options, horizontal = true }) {
  const [activeElement, setActiveElement] = useState('home');
  const [newNotification] = useState(true);
  return (
    <div
      className={`${classes.container} ${
        horizontal ? classes.horizontal : classes.vertical
      }`}
    >
      {horizontal && (
        <div className={classes.logo}>
          <DashboardLogo />
        </div>
      )}
      <nav className={classes.navigation}>
        {horizontal && <SearchBar />}
        <ul className={classes.navbar}>
          {options.map((option) => (
            <li
              key={option.name}
              className={`${
                option.name === activeElement ? classes.active : ''
              } ${
                newNotification && option.name === 'notifications'
                  ? classes.notify
                  : ''
              } ${option.name === 'logout' ? classes.logout : ''}`}
              title={option.name}
            >
              <a
                href={`#${option.action}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveElement(option.name);
                }}
              >
                <ReactIcons
                  icon={option.icon}
                  isActive={activeElement === option.name}
                />
              </a>
            </li>
          ))}
          {horizontal && <img src="/profile.png" alt="profile" />}
        </ul>
        {horizontal && (
          <NavbarMobile
            options={options}
            activeElement={activeElement}
            onSelect={setActiveElement}
            notify={newNotification}
          />
        )}
      </nav>
    </div>
  );
}
