DELIMITER //

DROP PROCEDURE IF EXISTS GenerateUserReport;

CREATE PROCEDURE GenerateUserReport()
BEGIN
    SELECT user_id, first_name, last_name, email, User_Type
	FROM user u;
    JOIN variant v ON oi.Variant_Id = v. Variant_Id
	  JOIN product p ON v.Product_Id = p. Product_Id;
END //

DELIMITER ;