import { publicProcedure, router } from "./trpc";

// Create an instance of trpc router as appRouter
// Define your APIs
export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30, 40, 50];
  }),
});

export type AppRouter = typeof appRouter;