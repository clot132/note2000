"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../helpers/Helpers";
import { getCookie } from "cookies-next";
import ShowNote from "./showNote";
import "./notes.css";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import { BsCheckCircle } from "react-icons/bs";
type Props = {};

export default function ShowNotes(req: any, res: any) {
  const userCookie = getCookie("user", { req, res });
  const { contextValue }: any = useAppContext();
  const [noteModal, setNoteModal] = React.useState<boolean>(false); //toggle create note modal
  const [overLay, setOverLay] = useState(false);
  const [showIconsOnHover, setShowIconsOnHover] = React.useState(false);
  const [postLoaded, setPostLoaded] = useState(false);
  const containerRef = useRef(null);
  const [currentUser, setCurrentUser] = useState(contextValue?.user?._id);
  const [noteUrlParams, setNoteUrlParams] = React.useState<string>(""); //Send the id of the clicked note

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/notes/getall-notes/${userCookie}`)
      .then((res) => contextValue?.setNotes(res.data.notes))
      .catch((err) => console.log(err));
    // setPostLoaded(true);
  }, []);

  // console.log(currentUser, "this is currentUser");
  // console.log(contextValue.notes);
  // console.log(contextValue.notes);

  //   const items = contextValue?.notes.map(function(note:any) {
  //   return <div key={note._id}>{note.name}</div>
  // });
  var elem = document.querySelector(".grid");
  var msnry = new Masonry(elem, {
    // options
    itemSelector: ".grid-item",
    columnWidth: 300,
    gutter: 10,
    percentPosition: true,
    horizontalOrder: true,
    stagger: 30,
    transitionDuration: 0.5,
    // disable initial layout
    initLayout: false,
  });

  var msnry = new Masonry(".grid", {
    // options
  });
  // element argument can be a selector string
  //   for an individual element

  useEffect(() => {
    const imgLoad = imagesLoaded(containerRef.current);
    imgLoad.on("always", () => {
      console.log("All images are loaded");
    });
  }, [contextValue.notes]);

  // console.log(showIconsOnHover);

  return (
    <div className=" mb-[200px] ">
      <h1 className="ml-[50px] text-[30px]  mb-[20px]">OTHERS </h1>
      <div
        onClick={() => contextValue.setOpenTextArea(false)}
        className="grid"
        ref={containerRef}
        data-masonry='{ "itemSelector": ".grid-item", 
      "columnWidth": 300  
     }'
      >
        {contextValue?.notes?.length > 0 ? (
          contextValue.notes?.map((note: any) => (
            <div
              onMouseEnter={() => setShowIconsOnHover(!showIconsOnHover)}
              onMouseLeave={() => setShowIconsOnHover(false)}
              className="max-w-[350px] min-w-[250px] h-fit min-h-[170px] border-2 border-[#5F6368] mr-[25px] mb-[25px] py-3 rounded-[10px]"
              key={note._id}
            >
              {overLay ? (
                <div
                  onClick={() => {
                    // e.stopPropagation();
                    setNoteModal(false);
                    setOverLay(false);
                  }}
                  // className="position"
                  className="fixed border-5 border-green-700 z-10 top-0 left-0 h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 "
                ></div>
              ) : (
                ""
              )}
              <ShowNote
                note={note}
                noteModal={noteModal}
                setNoteModal={setNoteModal}
                overLay={overLay}
                setOverLay={setOverLay}
                noteUrlParams={noteUrlParams}
                setNoteUrlParams={setNoteUrlParams}
                showIconsOnHover={showIconsOnHover}
                setShowIconsOnHover={setShowIconsOnHover}
              />
            </div>
          ))
        ) : (
          <div className="empty ">
            <p className="text-[22px] text-center"> You have no Notes </p>
          </div>
        )}
      </div>
    </div>
  );
}
