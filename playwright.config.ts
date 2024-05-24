import { defineConfig, devices } from "@playwright/test";
import {
  createReplayReporterConfig,
  devices as replayDevices,
} from "@replayio/playwright";

import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
  },

  reporter: [
    // The playwright.yml workflow will upload the replays in CI
    // so that they can be public by default.
    createReplayReporterConfig({
      upload: !process.env.CI,
      apiKey: process.env.REPLAY_API_KEY,
    }),
    ["line"],
  ],

  projects: [
    {
      name: "replay-chromium",
      use: { ...replayDevices["Replay Chromium"] },
    },
  ],
});
