"use client";
import Headerbar from "@/components/header/Headerbar";
import Navbar from "@/components/navbar/Navbar";
import Notes from "@/components/notes/Notes";
import Pinned from "@/components/pinned/Pinned";
import ShowNotes from "@/components/showNotes/ShowNotes";

export default function trash() {
  return (
    <div>
      <Headerbar />
      <div>
        <Navbar />
        <div>
          <Notes />
          <div className="my-[50px]">
            <Pinned />
            <div>
              <ShowNotes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
