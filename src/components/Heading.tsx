import React from "react";
type childrenProps = { children: string };
const Heading = (props: childrenProps) => {
  return <h2>{props.children}</h2>;
};

export default Heading;
