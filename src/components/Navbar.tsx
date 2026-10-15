import { brand, navItems } from '../data/content';
import Button from './ui/Button';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <header className="nav">
      <a className="nav__brand" href="#home">
        BEYOND <span>the</span> CODE
      </a>
      <nav aria-label={`Navigasi ${brand}`}>
        <ul className="nav__list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Button variant="butter" className="nav__cta" href="#contact">
        HIRE ME!
      </Button>
    </header>
  );
}
