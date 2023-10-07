import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { DiscordGuild } from "~/types/DiscordGuild";

export const discord = createTRPCRouter({
  getOwnedGuilds: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      const account = await ctx.db.account.findFirst({
        where: {
          userId: input.userId,
          provider: "discord",
        },
      });

      const res = await fetch("https://discord.com/api/v10/users/@me/guilds", {
        headers: {
          Authorization: "Bearer " + account?.access_token,
        },
      });

      const userGuildsJson = await res.json();
      const userGuilds: DiscordGuild[] = [...userGuildsJson];
      const userOwnedGuilds = userGuilds.filter((guild) => guild.owner);

      return userOwnedGuilds;
    }),
});
