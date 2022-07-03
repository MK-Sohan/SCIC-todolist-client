import React from "react";

const RemoveCompletetodo = ({ deleteCompleteTodo, refetch }) => {
  const handleDeleteCompletetodo = (id) => {
    fetch(
      `https://infinite-spire-80356.herokuapp.com/removeCompletetodo/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => refetch());
  };
  console.log(deleteCompleteTodo?._id);
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="delete-complete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label
              for="delete-complete-modal"
              class="btn border-none bg-green-500"
            >
              Cancel
            </label>
            <label
              onClick={() => handleDeleteCompletetodo(deleteCompleteTodo?._id)}
              for="delete-complete-modal"
              class="btn border-none  bg-red-600"
            >
              Remove
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveCompletetodo;
