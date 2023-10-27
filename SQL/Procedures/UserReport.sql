DELIMITER //

DROP PROCEDURE IF EXISTS GenerateUserReport;

CREATE PROCEDURE GenerateUserReport()
BEGIN
    SELECT user_id, first_name, last_name, email, User_Type
	FROM user;
END //

DELIMITER ;