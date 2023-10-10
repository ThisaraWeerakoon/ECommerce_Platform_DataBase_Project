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

