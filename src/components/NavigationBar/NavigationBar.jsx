import { Navbar } from "@material-tailwind/react"
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";


export const navigationLink = [
    {
        id: 1,
        name: "ABOUT",
        link: "#/about"
    },
    {
        id: 2,
        name: "SERVICES",
        link: "#/services"
    },
    {
        id: 3,
        name: "PRICING",
        link: "#/pricing"
    },
    {
        id: 4,
        name: "TESTIMONIAL",
        link: "#/testimonial"
    },
    {
        id: 5,
        name: "CONTACT",
        link: ""
    }
]

const NavigationBar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
    <Navbar className="fixed z-10 shadow-md dark:bg-dark dark:text-white " color="transparent" fullWidth>
        <div className="max-w-[110rem] mx-auto ">
            <div className="flex items-center justify-between">
                <div className="sm:flex items-center">
                    <img src={Logo} alt="" className="w-24 object-contain"/>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {navigationLink.map(({id, name, link}) => {
                            return <li key={id} className="py-4 text-black">
                                <Link to={link} className="inline-block text-lg font-semibold hover:text-red-500 dark:text-white">{name}</Link>
                            </li>
                        })}
                        {/* darkMode iplemente */}
                        <DarkMode/>
                    </ul>
                </nav>
                {/* Mobil view */}
                <div className="flex items-center md:hidden gap-4 py-4">
                    <DarkMode/>
                    {/* Mobil hamburgerMenu */}
                    {
                        showMenu ? (
                            <HiMenuAlt1
                                onClick={toggleMenu}
                                className="cursor-pointer transition-all text-black dark:text-white"
                                size={30}
                            />
                        ):(
                            <HiMenuAlt3
                                onClick={toggleMenu}
                                className="cursor-pointer transition-all text-black dark:text-white"
                                size={30}
                            />
                        )
                    }
                </div>
            </div>
        </div>
        <ResponsiveMenu showMenu={showMenu}/>
    </Navbar>
  )
}

export default NavigationBar