// @ts-nocheck
import * as db from '$lib/server/user.js';
import { redirect } from '@sveltejs/kit';
export function load({ cookies }) {
  const id = cookies.get("userid");

  if(!id) {
    cookies.set('userid', crypto.randomUUID(), {path:'/'});
  }

  return {
    users: db.getUsers(id) ?? []
  }
}

export const actions = {
  // create, delete: action
  create: async ({ cookies, request }) => {
    const data = await request.formData();
    db.addUser(cookies.get('userid'), data.get('email'), data.get('name'), data.get('phone'), data.get('password'));
    throw redirect(303, '/');
  },

  delete: async ({ cookies, request }) => {
    const data = await request.formData();
  }
}

