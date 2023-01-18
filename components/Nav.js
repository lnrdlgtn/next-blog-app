import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li className={inter.className}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={inter.className}>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;