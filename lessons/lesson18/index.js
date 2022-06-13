let shoppingList = [
  { item: "apple", amount: 3, purchased: true, productprice: 2, totalprice: 6 },
  { item: "peach", amount: 1, purchased: true, productprice: 3, totalprice: 3 },
  {
    item: "orange",
    amount: 2,
    purchased: false,
    productprice: 1,
    totalprice: 2,
  },
  {
    item: "chips",
    amount: 2,
    purchased: false,
    productprice: 2,
    totalprice: 4,
  },
  {
    item: "fries kg",
    amount: 5,
    purchased: false,
    productprice: 5,
    totalprice: 25,
  },
  {
    item: "charger",
    amount: 1,
    purchased: true,
    productprice: 15,
    totalprice: 15,
  },
];

console.log(shoppingList);


const ToBuyOnTop = shoppingList.sort(function (a, b) {return a.purchased - b.purchased});

console.log(ToBuyOnTop);

const NotPurchasedProducts = shoppingList.filter(val => val.purchased === false);

console.log(NotPurchasedProducts);