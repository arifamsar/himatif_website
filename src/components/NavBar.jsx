import React from "react";
import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="relative">
        <Link to="/" className="flex items-center p-1 font-normal hover:text-blue-gray-700">
          Home
          <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent transition-all duration-300 ease-in-out transform origin-bottom hover:bg-green-800"></span>
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="relative">
        <Link to="/profile" className="flex items-center p-1 font-normal hover:text-blue-gray-700">
          Profile
          <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent transition-all duration-300 ease-in-out transform origin-bottom hover:bg-green-800"></span>
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="relative">
        <Link to="/member" className="flex items-center p-1 font-normal hover:text-blue-gray-700">
          Member
          <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent transition-all duration-300 ease-in-out transform origin-bottom hover:bg-green-800"></span>
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-8" />
            <Link to="/" className="mr-4 cursor-pointer py-0 font-semibold text-primary text-sm">
              HIMATIF <br /> UIR
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </>
  );
}
