import { publicProcedure, router } from "./trpc";
import prisma from "@/lib/prisma";

// Create an instance of trpc router as appRouter
// Define your APIs
export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    const pokemon = await prisma.pokemon.findUnique({
      where: {
        name: 'Charizard',
      }
    })

    return pokemon;
  }),
});

export type AppRouter = typeof appRouter;