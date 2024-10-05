import Link from "next/link";
import Image from "next/image"; // Import the Image component
import logo from "../components/logo.png";

function Navbar() {
    return (
        <div>
            <header className="body-font" id="navbar">
                <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center text-yellow-600 hover:text-blue-800">
                    <Image src={logo} alt="logo" width={50} height={50} /> 

                    <span className="ml-3 text-3xl font-bold">VoyageVista</span>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-blue-800 font-semibold gap-4">
                        <Link href="/" className="mr-5 hover:text-white">Home</Link>
                        <Link href="/About" className="mr-5 hover:text-white">About</Link>
                        <Link href="/Destinations" className="mr-5 hover:text-white">Destinations</Link>
                        <Link href="/Services" className="mr-5 hover:text-white">Services</Link>
                        <Link href="/Contact" className="mr-5 hover:text-white">Contact us</Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
