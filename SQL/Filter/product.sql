SELECT
    v.SKU,
    p.Name AS product,
    pc.Category_Name,
    v.Weight,
    v.Quantity
FROM
    product p
INNER JOIN product_category_configuration pcc ON p.Product_Id = pcc.Product_Id
INNER JOIN product_category pc ON pcc.Product_Category_Id = pc.Product_Category_Id
INNER JOIN variant_type vt ON pc.Product_Category_Id = vt.Product_Category_Id
INNER JOIN variation_option vo ON vt.Variant_Type_Id = vo.Variant_Type_Id
INNER JOIN variation_configuration vc ON vo.Variation_Option_Id = vc.Variation_Option_Id
INNER JOIN variant v ON vc.Variant_Id = v.Variant_Id
-- WHERE
--     p.name = "Samsung S21"
GROUP BY
    p.Name, pc.Category_Name, v.SKU, v.Weight, v.Quantity
LIMIT 0, 1000;
