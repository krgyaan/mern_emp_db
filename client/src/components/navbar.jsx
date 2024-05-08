import { useState } from "react";
import img from '../assets/logo.jpg'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full border">
            <div className="container mx-auto">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-50 max-w-full px-4">
                        <Link to="/#" className="block w-full py-5">
                            <img src={img} alt="logo" width="50" />
                        </Link>
                    </div>
                    <div className="flex w-full items-center justify-between">
                        <div>
                            <button onClick={() => setOpen(!open)}
                                id="navbarToggler" className={` ${open && "navbarTogglerActive"} absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`} >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`absolute top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"} `}
                            >
                                <ul className="block lg:flex">
                                    <ListItem NavLink={`/`}>Home</ListItem>
                                    <ListItem NavLink={`/emp-list`}>Employee List</ListItem>
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <Link to="/sign-in" className="px-7 py-3 text-base font-medium bg-indigo-500 hover:bg-opacity-50 text-white rounded-lg">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
    return (
        <>
            <li>
                <Link
                    to={NavLink}
                    className="flex py-2 text-base font-medium text-body-color mx-2 lg:inline-flex"
                >
                    {children}
                </Link>
            </li>
        </>
    );
};