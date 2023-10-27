import React from "react";

function DashBoardButton(props) {
  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    marginBottom: 5,
    marginRight: 10,
    height: 37,
    justifyContent: "left",
    width: "100%",
    color: "white",
    fontSize: 18,
    display:"flex",
   
  };
  const iconStyle = {
    color: "white",
     
  };

  const buttonContainer = {
    display: "flex",
    flexDirection: "row",
    width:500,
    alineitems:"center",
    gap:10,
    marginBottom:10,
  };

  return (
    <div style={buttonContainer}>
      <props.icon style={iconStyle} />
      <button style={buttonStyle}>{props.buttonName}</button>
    </div>
  );
}

export default DashBoardButton;
