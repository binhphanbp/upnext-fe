import { z } from "zod";

import { publicEnv } from "./public";

const serverEnvSchema = z.object({
  APP_ENV: z
    .enum(["development", "test", "staging", "production"])
    .default("development"),
  INTERNAL_API_URL: z.string().url().optional(),
});

export const serverEnv = {
  ...publicEnv,
  ...serverEnvSchema.parse({
    APP_ENV: process.env.APP_ENV,
    INTERNAL_API_URL: process.env.INTERNAL_API_URL,
  }),
};
