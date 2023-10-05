// @ts-nocheck
const userDB = new Map();

export function getUsers(userid) {
  if (!userDB.get(userid)) {
    userDB.set(userid, [{
      id: crypto.randomUUID(),
      email: 'abc@gmail.com',
      name:"ABC",
      password: '11223344aa!@',
      phone: "01011112222"
    }]);
  }
  return userDB.get(userid); 
}

export function addUser(userid, email, name, password, phone) {
  const users = userDB.get(userid);

  users.push({
    id: crypto.randomUUID(),
    email: email,
    name: name,
    password: password,
    phone: phone
  })
}

export function deleteUser(userid) {
  
}