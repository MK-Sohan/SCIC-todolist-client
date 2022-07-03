import React from "react";

const SingleCheckedtodo = ({ value, setDeleteCompleteTodo }) => {
  return (
    <div className=" lg:mr-5 mb-10 mt-7 ">
      <div class="card card-side bg-gray-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            <span className="text-green-500 ">To-Do Name: </span> {value.name}
          </h2>
          <p>
            <span className="text-green-500 ">Details:</span>{" "}
            {value.description}
          </p>
          <label
            onClick={() => setDeleteCompleteTodo(value)}
            for="delete-complete-modal"
            class="btn  btn-sm bg-red-600 border-none w-24 mt-2"
          >
            Remove
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleCheckedtodo;
