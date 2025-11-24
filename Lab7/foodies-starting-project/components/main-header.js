import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png'; // Upewnij się, że ścieżka jest poprawna
import MainHeaderBackground from './main-header-background';
import classes from './main-header-background.module.css'; // Stylizacja nagłówka

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          {/* Zadanie 3: Image Optimization - dodaj priority */}
          <Image 
            src={logoImg} 
            alt="A plate with food on it" 
            priority 
          />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}