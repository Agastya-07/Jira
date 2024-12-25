// this file will help us to query the database

import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production'){
    globalThis.prisma = db;
}

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.

// Only runs in development environment (not in production)
// Stores the Prisma instance globally to be reused across hot reloads

// Why this pattern is important:

// Hot Reload Problem: During development, Next.js hot reloads can create multiple Prisma instances, causing too many database connections
// Memory Usage: Creating multiple unnecessary Prisma instances can lead to memory leaks
// Connection Limits: Most databases have connection limits, and creating too many connections can cause issues