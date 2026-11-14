import bcrypt from "bcrypt";

const passHash= await bcrypt.hash("heelo",10);
console.log(passHash);
const passHash2= await bcrypt.hash("heelo",10);
console.log(passHash2);
console.log(await bcrypt.compare("heelo",passHash2));