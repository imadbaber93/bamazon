var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user:"root",
	password: "root",
	database:"bamazon"
});

//function availableProducts(){		
connection.query('SELECT item_id,product_name,price FROM products WHERE stock_quantity > 0', function(err,res){
	if (err) throw err;
	console.log('\nShowing all available products: ');
	for (var i=0;i<res.length;i++){
		console.log('\n Id: ' + res[i].item_id + ' | Product: ' + res[i].product_name + ' | Price: $' + res[i].price);
	}
	//connection.end();
});

/*}
availableProducts();*/

function transactions(){
inquirer.prompt([
	{
		message: 'What is the ID of the product you would like to buy?',
		name: 'id'
	},
	{
		message: 'How many of units would you like to buy?',
		name: 'quantity'
	}
	])
	.then(function(inquirerResponse){
		connection.query('SELECT * FROM products', function(err,res){
			if (err) throw err;
			for (var i=0;i<res.length;i++){
				if (inquirerResponse.id == res[i].item_id){
					if (res[i].stock_quantity - inquirerResponse.quantity < 0){
						console.log('Insufficient quantity!');
						transactions();
					}
					else{
						 connection.query(
							"UPDATE products SET ? WHERE ?",
							[
								{
									stock_quantity: res[i].stock_quantity - inquirerResponse.quantity
								},
								{
									item_id: inquirerResponse.id
								}
							]);																			
						console.log("The total cost of your purchase is: $" + res[i].price * inquirerResponse.quantity);
						console.log('---------------');
						//console.log(res[i].product_name + ' now has a new quantity of ' + res[i].stock_quantity);	
						transactions();					
					}
				}
			}	
		})		
	})
}
transactions();