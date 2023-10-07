exports.get404 = (req, res, next) => {
    const error = new error ("Not found");
    error.status = 404;
    next(error);
}

exports.get500 = (error, req, res, next) => {
    res.status(error.status || 500);
    console.log("500 error");
    res.json({
        error: {
            message: error.message,
        },
    })
}

// export const errorUtils = {
//     getError: (error) => {
//       let e = error;
//       if (error.response) {
//         e = error.response.data;                   // data, status, headers
//         if (error.response.data && error.response.data.error) {
//           e = error.response.data.error;           // my app specific keys override
//         }
//       } else if (error.message) {
//         e = error.message;
//       } else {
//         e = "Unknown error occured";
//       }
//       return e;
//     },
//   };