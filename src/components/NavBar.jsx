import React from "react";
import { Navbar, MobileNav, Typography, IconButton, Button } from "@material-tailwind/react";
import logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);


  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" color="blue-gray" className="relative">
        <Link
          to="/"
          className={`flex items-center p-1 font-semibold text-base hover:text-opacity-85 hover:text-green-700 ${location.pathname === "/" ? "text-green-800 underline decoration-[3px] underline-offset-[3px] decoration-green-800" : ""}`}
        >
          <span className="link link-underline link-underline-black">Home</span>
        </Link>
      </Typography>
      <Typography as="li" color="blue-gray" className="relative">
        <Link
          to="/profile"
          className={`flex items-center p-1 font-semibold text-base hover:text-opacity-85 hover:text-green-700 ${
            location.pathname === "/profile" ? "text-green-800 underline decoration-[3px] underline-offset-[3px] decoration-green-800" : ""
          }`}
        >
          <span className="link link-underline link-underline-black">Profile</span>
        </Link>
      </Typography>
      <Typography as="li" color="blue-gray" className="relative">
        <Link
          to="/article"
          className={`flex items-center p-1 font-semibold text-base hover:text-opacity-85 hover:text-green-700 ${
            location.pathname.startsWith("/article") ? "text-green-800 underline decoration-[3px] underline-offset-[3px] decoration-green-800" : ""
          }`}
        >
          <span className="link link-underline link-underline-black">Article</span>
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="navbar sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900 lg:px-20">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-8" />
            <Link to="/" className="mr-4 cursor-pointer py-0 font-semibold text-primary text-sm">
              HIMATIF <br /> Universitas Islam Riau
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button color="green" buttonType="filled" size="regular" ripple="light" className="hidden lg:block">
                <Link to="/login">Login</Link>
              </Button>
            </div>
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
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="gradient" size="sm" className="" color="green" buttonType="filled">
              <Link to="/login">Login</Link>
            </Button>
          </div>
          </MobileNav>
      </Navbar>
    </>
  );
}
