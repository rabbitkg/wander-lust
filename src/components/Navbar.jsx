import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between shadow-md p-4 bg-white sticky top-0 z-50">
            <ul className="flex gap-3">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/add-destinations">Add Destinations</Link></li>
                <li><Link href="/my-bookings">My Bookings</Link></li>
            </ul>

            <div>
                <Image src={'/assets/Wanderlast.png'} alt="Navbar logo" width={150} height={150} />
            </div>
            <ul className="flex gap-3">
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;