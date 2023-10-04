import { items } from './data.js';

export function load(){
  return {
    summaries: items.map((item)=>({
      name: item.slug,
      price: item.price,
      dir: item.photo_dir
    }))
  };
}