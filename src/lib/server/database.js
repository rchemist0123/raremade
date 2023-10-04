// @ts-nocheck
const db = new Map();

export function getItems(userid){
  if (!db.get(userid)){
    db.set(userid,[{
      id: crypto.randomUUID(),
      description: 'temp',
      done: false
    }]);
  }
  return db.get(userid);
}

export function createItem(userid, description){
  const items = db.get(userid);
  
  items.push({
    id: crypto.randomUUID(),
    description,
    done: false
  })
}

export function deleteItem(userid, itemid){
  const items = db.get(userid)
  const index = items.findIndex((todo)=> todo.id === itemid);

  if (index !== -1) {
    items.splice(index,1);
  }
}