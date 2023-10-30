-- Inserting products with descriptions
INSERT INTO product (Name, Description, Product_Image) VALUES
('Fisher-Price Rock-a-Stack', 'Classic stacking toy for babies and toddlers. Helps develop fine motor skills and hand-eye coordination.', 'fisher_price.jpg'),
('VTech Sit-to-Stand Learning Walker', 'Interactive learning walker with removable play panel. Features multiple activities and encourages early learning.', 'vtech_walker.jpg'),
('Lamaze Freddie the Firefly', 'Soft, colorful toy with multiple textures. Features a squeaker, crinkly wings, and teether antennae for sensory exploration.', 'freddie_firefly.jpg'),
('Melissa & Doug Wooden Building Blocks', 'Set of durable wooden blocks in various shapes and sizes. Promotes creative play, spatial skills, and imagination.', 'wooden_blocks.jpg'),
('Infantino Textured Multi Ball Set', 'Set of textured balls with different shapes and sizes. Perfect for tactile exploration and sensory stimulation.', 'multi_ball_set.jpg');

-- Inserting variants for product with Product_Id 89 (Cute Stuffed Elephant)
INSERT INTO variant (Product_Id, SKU, Weight, Quantity, Price) VALUES
(15, 'Ele123', 100, 50, 190.99),
(16, 'Rat123', 130, 30, 160.99),
(17, 'Bla123', 200, 20, 220.99),
(18, 'Mob123', 150, 40, 180.99),
(19, 'Teeth123', 90, 60, 150.99);

-- Inserting variant types
INSERT INTO variant_type (Variant_Type_Id, Product_Category_Id, Variation_Name) VALUES 
(25, 13, 'Color'),
(26, 13, 'Size');

-- Inserting variation options
INSERT INTO variation_option (Variant_Type_Id, Variation_Option_Name) VALUES
(26, 'Size Small'),
(26, 'Size Medium'),
(25, 'Red'),
(25, 'Black');

-- Inserting variation configurations
INSERT INTO variation_configuration (Variant_Id, Variation_Option_Id) VALUES
(15, 9), -- Product_Id 89, Size Small, Red
(15, 11), -- Product_Id 89, Size Medium, Black
(16, 10), -- Product_Id 90, Size Small, Red
(16, 12), -- Product_Id 90, Size Medium, Black
(17, 9), -- Product_Id 91, Size Small, Red
(17, 11), -- Product_Id 91, Size Medium, Black
(18, 10), -- Product_Id 92, Size Small, Red
(18, 12), -- Product_Id 92, Size Medium, Black
(19, 9), -- Product_Id 93, Size Small, Red
(19, 11); -- Product_Id 93, Size Medium, Black
