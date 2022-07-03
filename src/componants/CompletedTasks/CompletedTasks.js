import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import RemoveCompletetodo from "./RemoveCompletetodo";
import SingleCheckedtodo from "./SingleCheckedtodo";
const CompletedTasks = () => {
  const [deleteCompleteTodo, setDeleteCompleteTodo] = useState(null);
  const {
    data: checkedtodo,
    isLoading,
    refetch,
  } = useQuery("checked", () =>
    fetch("https://infinite-spire-80356.herokuapp.com/completedTasks").then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="p-2 lg:h-screen lg:p-20">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-center text-4xl text-gray-600 font-bold mb-5 mt-20">
          Your Completed To-Do Tasks List
        </h1>
        <div className="grid grid-cols-1  lg:grid-cols-4 ">
          {checkedtodo?.map((value) => (
            <SingleCheckedtodo
              value={value}
              setDeleteCompleteTodo={setDeleteCompleteTodo}
            ></SingleCheckedtodo>
          ))}
        </div>
      </div>
      <RemoveCompletetodo
        deleteCompleteTodo={deleteCompleteTodo}
        refetch={refetch}
      ></RemoveCompletetodo>
    </div>
  );
};

export default CompletedTasks;
