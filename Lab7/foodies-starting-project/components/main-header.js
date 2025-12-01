import Link from 'next/link';
import Image from 'next/image'; // Krok 3: Import komponentu Image
import logoImg from '@/assets/logo.png'; // Import obrazka
import classes from './main-header.module.css'; // Import stylów
import MainHeaderBackground from './main-header-background'; // Krok 4: Tło

export default function MainHeader() {
  return (
    <>
      {/* Dodanie tła z kroku 4 */}
      <MainHeaderBackground /> 
      
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          {/* Krok 3: Optymalizacja obrazka z priorytetem */}
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