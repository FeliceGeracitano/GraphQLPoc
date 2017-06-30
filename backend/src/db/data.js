const cartData = {
  id: 'cart-xx-id-0',
  total: 12345,
  description: 'Description on Cart item',
  currency: '€',
  products: [
    {
      id: 'product-xx-id-0',
      qty: 2
    },
    {
      id: 'product-xx-id-1',
      qty: 3
    }
  ]
};

const productsData = Array(10).fill(0).map((el, index) => ({
  id: `product-xx-id-${index}`,
  imgUrl: `www.google.com/${index}`,
  description: `product description ${index}`
}));

module.exports = {
  cartData,
  productsData
};
