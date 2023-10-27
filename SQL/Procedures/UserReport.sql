DELIMITER //

CREATE PROCEDURE GenerateUserReport()
BEGIN
    SELECT user_id, first_name, last_name, email
    FROM users;
END //

DELIMITER ;