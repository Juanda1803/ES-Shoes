import React from "react";
import md5 from "md5";

const Gravatar = () => {
  console.log(md5("Juan"));
  return <h1>Hola</h1>;
};

export default Gravatar;
