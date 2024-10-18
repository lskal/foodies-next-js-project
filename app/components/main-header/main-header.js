import Link from "next/link"
import Image from "next/image"


import MainHeaderBackground from './main-header-background'
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import Navlink from './nav-link'

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
                            <Navlink href='/meals'>Browse meals</Navlink>
                        </li>
                        <li>
                            <Navlink href='/community'>Foodies community</Navlink>
                        </li>
                    </ul>
                </nav>
            </header >
        </>
    )
}