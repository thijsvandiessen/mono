import { LogLevel, buildClient } from "@datocms/cma-client-node";
import { downloadModels } from "./downloadModels.js";

export async function run() {
  if (process.env.FULL_ACCESS_API_TOKEN === undefined) {
    throw new Error("FULL_ACCESS_API_TOKEN is required");
  }

  const client = buildClient({
    apiToken: process.env.FULL_ACCESS_API_TOKEN,
    logLevel: LogLevel.BASIC,
    // Optional: target a sandbox environment instead of the primary one.
    ...(process.env.DATOCMS_ENVIRONMENT ? { environment: process.env.DATOCMS_ENVIRONMENT } : {}),
  });

  await downloadModels(client);

  console.log("Done!");
}
