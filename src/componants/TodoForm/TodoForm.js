import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const TodoForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    console.log(name, description);
    const info = {
      name: name,
      description: description,
    };
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
    <div className="pt-20">
      <h1 className="text-center text-4xl text-gray-600 mb-5 font-bold">
        Add Your Task Here
      </h1>
      <div className="flex  justify-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Todo Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
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
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  required
                  type="text"
                  placeholder="Description"
                  className="textarea textarea-info w-full max-w-xs"
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
