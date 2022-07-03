import React from "react";
import useQuearyhook from "../hooks/useQuearyhook";

const Compo = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const { data: posts } = useQuearyhook(url, "datafch");
  console.log(posts);
  return (
    <div>
      <h1>another</h1>
    </div>
  );
};

export default Compo;
