const Product = require("../models/productModels");
const productObj = new Product();

module.exports = {
    getCarouselImages: async (req, res) => {
        try {
            const ImageResult = await productObj.getCarouselImages();
            console.log(ImageResult);
            if (ImageResult.length > 0) {
                const ImageResultJSON = JSON.stringify(ImageResult);
                console.log(ImageResultJSON);
                res.status(200).json(ImageResultJSON);
            } else {
                res.status(404).json({
                    message: "No images found",
                });
            }
        } catch (err) {
            console.error(err); // Log the specific error for debugging
            res.status(500).json({
                message: "An error occurred",
                error: err.message,
            });
        }
    },
}

     