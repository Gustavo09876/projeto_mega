import {PrismaClient} from '@prisma/client'

declare global {
  var Prisma: PrismaClient | undefined
}

const db = globalThis.Prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {

}

export default db

