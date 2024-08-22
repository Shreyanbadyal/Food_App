'use client';
import Link from "next/link";
import Image from "next/image";
import logoPng from "@/assets/logo.png";
import classes from "./main-header.module.css"
import { usePathname } from "next/navigation";
import MainHeaderBackground from "./main-header-background";
export default function mainheader(){
    const path = usePathname(); 
    return(
        <>
        <MainHeaderBackground/>
        <header className={classes.header}>
            <Link className = {classes.logo}href = '/'>
                <Image src={logoPng} alt="Main logo pic" priority/>
                Next level food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><Link href='/meals' className={path.startsWith('/meals') ? classes.active : undefined}>Meals section</Link></li>
                    <li><Link href='/community' className={path.startsWith('/community') ? classes.active : undefined}>Community section</Link></li>
                </ul>
            </nav>
        </header>
        
        </>
    );
}