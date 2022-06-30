import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const Calender = () => {
  const [selected, setSelected] = useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-100 shadow-xl rounded-sm ">
        <DayPicker
          className="p-10"
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
        />
      </div>
    </div>
  );
};

export default Calender;
