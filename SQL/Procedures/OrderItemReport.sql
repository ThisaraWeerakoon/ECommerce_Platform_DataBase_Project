DELIMITER //

DROP PROCEDURE IF EXISTS GenerateOrderItemsReport;

CREATE PROCEDURE GenerateOrderItemsReport()
BEGIN
    SELECT oi.order_item_id,
           p.name, 
           oi.quantity, 
           v.price, 
           (oi.quantity * v.price) AS total_price
    FROM order_item oi
    JOIN variant v ON oi.Variant_Id = v. Variant_Id
	JOIN product p ON v.Product_Id = p. Product_Id;
END //

DELIMITER ;
