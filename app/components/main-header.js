import Link from "next/link"
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href='/'>
                <img src={logoImg.src} alt="A place with food" />
                Next level food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/meals'>Browse meals</Link>
                    </li>
                    <li>
                        <Link href='/community'>Foodies community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}