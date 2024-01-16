"use client";
import { useAppContext } from "@/helpers/Helpers";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const Allusers = (props: any) => {
  const { contextValue }: any = useAppContext();
  const [allUsers, setAllUsers] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/users/getall-users"
        );
        const allUsers = response.data;
        setAllUsers(allUsers);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const gridRef = useRef<any>(null);
  const masonryRef = useRef<any>(null);

  const switchLayout = () => {
    let masonryInstance: any = null;

    if (typeof window !== "undefined") {
      import("masonry-layout").then((module) => {
        const Masonry = module.default;
        masonryInstance = new Masonry(gridRef.current, {
          // options
          // itemSelector: ".grid-item",
          // columnWidth: 160,
          // gutter: 20,
        });

        masonryRef.current = masonryInstance;
      });
    }
  };

  switchLayout();

  return (
    <div ref={gridRef} className="grid">
      {allUsers.map((user: any) => (
        <div
          className="max-w-[250px] min-w-[200px] h-fit min-h-[120px] p-3 border-2 border-[#5F6368] mr-[25px] mb-[25px] rounded-[10px] "
          key={user?._id}
        >
          <User user={user} />
        </div>
      ))}
    </div>
  );
};

const User = ({ user }: any) => {
  console.log(user, "This is user");
  return (
    <div className="flex justify-center items-center flex-col gap-[7px] ">
      <div
        style={{
          backgroundImage: `url(${user?.profilePic})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "70px",
          height: "70px",
        }}
        className="rounded-full"
      ></div>
      {/* <img
        src={user?.profilePic}
        className="flex justify-center w-[70px] h-[70px] rounded-full"
        alt="img"
      /> */}
      <p className="text-[18px] font-medium text-center mt-2 ">
        {user.username}
      </p>
      <p className="text-[18px] font-medium text-center">{user?.email} </p>
    </div>
  );
};

export default Allusers;