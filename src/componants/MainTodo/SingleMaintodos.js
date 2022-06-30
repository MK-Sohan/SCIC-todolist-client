import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck, faAdd } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SingleMaintodos = ({ value }) => {
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const handleCheck = () => {
    setCheck((value) => !value);
    const info = {
      name: value.name,
      description: value.description,
    };

    fetch("http://localhost:5000/completetodo", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    toast.success("Todo Added");
  };
  const handleEdit = (id) => {
    navigate("/edittodo/" + id);
  };
  return (
    <div className=" mr-5 mb-10 mt-7">
      <div class="card w-96 bg-gray-100 shadow-xl">
        <div className="flex justify-between items-center ">
          <div
            onClick={() => handleEdit(value._id)}
            class="badge badge-success gap-2 cursor-pointer ml-1 mt-1 text-balck hover:text-white font-bold "
          >
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Edit
          </div>
          {check ? (
            <button
              disabled
              onClick={handleCheck}
              className="btn btn-xs mr-2 bg-green-700"
            >
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </button>
          ) : (
            <button onClick={handleCheck} className="btn btn-xs mr-2">
              <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
            </button>
          )}
        </div>

        <div class="card-body">
          <h2 class="card-title">
            <span className="text-green-400">To-Do Name:</span>
            {value.name}
          </h2>
          <p>
            {" "}
            <span className="text-green-400 font-bold">Description:</span>{" "}
            {value.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMaintodos;