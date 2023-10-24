import React from "react";
import PersonIcon from "@mui/icons-material/Person";

function AdminPanelHeader() {
  const headerStyle = {
    backgroundColor: "#123042",

    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    height: 50,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  };

  const leftContentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const rightContentStyle = {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    gap: 10,
  };

  const nameStyle = {
    color: "#fff",
    marginRight: 20,
    marginBottom: 5,
    marginTop: 15,
  };

  const buttonStyle = {
    backgroundColor: "teal",
    color: "#fff",
    border: "none",
    padding: "8px 13px",
    cursor: "pointer",
    marginBottom: 5,
    marginRight: 10,
    height: 32,
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    fontSize: 40,
    paddingBottom: 3,
  };
  // const titleStyle = {
  //   fontFamily: "Cursive",
  //   fontWeight: "bold",
  //   fontSize: 20,
  //   paddingLeft: 10,
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",

  // };
  const panelName = {
    fontFamily: "cursive",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 10,
  };

  return (
    <header style={headerStyle}>
      <div style={leftContentStyle}>
        <h1 style={panelName}>ADMIN PANEL</h1>
        {/* <h2 style={titleStyle}>EAGLE SERVICE</h2> */}
      </div>
      <div style={rightContentStyle}>
        <p style={nameStyle}>Ashen Sandeep</p> {/* Add the name here */}
        <PersonIcon style={iconStyle} />
        <button style={buttonStyle}>Profile</button>{" "}
        {/* Add the Profile button here */}
      </div>
    </header>
  );
}

export default AdminPanelHeader;
