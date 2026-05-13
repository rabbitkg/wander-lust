'use client'

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user
    console.log(user)

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    return (
        <nav className="flex items-center justify-between shadow-md p-4 bg-white sticky top-0 z-50">
            <ul className="flex gap-3">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/destinations">Destinations</Link></li>
                <li><Link href="/my-bookings">My Bookings</Link></li>
                <li><Link href="/add-destinations">Add Destinations</Link></li>
            </ul>

            <div>
                <Image src={'/assets/Wanderlast.png'} alt="Navbar logo" width={150} height={150} />
            </div>
            <ul className="flex items-center gap-3">
                <li><Link href="/profile">Profile</Link></li>

                
                {user ? <>

                    <li>
                        <Avatar>
                            <Avatar.Image className="border rounded-full border-l-emerald-700" alt="John Doe" src={user?.image} />
                            <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                    </li>
                    <li><Button 
                    onClick={handleSignOut}
                    variant="danger" className="rounded-sm">Logout</Button></li>

                </> : <>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/signup">Sign Up</Link></li>
                </>}
               

            </ul>
        </nav>
    );
};

export default Navbar;