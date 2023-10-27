DELIMITER //

CREATE PROCEDURE CalculateCartTotalPrice(IN User_Id INT, OUT totalPrice DECIMAL(10, 2))
BEGIN
    DECLARE cartTotal DECIMAL(10, 2);
    
    -- Calculate total price of items in the cart for the given customer
    SELECT SUM(v.price * ci.cart)
    INTO cartTotal
    FROM cart_item ci
    JOIN variant v ON p.product_id = oi.product_id
    JOIN cart c ON 
    WHERE oi.User_Id = customerID;
    
    -- Set the output parameter with the calculated total price
    SET totalPrice = cartTotal;
END //

DELIMITER ;
