interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  let expensiveProduct: Product = products[0];

  for (let product of products) {
    if (product.price > expensiveProduct.price) expensiveProduct = product;
  }

  return expensiveProduct;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 250 },
  { name: "Bag", price: 50 },
];

console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }
