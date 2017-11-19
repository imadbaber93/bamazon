DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon; 

CREATE TABLE products (

item_id INTEGER(3) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(25) NOT NULL,
department_name VARCHAR(25) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER(3) NOT NULL,
item_on_sale BOOLEAN,
PRIMARY KEY(item_id)
);

INSERT INTO products(product_name,department_name,price,stock_quantity,item_on_sale)
VALUES ("HP laptop", "electronics",500.00,5,TRUE),("Roku TV","electronics",350.50,4,TRUE), ("Acer Moniter","electronics",50.00,8,FALSE), ("Folding table","miscelleanous",25.00,6,false),
 ("2-in-1 couch","furniture",300.00,3,TRUE),("God of War","video games",60.00,10,false),("XBOX 1s","video games","499.99",6,false),
 ("Skittles","miscelleanous",5.00,200,FALSE),("Fridge","kitchen appliances", 250.00,24,true),("coffee table","furniture",50.00,15,false),
 ("Backstreet boys","music",15.00,3,false);
 
 SELECT item_id,product_name,price FROM products WHERE stock_quantity > 0 ; 



