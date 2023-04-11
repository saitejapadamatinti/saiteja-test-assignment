import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [smallTab, setSmallTab] = useState(false);

  return (
    <>
      <div className="w-full bg-slate-800">
        <nav className="relative backdrop-blur-md max-md:hidden flex justify-between items-center">
          <div className=" backdrop-blur-md max-md:hidden flex justify-between xl:px-24 py-8 text-xl text-white text-[16px] hidden lg:block space-x-10">
            <NavLink to="/" className="text-xl">
              Movies
            </NavLink>
            <NavLink to="/favorite" className="text-xl">
              Favarioate
            </NavLink>
          </div>
          <div className="backdrop-blur-md max-md:hidden w-1/2 flex justify-between xl:px-32 py-8 space-x-4 text-xl text-white text-[18px] md:px-12 md:text-[14px] md:w-3/5 md:block lg:hidden">
            <NavLink to="/" className="text-xl">
              Movies
            </NavLink>
            <NavLink to="/favorite" className="text-xl">
              Favarioate
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Small Screen Nave Bar */}
      <div className="max-md:block hidden py-2 bg-slate-800 mb-4">
        <nav>
          <div className="text-white">
            <div className="nav-container container">
              <div className="small-device-width flex justify-between items-center px-6">
                <NavLink className="home-link-sai" to="./">
                  <div>
                    <h1 className="font-bold">Sai</h1>
                  </div>
                </NavLink>
                <button
                  className="header-hamburger-icon"
                  onClick={() => setSmallTab(!smallTab)}
                >
                  {/* {smallTab ? (
                    <RxCross1 className="text-[30px]" />
                  ) : (
                    <GiHamburgerMenu className="ham-icon" />
                  )} */}
                  <GiHamburgerMenu className="ham-icon text-[30px]" />
                </button>
              </div>
            </div>
            {smallTab && true ? (
              <div
                onClick={() => setSmallTab(false)}
                className="z-10 space-x-3 backdrop-blur-xl text-slate-900 font-medium bg-white/10 text-[16px] pl-4  top-0 right-0 w-[70%] h-full fixed"
              >
                <div className="text-right p-5 mb-10">
                  <button
                    className="header-hamburger-icon"
                    onClick={() => setSmallTab(!smallTab)}
                  >
                    {/* {smallTab ? (
                    <RxCross1 className="text-[30px]" />
                  ) : (
                    <GiHamburgerMenu className="ham-icon" />
                  )} */}
                    <RxCross1 className="text-[24px]" />
                  </button>
                </div>
                <div className="flex flex-col space-y-4 m-0 ">
                  <NavLink to="/" className="text-xl">
                    Movies
                  </NavLink>
                  <NavLink to="/favorite" className="text-xl">
                    Favarioate
                  </NavLink>
                </div>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { redirect } from "react-router-dom";
// import Cookies from "js-cookie";

// const UserContext = React.createContext();

// const Header = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const [searchInputValue, setSearchInputValue] = useState("");

//   const onChangeSearch = (e) => {
//     setSearchValue(e.target.value);
//   };

//   const onFormSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="w-screen flex justify-center items-center content-center bg-slate-700 h-14">
//       {/* <UserContext.Provider value={searchValue}> */}
//         <nav className="flex gap-32">
//           <NavLink to="/" className="text-xl">
//             Movies
//           </NavLink>
//           <NavLink to="/favorite" className="text-xl">
//             Favarioate
//           </NavLink>
//           <form type="submit" onSubmit={(e) => onFormSubmit(e)}>
//             <input onChange={(e) => onChangeSearch(e)} type="search" />
//             <Link to={`/search/${searchValue}`}>
//               <button type="submit">Submit</button>
//             </Link>
//           </form>
//         </nav>
//       {/* </UserContext.Provider> */}
//     </div>
//   );
// };

// export default Header;
