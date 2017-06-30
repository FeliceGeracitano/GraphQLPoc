const cartData = {
  id: 'cart-xx-id-0',
  description: 'Description on Cart item',
  currency: '€',
  products: [
    {
      id: 'product-xx-id-0',
      qty: 4
    },
    {
      id: 'product-xx-id-1',
      qty: 3
    }
  ]
};

const productsData = Array(10).fill(0).map((el, index) => ({
  id: `product-xx-id-${index}`,
  name: `name-xx-id-${index}`,
  imgUrl: `www.google.com/${index}`,
  description: `product description ${index}`,
  productImagesId: `product-images-xx-${index}`,
  price: 10,
}));

const productsImagesData = Array(10).fill(0).map((el, index) => ({
  id: `product-images-xx-${index}`,
  meta: 'meta',
  description: `product Image description ${index}`,
  urls: [
    `www.google.com/images${index}`,
    `www.google.com/images${index}`,
    `www.google.com/images${index}`,
    `www.google.com/images${index}`
  ]
}));

module.exports = {
  cartData,
  productsData,
  productsImagesData
};
