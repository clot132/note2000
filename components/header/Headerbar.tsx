"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiGrid, FiMenu } from "react-icons/fi";
import { HiSearch } from "react-icons/hi";
import { IoRefreshSharp, IoSettingsOutline } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useAppContext } from "@/helpers/Helpers";
import Tippy from "@tippyjs/react";
import MobileNav from "../mobileNav/MobileNav";

type Props = {};

const Headerbar = (props: any) => {
  const { contextValue }: any = useAppContext();

  const [activeInput, setActiveInput] = useState(false); //Changes the background colour
  const [mobileSearchBar, setMobileSearchBar] = useState(false); //This state controls the mobile search bar whether it shows or not
  const [times, setTimes] = useState(false);
  const [showHover, setShowHover] = useState(false);

  // console.log(times);
  const handleClick = () => {
    contextValue?.setChangeNoteLayout(!contextValue.changeNoteLayout);
  };

  console.log(contextValue?.openMobileNav);

  return (
    <nav className="fixed z-10 top-0 left-0 w-full flex justify-between mb-4 p-4 bg-darkmode max-[550px]:mb-2 max-[550px]:p-2 ">
      <div className="flex items-center justify-between gap-16 w-[60%] min-[850px]:  ">
        {mobileSearchBar ? (
          <form className="bg-white flex items-center rounded-xl px-4 ">
            <Tippy placement="bottom" content="Refresh">
              <span className="bg-#fff border-2 px-1 outline-none border-none  ">
                {
                  <BiLeftArrowAlt
                    className="max-sm:text-[18px] max-md:text-[18px] max-lg:text-[22px]"
                    onClick={() => setMobileSearchBar(false)}
                    color="#000"
                    cursor="pointer"
                  />
                }{" "}
              </span>
            </Tippy>
            <input
              className="bg-white text-black w-full rounded-xl text-#000 py-2 border-none outline-none placeholder:text-[16px] font-weight: black "
              placeholder="Search"
              type="text"
            />

            <span className="bg-#fff border-2 px-1 outline-none border-none ">
              {
                <LiaTimesSolid
                  className="max-sm:text-[20px] max-md:text-[18px] max-lg:text-[22px]"
                  onClick={() => setMobileSearchBar(false)}
                  color="#000"
                  cursor="pointer"
                />
              }{" "}
            </span>
          </form>
        ) : (
          <div className="flex items-center gap-2">
            <Tippy placement="bottom" content="Main menu">
              <span
                // onClick={() => contextValue?.setOpenMobileNav(true)}
                className="p-3 rounded-full :hover bg-[#28292C] cursor-pointer max-sm:hidden"
              >
                {
                  <FiMenu
                    className="max-sm:text-[18px] md:text-[18px] "
                    cursor="pointer"
                  />
                }{" "}
              </span>
            </Tippy>
            <Tippy placement="bottom" content="Main menu">
              <span
                onClick={() =>
                  contextValue?.setOpenMobileNav(!contextValue?.openMobileNav)
                }
                className="p-3 rounded-full :hover bg-[#28292C] cursor-pointer hidden max-sm:block "
              >
                {
                  <FiMenu
                    className="max-sm:text-[18px] md:text-[18px] "
                    cursor="pointer"
                  />
                }{" "}
              </span>
            </Tippy>
            <img src="/keep.png" className="w-8 h-8 nav:w-12 nav:h-12 " />
            <h1 className="max-lg:text-[22px] text-[24px] max-sm:[18px] ">
              {" "}
              Keep{" "}
            </h1>
          </div>
        )}
        <form
          className={
            activeInput
              ? "max-md:hidden flex items-center bg-white w-full rounded-xl py-2 px-6"
              : "max-md:hidden flex items-center bg-searchbar w-full rounded-xl py-2 px-6 "
          }
        >
          <span>
            {
              <HiSearch
                className="sm:text-[18px] md:text-[18px] lg:text-[22px]"
                color={activeInput ? "black" : "#fff"}
                cursor="pointer"
              />
            }{" "}
          </span>
          <input
            onClick={() => {
              setActiveInput(true);
              setTimes(true);
            }}
            className={
              activeInput
                ? "min-p-[2px] p-1 bg-white w-full border-none outline-none placeholder: text-black text-[18px] font-weight: black"
                : "p-1 bg-searchbar border-none outline-none placeholder:text-[#E9E9E9] text-[18px] font-weight: black"
            }
            type="text"
            placeholder="Search"
          />
          {activeInput ? (
            <span className=" " onClick={() => setTimes(!times)}>
              {" "}
              {times ? (
                <LiaTimesSolid
                  className="sm:text-[18px] md:text-[18px] lg:text-[22px]"
                  color={activeInput ? "black" : "#fff"}
                  cursor="pointer"
                />
              ) : (
                ""
              )}{" "}
            </span>
          ) : (
            ""
          )}
        </form>
      </div>
      <div className=" flex items-center justify-between gap-2 min-w-[15%] max-[550px]:gap-[3px] ">
        <div className="flex items-center gap-1 ">
          <span
            onClick={() => setMobileSearchBar(true)}
            className="min-[850px]:hidden "
          >
            {
              <HiSearch
                className="text-[22px] max-sm:text-[18px] max-md:text-[18px] max-lg:text-[22px] "
                cursor="pointer"
              />
            }{" "}
          </span>
          <Tippy placement="bottom" content="Refresh">
            <span
              onClick={() => window.location.reload()}
              className="p-3 rounded-full hover:bg-[#313236] max-sm:p-1 "
            >
              {
                <IoRefreshSharp
                  className=" text-[#9AA0A6] text-[22px] max-sm:text-[18px] max-md:text-[18px] max-lg:text-[22px] "
                  cursor="pointer"
                />
              }{" "}
            </span>
          </Tippy>
          {contextValue?.changeNoteLayout ? (
            <Tippy placement="bottom" content="Grid view">
              <span
                onClick={() =>
                  contextValue?.setChangeNoteLayout(
                    !contextValue?.changeNoteLayout
                  )
                }
                className="p-3 rounded-full hover:bg-[#313236] max-[550px]:hidden  "
              >
                {
                  //This is list view
                  <FiGrid
                    className=" text-[#9AA0A6]  text-[22px] max-sm:text-[18px] max-md:text-[18px] lg:text-[22px]  "
                    cursor="pointer"
                  />
                }{" "}
              </span>
            </Tippy>
          ) : (
            <Tippy placement="bottom" content="List view">
              <span
                onClick={() => contextValue?.setChangeNoteLayout(true)}
                className="p-3 rounded-full hover:bg-[#313236] max-[550px]:hidden "
              >
                {
                  //This is masonry view
                  <CiGrid2H
                    className=" text-[#9AA0A6]  text-[22px] max-sm:text-[18px] max-md:text-[18px] lg:text-[22px]  "
                    cursor="pointer"
                  />
                }{" "}
              </span>
            </Tippy>
          )}
          <Tippy placement="bottom" content="Settings">
            <span className="p-3 rounded-full hover:bg-[#313236]  max-sm:p-1 ">
              {
                <IoSettingsOutline
                  className=" text-[#9AA0A6] text-[22px] max-sm:text-[18px] max-md:text-[18px] lg:text-[22px]  "
                  cursor="pointer"
                />
              }{" "}
            </span>
          </Tippy>
        </div>
        <div className="flex items-center gap-2  max-sm:w-[100%] max-sm:gap-[4px] ">
          <Tippy placement="bottom" content="Google apps">
            <span className="p-3 rounded-full hover:bg-[#313236]  max-[600px]:hidden">
              {
                <CgMenuGridO
                  className=" text-[22px] max-sm:text-[16px] max-md:text-[18px] lg:text-[22px] "
                  cursor="pointer"
                />
              }{" "}
            </span>
          </Tippy>
          <div className="relative h-[45px] w-[45px] rounded-full max-sm:h-[40px] max-sm:w-[40px] ">
            <img
              className="w-[100%] h-[100%] rounded-full  "
              src={contextValue.user?.profilePic}
              width="40"
              height="50"
              alt="img"
              onMouseOver={() => setShowHover(true)}
              onMouseOut={() => setShowHover(false)}
            />
            {showHover && (
              <div className="bg-[#393D40] absolute p-1 px-4 top-[40px] right-[1px] rounded-[8px]  ">
                <span>Google Account </span>
                <p className="text-[#ADB1B5]">{contextValue.user?.username} </p>
                <p className="text-[#ADB1B5]">{contextValue.user?.email} </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {contextValue?.openMobileNav ? <MobileNav /> : ""}
    </nav>
  );
};

export default Headerbar;
