DELIMITER //
CREATE PROCEDURE GetVariantsByOptions(
    IN OptionIds VARCHAR(255),
    IN OptionCount INT
)
BEGIN
    -- Calculate the length of the input array
    SET @OptionCount = LENGTH(OptionIds) - LENGTH(REPLACE(OptionIds, ',', '')) + 1;

    -- Build the dynamic SQL query
    SET @sql = CONCAT(
        'SELECT Variant_Id
         FROM variation_configuration
         WHERE Variation_Option_Id IN (', OptionIds, ')
         GROUP BY Variant_Id
         HAVING COUNT(DISTINCT Variation_Option_Id) = ', @OptionCount
    );

    -- Prepare and execute the dynamic SQL query
    PREPARE dynamic_sql FROM @sql;
    EXECUTE dynamic_sql;
    DEALLOCATE PREPARE dynamic_sql;
END//
DELIMITER;