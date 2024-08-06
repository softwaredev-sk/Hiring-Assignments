import classes from './SearchBar.module.css';
import ReactIcons from '../ReactIcons.jsx/ReactIcons';

// component for search bar
export default function SearchBar() {
  return (
    <div className={classes.container}>
      <input type="search" placeholder="Search" />
      <ReactIcons icon="search" />
    </div>
  );
}
