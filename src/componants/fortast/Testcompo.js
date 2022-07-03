import React from "react";
import useQuearyhook from "../hooks/useQuearyhook";

const Testcompo = () => {
  const url = "https://infinite-spire-80356.herokuapp.com/todoList";
  const { data } = useQuearyhook(url, "alltodos");
  console.log(data);

  return (
    <div>
      <h1>hey there</h1>
    </div>
  );
};

export default Testcompo;
