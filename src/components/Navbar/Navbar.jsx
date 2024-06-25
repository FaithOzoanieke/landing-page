import { useState, useRef, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Function to handle clicks outside of the dropdown menu
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false); // Close the dropdown if clicked outside
            }
        };

        // Add event listener to listen for clicks outside of the dropdown menu
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); // Run this effect only once after the component mounts

    return (
        <div className='flex'>
            {/* main div */}
            <div className='container mx-auto flex items-center justify-between py-8'>
                <div>
                    {/* logo */}
                    <img src={Logo} alt="Logo" className='h-9 mr-10' /> 
                </div>
                <div className='flex gap-10'>
                    {/* menu */}
                    <a href="#" className="menu-item hover:text-gray-700 transition duration-300 transform hover:-translate-y-1">Destinations</a>
                    <a href="#" className="menu-item hover:text-gray-700 transition duration-300 transform hover:-translate-y-1">Hotels</a>
                    <a href="#" className="menu-item hover:text-gray-700 transition duration-300 transform hover:-translate-y-1">Flight</a>
                    <a href="#" className="menu-item hover:text-gray-700 transition duration-300 transform hover:-translate-y-1">Bookings</a>
                    <a href="#" className="menu-item hover:text-gray-700 transition duration-300 transform hover:-translate-y-1">Login</a>
                    <a href="#" className="menu-item hover:text-gray-700 transition duration-300 transform hover:-translate-y-1">Signup </a>

                    <div className="relative"> {/* Wrap the dropdown with a div to control its alignment */}
                        <a href="#" className="menu-item hover:text-gray-700 transition duration-300 transform hover:-translate-y-1 flex items-center" onClick={() => setShowDropdown(!showDropdown)}>
                            EN <RiArrowDropDownLine className="ml-1" />
                        </a>
                        {showDropdown && (
                            <div ref={dropdownRef} className="dropdown-menu absolute bg-white border rounded-md mt-2">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-700 transition duration-300 transform hover:-translate-y-1">Arabic</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-700 transition duration-300 transform hover:-translate-y-1">German</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-700 transition duration-300 transform hover:-translate-y-1">Chinese</a>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;
