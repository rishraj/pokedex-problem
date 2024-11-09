import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "@/server";

// create trpc react client
export const trpc = createTRPCReact<AppRouter>({});