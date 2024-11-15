import Image from "next/image";
import styles from "./navbar.module.css"
import Link from "next/link";

// Navbar displayed on all pages
export default function Navbar(){
  return(
    <nav className={styles.nav}>
      <Link href="/">
        <Image width={200} height={60}
          src="/Pokedex_logo.svg" alt="Pokédex Logo" />
      </Link>
    </nav>
  );
}