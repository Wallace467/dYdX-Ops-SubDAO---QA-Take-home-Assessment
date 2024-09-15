import { FullConfig } from "@playwright/test";
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

async function globalSetup(config: FullConfig) {
  const nodeEnv = process.env.NODE_ENV || "testnet";
  const envFilePath = resolve(process.cwd(), `.env.${nodeEnv}`);

  // Load environment variables from the .env file
  dotenvConfig({ path: envFilePath });
}

export default globalSetup;
