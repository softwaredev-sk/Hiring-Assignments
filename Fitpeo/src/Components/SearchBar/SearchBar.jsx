import classes from './SearchBar.module.css';
import ReactIcons from '../ReactIcons.jsx/ReactIcons';

export default function SearchBar() {
  return (
    <div className={classes.container}>
      <input type="search" placeholder="Search" />
      <ReactIcons icon="search" />
    </div>
  );
}
