-- Change the delimiter
DELIMITER //
DROP PROCEDURE IF EXISTS GenerateUserReport;

-- Create the procedure
CREATE PROCEDURE GenerateUserReport()
BEGIN
    SELECT
        u.user_id,
        u.first_name,
        u.last_name,
        u.email,
        u.User_Type,
        a.House_Number,
        a.Street_Number,
        a.Address_Line_1,
        a.Address_Line_2,
        a.City,
        a.Region,
        a.Postal_Code
    FROM user u
    JOIN user_address ua ON u.User_Id = ua.User_Id
    JOIN address a ON ua.Address_Id = a.Address_Id
    WHERE ua.Is_Default = 1;
END //

-- Reset the delimiter to semicolon
DELIMITER ;
