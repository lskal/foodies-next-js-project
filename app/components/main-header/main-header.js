import Link from "next/link"
import Image from "next/image"

import MainHeaderBackground from './main-header-background'
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href='/'>
                    <Image src={logoImg} alt="A place with food" priority />
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
        </>
    )
}