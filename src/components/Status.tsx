import React from "react";
type statusProps = {
  status: "loading" | "success" | "error";
};
const Status = (props: statusProps) => {
  let message: string;
  const myStatus = props.status;
  switch (myStatus) {
    case "loading":
      message = "Loading...";
      break;
    case "success":
      message = "Data fetched successfully";
      break;
    case "error":
      message = "Error fetching data";
      break;
    default:
      message = "no data";
  }
  return (
    <div>
      <h2> {`status => ${message}`}</h2>
    </div>
  );
};

export default Status;
