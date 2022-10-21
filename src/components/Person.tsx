import React from "react";
type moreInfo = { personName: { firstName: string; lastName: string } };
const Person = (props: moreInfo) => {
  return (
    <div>
      {props.personName.firstName} {props.personName.lastName}
    </div>
  );
};

export default Person;
