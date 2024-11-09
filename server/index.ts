import { publicProcedure, router } from "./trpc";
import prisma from "@/lib/prisma";
import { z } from "zod";

// Create an instance of trpc router as appRouter
// Define your APIs
export const appRouter = router({
  getPokemon: publicProcedure.input(z.string())
  .query(async (opts) => {
    const pokemon = await prisma.pokemon.findUnique({
      where: {
        name: opts.input,
      }
    })
    return pokemon;
  }),
});

export type AppRouter = typeof appRouter;