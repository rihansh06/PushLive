import {prisma} from './db.js';
console.log(await prisma.users.findMany());
await prisma.$disconnect();