export const generateID = () => {
  let id = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 3; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  id += new Date().getTime().toString().slice(5);
  return id;
};
