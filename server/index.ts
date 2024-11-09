import { publicProcedure, router } from "./trpc";
import prisma from "@/lib/prisma";
import { z } from "zod";

/**
 * Create an instance of trpc router as appRouter
 * APIs defined here
 */
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

  getPokemons: publicProcedure.input(z.array(z.string()))
  .query(async (opts) => {
    const pokemons = await prisma.pokemon.findMany({
      where: {
        name: {in: opts.input},
      }
    })
    return pokemons;
  }),

  getTypePokemons: publicProcedure.input(z.string())
  .query(async (opts) => {
    const typePokemons = await prisma.pokemon.findMany({
      where: {
        type: {
          equals: opts.input,
        },
      },
    })
    return typePokemons;
  }),
});

export type AppRouter = typeof appRouter;