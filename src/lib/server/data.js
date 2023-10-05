// @ts-nocheck
export const items = [
  {
    slug: 'Button 1',
    price: 100,
    description: 'aa',
    photo_dir:"/button_1.png",
    wishlist: false,
    cart: false,
    cart_num: 0
  },
  {
    slug: 'Button 2',
    price: 200,
    description: 'aa',
    photo_dir:"/button_2.png",
    wishlist: true,
    cart: false,
    cart_num: 0
  },
  {
    slug: 'Button 3',
    price: 300,
    description: 'aa',
    photo_dir:"/button_3.png",
    wishlist: false,
    cart: false,
    cart_num: 0
  },
  {
    slug: 'Button 4',
    price: 400,
    description: 'aa',
    photo_dir:"/button_4.png",
    wishlist: true,
    cart: false,
    cart_num: 0
  }
]

export function changeWish(data){
  console.log(data)
}