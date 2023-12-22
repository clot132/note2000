import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiPlus, BiSave } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

type Props = {};

const CreateLabel = (props: any) => {
  const [labelInput, setLabelInput] = useState<any>("");
  const saveLabel = async (e: any) => {
    e.preventDefault();
    const labelObject = {
      _id: props?.clickedNote?._id,
      label: labelInput,
    };
    try {
      await axios
        .post(`http://localhost:5000/api/notes/add-label`, labelObject)
        .catch((err) => console.log(err));
      toast.success("Label Saved");
      props?.setOpenLabelModal(false);
    } catch (error) {
      console.log(error);
      toast.error("Error saving label");
    }
  };
  return (
    <div className="p-4">
      <span
        className="absolute top-[5px] left-[7px] cursor-pointer p-2 hover:text-[#525355] "
        onClick={() => props?.setOpenLabelModal(false)}
      >
        {<FaTimes />}{" "}
      </span>
      <h1>Label Note </h1>
      <form onSubmit={saveLabel}>
        <input
          onChange={(e: any) => setLabelInput(e.target.value)}
          type="text"
          className="bg-transparent outline-none border-none"
          placeholder="Enter label name"
        />
        <button className="cursor-pointer" type="submit">
          {<BiPlus />}{" "}
        </button>
      </form>
    </div>
  );
};

export default CreateLabel;
