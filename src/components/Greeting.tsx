import React from "react";
type person = {
  name: string;
  message?: number; //question mark help to fix err if we don't have message
  isLoggedIn: boolean;
};
const Greeting = (props: person) => {
  const { message = 0 } = props; //we changed message bcs we didn't pass it as props and we gave it default value but if we passed props we can have the original one that passed as props
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `hi my name is ${props.name} you have ${message} unread message`
          : `you need to log in or create new account`}
      </h2>
    </div>
  );
};

export default Greeting;
