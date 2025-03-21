function solve(initial, orders) {
  let stock = new Map();

  for (let i = 0; i < initial.length; i += 2) {
    let key = initial[i];
    let value = Number(initial[i + 1]);

    stock.set(key, value);
  }

  for (let i = 0; i < orders.length; i += 2) {
    let key = orders[i];
    let value = Number(orders[i + 1]);

    if (!stock.has(key)) {
      stock.set(key, 0);
    }

    let current = stock.get(key);
    stock.set(key, current + value);
  }

  for (let [key, value] of stock) {
    console.log(`${key} -> ${value}`);
  }
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

solve(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);

/*
You will receive two arrays. The first array represents the current stock of the local store. 
The second array will contain products that the store has ordered for delivery.

The following information applies to both arrays:
Every even index will hold the name of the product and every odd index will hold the quantity of that product. 
The second array could contain products that are already in the local store. 
If that happens increase the quantity for the given product. 
You should store them into an object, and print them in the following format: (product -> quantity)

All of the arrays’ values will be strings.
*/
