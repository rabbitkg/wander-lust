'use client'

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const {
        data: session,
    } = authClient.useSession();

    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    const navLinks = (
        <>
            <li>
                <Link href="/" className="hover:text-emerald-600 transition">
                    Home
                </Link>
            </li>

            <li>
                <Link href="/destinations" className="hover:text-emerald-600 transition">
                    Destinations
                </Link>
            </li>

            <li>
                <Link href="/my-bookings" className="hover:text-emerald-600 transition">
                    My Bookings
                </Link>
            </li>

            <li>
                <Link href="/add-destinations" className="hover:text-emerald-600 transition">
                    Add Destinations
                </Link>
            </li>
        </>
    );

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">

            <nav className="container mx-auto flex items-center justify-between px-4 py-3">

                {/* LEFT MENU DESKTOP */}
                <ul className="hidden lg:flex items-center gap-6 font-medium">
                    {navLinks}
                </ul>

                {/* LOGO */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/assets/Wanderlast.png"
                        alt="Navbar logo"
                        width={140}
                        height={140}
                        priority
                    />
                </Link>

                {/* RIGHT SIDE */}
                <div className="hidden lg:flex items-center gap-4">

                    <Link
                        href="/profile"
                        className="hover:text-emerald-600 transition font-medium"
                    >
                        Profile
                    </Link>

                    {user ? (
                        <>
                            <li> <Avatar> <Avatar.Image referrerPolicy="no-referrer" className="border rounded-full border-l-emerald-700" alt="John Doe" src={user?.image} /> <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback> </Avatar> </li> <li><Button onClick={handleSignOut} variant="danger" className="rounded-sm">Logout</Button></li>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="hover:text-emerald-600 transition font-medium"
                            >
                                Login
                            </Link>

                            <Link href="/signup">
                                <Button
                                    
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        </>
                    )}
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-3xl"
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </nav>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="lg:hidden bg-white border-t shadow-md">

                    <ul className="flex flex-col gap-4 p-5 font-medium">
                        {navLinks}

                        <li>
                            <Link href="/profile">
                                Profile
                            </Link>
                        </li>

                        {user ? (
                            <>
                                <li> <Avatar> <Avatar.Image referrerPolicy="no-referrer" className="border rounded-full border-l-emerald-700" alt="John Doe" src={user?.image} /> <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback> </Avatar> </li> <li><Button onClick={handleSignOut} variant="danger" 
                                
                                className="rounded-sm">Logout</Button></li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href="/login">
                                        Login
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/signup">
                                        <Button
                                            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-md"
                                        >
                                            Sign Up
                                        </Button>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;