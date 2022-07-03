import React, { useEffect } from "react";
import { useQuery } from "react-query";

const DeleteModal = ({ deletetodo, refetch }) => {
  const HandleDeleteTodo = (id) => {
    fetch(`https://infinite-spire-80356.herokuapp.com/removetodo/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => refetch());
  };

  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="todo-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are You Shure,You want to Remove this To-Do!
          </h3>
          <p class="py-4"></p>
          <div class="modal-action">
            <label for="todo-delete-modal" class="btn btn-success">
              Cancel
            </label>
            <label
              onClick={() => HandleDeleteTodo(deletetodo?._id)}
              for="todo-delete-modal"
              class="btn btn-error"
            >
              Remove
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
