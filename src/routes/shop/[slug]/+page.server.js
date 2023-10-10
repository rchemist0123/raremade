// @ts-nocheck
import { error } from '@sveltejs/kit';
import { items, changeWish } from '$lib/server/items.js';

// @ts-ignore
export function load({ params, cookies }){
  const item = items.find((item)=> item.slug === params.slug);
  const id = cookies.get("userid");
  if(!item) throw error(404);
  return { item }
}

export const actions = {
  change: async ({ request }) => {
    const data = await request.formData();
    const slug_id = data.get('slug');
    
    const target_item = items.find(item=>item.slug === slug_id);
    target_item.wishlist = target_item.wishlist === true ? false : true;
  }
}
