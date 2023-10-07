import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { discord } from "./routers/discord";
import { stripes } from "./routers/stripes";
import { userRouter } from "./routers/users";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  discordapi: discord,
  stripe: stripes,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
