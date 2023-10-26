SELECT 
    name,
    category_name
FROM product p
JOIN product_category_configuration pcc
	ON p.Product_Id = pcc.Product_Id
JOIN product_category pc
	ON pc.Product_Category_Id = pcc.Product_Category_Id
WHERE pc.category_name = "Toys";