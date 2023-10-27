UPDATE variant
SET SKU = 1002,
	Weight = 160
WHERE variant_Id = 2


-- Update user address Is_default to 1
UPDATE user_address SET Is_Default = 1 
WHERE user_id IN (1, 2, 3, 4);

UPDATE user_address SET Is_Default = 0
WHERE Address_Id = 2