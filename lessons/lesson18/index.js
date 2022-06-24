let shoppingList = [
  {
    item: "apple",
    amount: 3,
    purchased: true,
    productprice: 2,
    totalprice() {
      return shoppingList.amount * shoppingList.productprice;
    },
  },
  {
    item: "peach",
    amount: 1,
    purchased: true,
    productprice: 3,
    totalprice: 3,
  },
  {
    item: "orange",
    amount: 2,
    purchased: false,
    productprice: 1,
    totalprice: 2,
  },
  {
    product: "chips",
    amount: 2,
    purchased: false,
    productprice: 2,
    totalprice: 4,
  },
  {
    item: "fries kg",
    amount: 5,
    purchased: true,
    productprice: 5,
    totalprice: 25,
  },
  {
    item: "charger",
    amount: 1,
    purchased: false,
    productprice: 15,
    totalprice: 15,
  },
];

console.log(shoppingList);

//const ToBuyOnTop = shoppingList.sort(function (a, b) {return a.purchased - b.purchased});

//console.log(ToBuyOnTop);

//const NotPurchasedProducts = shoppingList.filter(val => val.purchased === false);

//console.log(NotPurchasedProducts);

// спроба не вдалась
/* function purchaseStatus(product) {
  const productPurchase = shoppingList.map((item) => {
    if (item.name === product) return (item.status = true);
  });
}

purchaseStatus("chips");
console.log(shoppingList); */
