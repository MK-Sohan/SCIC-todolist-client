import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const TodoForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  console.log(selected);
  const handleSubmit = (e) => {
    console.log(name, description);
    const info = {
      name: name,
      description: description,
      selecte: format(selected, "PP"),
    };
    console.log(info);
    fetch("https://infinite-spire-80356.herokuapp.com/postTodo", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();

        handleSubmit();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [name, description]);
  return (
    <div className=" ">
      <h1 className="text-center text-4xl text-gray-600 mb-5 font-bold ">
        Add Your Task
      </h1>
      <div className="flex  flex-col lg:flex-row justify-center items-center  lg:gap-32 p-10">
        <div className="  flex  justify-center">
          <div className="card w-[350px] lg:w-96 lg:mt-12 bg-base-100 shadow-xl  ">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold ">Todo Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs ">
                  <label className="label ">
                    <span className="label-text ">Name</span>
                  </label>
                  <input
                    required
                    type="name"
                    placeholder="Task Name"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text ">Description</span>
                  </label>
                  <textarea
                    required
                    type="text"
                    placeholder="Description"
                    className="textarea textarea-info w-full max-w-xs"
                    onChange={(event) => setDescription(event.target.value)}
                  />
                  <p className="font-bold text-xl text-green-500 mt-5">
                    Date: <span className="text-black">{footer}</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col  justify-center items-center lg:mt-0 ">
          <h1 className="text-2xl text-center mb-5 font-bold ">
            Please Pick A Date
          </h1>
          <div className="p-3 bg-gray-100 shadow-xl rounded-sm ">
            <DayPicker
              className="p-5"
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={footer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
