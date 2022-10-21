import React from "react";
type myList = { personsList: { firstName: string; lastName: string }[] };
const PersonsList = (props: myList) => {
  return (
    <div>
      {props.personsList.map((x) => (
        <h1 key={x.firstName}>
          {x.firstName} {x.lastName}
        </h1>
      ))}
    </div>
  );
};

export default PersonsList;
