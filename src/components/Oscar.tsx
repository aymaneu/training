import React from "react";
type childProps = {
  children: React.ReactNode;
};
const Oscar = (props: childProps) => {
  return <div>{props.children}</div>;
};

export default Oscar;
