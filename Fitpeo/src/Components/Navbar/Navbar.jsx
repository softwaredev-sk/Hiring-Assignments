import { useState } from 'react';
import DashboardLogo from '../DashboardLogo/DashboardLogo';
import ReactIcons from '../ReactIcons.jsx/ReactIcons';
import SearchBar from '../SearchBar/SearchBar';
import classes from './Navbar.module.css';

// Sidebar component for navigation in mobile screen. Display set to none for bigger screen (width > 640px). Component not exported as it is used as compound component for navbars
function NavbarMobile({ options, activeElement, onSelect, notify }) {
  return (
    <div className={classes.navbarMobile}>
      <div className={classes.navbarBtn}>
        <label htmlFor="navBtn">
          <input
            id="navBtn"
            name="navBtn"
            aria-labelledby="navBtn"
            className={classes.navBtn}
            type="checkbox"
          />
        </label>
      </div>
      <ul className={classes.navSidebar}>
        <li>
          <img src="/profile.webp" alt="profile" />
        </li>
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

// main navbar component, which is can be used for horizontal as well as vertical bar, by passing horizontal prop as true or false. Default value is true to render as horizontal navbar. Used conditional rendering to render dashboard logo, search bar, profile photo and sidebar navigation menu only when showing horizontal navbar.
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
          {horizontal && (
            <li>
              <img src="/profile.webp" alt="profile" />
            </li>
          )}
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
