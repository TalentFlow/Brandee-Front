import React, { useEffect, useState } from "react";

const Empty = (props) => {
  return (
    <React.Fragment>
      <div
        className="container"
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        <h6>{`Your ${props.data} is Currently Empty`}</h6>
      </div>
    </React.Fragment>
  );
};

export default Empty;
