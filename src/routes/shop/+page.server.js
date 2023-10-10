import { items } from '$lib/server/items.js';

export function load(){
  return {
    summaries: items.map((item)=>({
      name: item.slug,
      price: item.price,
      dir: item.photo_dir,
      favorite: item.wishlist
    }))
  };
}