import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faBell,
  faBars,
  faTimes,
  faDashboard,
  faHome,
  faBox,
  faBlog,
  faClipboardCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
const StandardNavMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex items-center sticky top-0 h-20 px-6 justify-between lg:justify-between   bg-[#ffc532] text-white  z-50">
      <div className="h-60 w-60">
        {/* <img src={logo} className="h-60 w-60" /> */}
      </div>
      <div className="flex-1 justify-center items-center hidden lg:flex ">
        <Link
          to="/"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
            text-xl hover:text-white"
        >
          <FontAwesomeIcon icon={faHome} className=" mr-2" />
          Home
        </Link>

        <Link
          to="/completetask"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
            text-xl hover:text-white"
        >
          <FontAwesomeIcon className=" mr-2" icon={faClipboardCheck} />
          Completed Tasks
        </Link>
        <Link
          to="/todo"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
            text-xl hover:text-white"
        >
          <FontAwesomeIcon icon={faDashboard} className=" mr-2" />
          To-Do
        </Link>
        <Link
          to="/calender"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
            text-xl hover:text-white"
        >
          <FontAwesomeIcon icon={faCalendarCheck} className=" mr-2" />
          Calendar
        </Link>
      </div>
      <div className="items-center hidden lg:flex  ">
        <Button
          className=" text-black bg-green-500 bottom-1   hover:bg-white hover:text-black"
          text="Log in"
          size="sm"
        />

        <span className="px-4 caret-black text-black">|</span>
        <Button
          className="text-black bg-green-500 bottom-1 border-0 hover:bg-white  "
          text="Register"
          size="sm"
        />

        <FontAwesomeIcon
          icon={faBell}
          className="ml-6 text-2xl cursor-pointer text-gray-700"
        />
      </div>

      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-black text-3xl cursor-pointer lg:hidden"
      />
      {mobileOpen && (
        <div className=" absolute bg-slate-600 top-full left-0 flex flex-col w-full pb-8 lg:hidden">
          <div className="flex-1 flex flex-col items-center text-xl">
            <Link
              to="/"
              className="no-underline px-2 mr-3 text-gray-200 font-bold
            text-xl hover:text-white"
            >
              <FontAwesomeIcon icon={faHome} className=" mr-2 mt-6 " />
              Home
            </Link>

            <Link
              to="/"
              className="no-underline px-2 mr-3 text-gray-200 font-bold
            text-xl hover:text-white"
            >
              <FontAwesomeIcon
                icon={faClipboardCheck}
                className=" mr-2 mt-6 "
              />
              Completed Tasks
            </Link>
            <Link
              to="/"
              className="no-underline px-2 mr-3 text-gray-200 font-bold
            text-xl hover:text-white"
            >
              <FontAwesomeIcon icon={faDashboard} className=" mr-2 mt-6 " />
              To-Do
            </Link>
            <Link
              to="/"
              className="no-underline px-2 mr-3 text-gray-200 font-bold
            text-xl hover:text-white"
            >
              <FontAwesomeIcon icon={faCalendarCheck} className=" mr-2 mt-6 " />
              Calendar
            </Link>
            <div className="flex">
              <Button
                className=" text-gray-200 bg-transparent bottom-1 border-gray-200 mt-6 hover:bg-white hover:text-black"
                text="Login"
                size="sm"
              />

              <span className="px-4 mt-5 text-3xl text-white caret-black ">
                |
              </span>
              <Button
                className=" text-black bg-transparent bottom-1 mt-6  border-green-600 hover:bg-green-600 hover:text-white"
                text="Register"
                size="sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StandardNavMenu;
