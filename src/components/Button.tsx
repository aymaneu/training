import React from "react";
type buttonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button = (props: buttonProps) => {
  return <button onClick={props.handleClick}>click</button>;
};

export default Button;
