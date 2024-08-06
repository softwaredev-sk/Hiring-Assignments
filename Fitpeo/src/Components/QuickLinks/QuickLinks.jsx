import ReactIcons from '../ReactIcons.jsx/ReactIcons';
import classes from './QuickLinks.module.css';

const LINKS = [
  {
    name: 'goals',
    icon: 'goal',
    label: 'Goals',
    action: '#',
  },
  {
    name: 'popularDishes',
    icon: 'dish',
    label: 'Popular Dishes',
    action: '#',
  },
  {
    name: 'menus',
    icon: 'menu',
    label: 'Menus',
    action: '#',
  },
];

export default function QuickLinks() {
  return (
    <aside className={classes.quicklinks}>
      {LINKS.map((link) => (
        <a key={link.name} className={classes[link.name]} href={link.action}>
          <div className={classes.icon}>
            <ReactIcons icon={link.icon} />
          </div>
          <span>{link.label}</span>
        </a>
      ))}
    </aside>
  );
}
