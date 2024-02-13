// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// axios.defaults.withCredentials = true;

// export default function StorePickupDeliveryaved() {
//   const [ID, setId] = useState('');

//   useEffect(() => {
//     // Define the waiting time (e.g., 2000 milliseconds, which is 2 seconds)
//     const waitingTime = 3000;

//     // Use setTimeout to delay the Axios request
//     setTimeout(() => {
//       axios
//         .get("http://localhost:3005/user/getSession2")
//         .then((res) => {
//           console.log("Response Data:", res.data.DelResult);
//           setId(res.data.DelResult);
//           console.log("ID: ", res.data.DelResult);
//         })
//         .catch((err) => console.log(err));
//     }, waitingTime); // Execute the request after the waiting time
//   }, []);

//   const divStyle = {
//     backgroundColor: "darkgreen",
//     color: "white",
//     padding: "20px",
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "column", // Center content vertically
//     justifyContent: "center", // Center content horizontally
//     height: "100vh", // Set height to full viewport height
//   };

//   const tickStyle = {
//     fontSize: "200px",
//     marginBottom: "10px", // Add space below the tick
//   };

//   const linkStyle = {
//     textDecoration: "underline", // Add underline to the link
//     color: "yellow",
//     marginTop: "30px", // Add space above the link
//     fontSize: "20px",
//   };

//   const text1 = {
//     fontSize: "50px",
//   };

//   return (
//     <div style={divStyle}>
//       <div style={tickStyle}>&#10004;</div>
//       <div style={text1}>Your order has been placed.</div>
//       <div><h1>Estimated Delivery Days for the order: {ID} </h1></div>
//       <Link to="/pages/CustomerHomePage" style={linkStyle}>
//         Go back to the front page
//       </Link>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

axios.defaults.withCredentials = true;

export default function DeliveryOrderSaved() {
  const [ID, setId] = useState(null); // Initialize ID as null to indicate loading
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Define the waiting time (e.g., 3000 milliseconds, which is 3 seconds)
    const waitingTime = 3000;

    // Use setTimeout to delay the Axios request
    setTimeout(() => {
      axios
        .get("http://localhost:3005/user/getSession2")
        .then((res) => {
          console.log("Response Data:", res.data.DelResult);
          setId(res.data.DelResult);
          console.log("ID: ", res.data.DelResult);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          // Set loading to false when the request is complete
          setLoading(false);
        });
    }, waitingTime); // Execute the request after the waiting time
  }, []);

  const divStyle = {
    backgroundColor: "darkgreen",
    color: "white",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column", // Center content vertically
    justifyContent: "center", // Center content horizontally
    height: "100vh", // Set height to full viewport height
  };

  const tickStyle = {
    fontSize: "200px",
    marginBottom: "10px", // Add space below the tick
  };

  const linkStyle = {
    textDecoration: "underline", // Add underline to the link
    color: "yellow",
    marginTop: "30px", // Add space above the link
    fontSize: "20px",
  };

  const text1 = {
    fontSize: "50px",
  };

  return (
    <div style={divStyle}>
      {loading ? ( // Display loading message or spinner when loading is true
        <div>Loading...</div>
      ) : (
        <>
          <div style={tickStyle}>&#10004;</div>
          <div style={text1}>Your order has been placed.</div>
          {ID !== null && ( // Check if ID is not null before displaying it
            <div>
              <h1>Estimated Delivery Days for the order: {ID}</h1>
            </div>
          )}
          <Link to="/pages/CustomerHomePage" style={linkStyle}>
            Go back to the front page
          </Link>
        </>
      )}
    </div>
  );
}
