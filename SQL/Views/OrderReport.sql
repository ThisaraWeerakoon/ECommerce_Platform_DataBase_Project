-- DROP VIEW All_product_In_Store;

-- CREATE VIEW OrderReport AS

SELECT 
	o.Order_Date,
    o.Payment_Method,
    o.Delivery_Method_Name,
    a.House_Number,
    a.Street_Number,
    a.Address_Line_1,
    a.Address_Line_2,
    a.City,
    a.Region,
    a.Postal_Code,
    o.Order_Total
FROM orders o
INNER JOIN cart c ON o.Cart_Id = c.Cart_Id
INNER JOIN user u ON c.User_Id = u.User_Id
INNER JOIN user_address ua ON u.User_Id = ua.User_Id
INNER JOIN address a ON ua.Address_Id = a.Address_Id



-- I comment First 2 code because it will get error
-- But there are in the code