import Image from "next/image";
import Homepage from "./pages/home/page";
import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import Notes from "@/components/notes/Notes";
import style from "./Home.module.css";
import Headerbar from "@/components/header/Headerbar";
import ShowNotes from "@/components/showNotes/ShowNotes";
import Pinned from "@/components/pinned/Pinned";

export default function Home() {
  return (
    <div>
      <Headerbar />
      <div className={style.container}>
        <Navbar />
        <div className={style.notesContain}>
          <Notes />
          <Pinned />
          <ShowNotes />
        </div>
      </div>
    </div>
  );
}
