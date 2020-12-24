import React, { useEffect } from "react";

const NotFound = (props) => {
  useEffect(() => {
    console.log(props.match.params);
    console.log(props.location.pathname.split("/"));
  });
  return (
    <React.Fragment>
      <div>jbjkjekjewbfjwekfjwekjfwejfkew</div>
    </React.Fragment>
  );
};

export default NotFound;
