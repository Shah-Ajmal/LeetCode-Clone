// import { PrismaClient } from "@prisma/client";
// import { PrismaNeon } from "@prisma/adapter-neon";
// import pg from "pg";

// const globalForPrisma = globalThis;

// const pool = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// const adapter = new PrismaPg(pool);

// export const db =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     adapter,
//     log: ["query", "info", "warn", "error"],
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = db;
// }

import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const globalForPrisma = globalThis;

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

export const db =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
