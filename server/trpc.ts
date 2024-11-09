import { initTRPC } from "@trpc/server";

// Initialise a trpc server
const t = initTRPC.create();

export const router = t.router;
export const publicProcedure= t.procedure;