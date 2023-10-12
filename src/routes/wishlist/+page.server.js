// @ts-nocheck
import { items } from '$lib/server/items.js';

export function load(){
  const wished_itmes = items.filter(item=>item.wishlist === true);
  return {
    items: wished_itmes
  }
}

export const actions = {
  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    console.log(id);
    const target_item = items.find(item=>item.slug === id);
    console.log(target_item);
    target_item.wishlist = false;
     
  }
}