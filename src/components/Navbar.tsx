import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { GitHubLogoIcon } from "@radix-ui/react-icons"

const link = 'https://github.com/kamiv1980/test-product-app';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navLink}>
                <Link  href={`/`}>
                    <p>Home</p>
                </Link>
            </div>
            <Link  href={link} target="_blank">
                <GitHubLogoIcon color='#fff' width='32px' height='32px'/>
            </Link>
        </nav>
    );
}

