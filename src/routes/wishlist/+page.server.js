import { items } from '$lib/server/items.js';

export function load(){
  const wished_itmes = items.filter(item=>item.wishlist === true);
  return {
    items: wished_itmes
  }
  // return {
  //   summaries: items.map((item)=>({
  //     name: item.slug,
  //     price: item.price,
  //     dir: item.photo_dir,
  //     favorite: item.wishlist
  //   }))
  // };
}