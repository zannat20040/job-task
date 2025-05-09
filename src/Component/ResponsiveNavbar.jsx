import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "../assets/favicon.png";

const ResponsiveNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="  items-center flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-FAFAFA ">
      <Typography as="li" variant="small" className="font-normal">
        <a href="#" className="flex items-center font-inter">
          Home
        </a>
      </Typography>{" "}
      <Typography as="li" variant="small" className="font-normal">
        <a href="#" className="flex items-center font-inter">
          Demos
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center font-inter">
          About
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center font-inter">
          Services
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center font-inter">
          Blog
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center font-inter">
          Contact
        </a>
      </Typography>{" "}
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center font-inter">
          Get a Quote
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="sticky top-0 z-10 bg-transparent">
      <Navbar className=" container mx-auto  px-5 border-0 bg-12141D  shadow-none rounded-none py-0">
        <div className="flex items-center justify-between ">
          <div className="flex items-center  gap-4 w-full  justify-between py-3 lg:py-0">
            <div className="flex gap-5 items-center">
              <div>
                <a href="#" className="flex items-center py-3">
                  <img src={logo} alt="" className="w-9" />
                </a>
              </div>
              <div className="mr-4 hidden lg:block ">{navList}</div>
            </div>
            <div className="flex items-end gap-x-3">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block text-FAFAFA capitalize font-inter py-3 text-sm px-7 border border-[#FFFFFF4D] rounded font-normal"
              >
                <span>Sign in</span>
              </Button>
              <Button
                variant="gradient"
                className="hidden lg:inline-block text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded font-normal bg-gradient-to-r  from-[#E100FF] to-[#7F00FF]  hover:to-[#E100FF] hover:from-[#7F00FF] transition-all duration-700 ease-in-out focus:from-[#e661f8] focus:to-[#a351f6]"
              >
                <span>Get Started Free</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto py-2 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden block "
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className="p-5 lg:p-0 h-auto">
          {navList}
          <div className="flex gap-3 items-center justify-center mt-5 ">
            <Button
              fullWidth
              variant="text"
              size="sm"
              className=" block lg:hidden  text-FAFAFA capitalize font-inter py-3 text-sm px-7 border border-[#FFFFFF4D] rounded font-normal w-fit"
            >
              <span>Sign in</span>
            </Button>
            <Button
              variant="gradient"
              className="block  lg:hidden text-FAFAFA capitalize font-inter py-3 px-7 text-sm rounded font-normal bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]  hover:from-[#5C7FFF] hover:to-[#CB5CFF] transition-all duration-700 ease-in-out focus:from-[#0035F5] focus:to-[#A600F5]"
            >
              <span>Get Started Free</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default ResponsiveNavbar;
