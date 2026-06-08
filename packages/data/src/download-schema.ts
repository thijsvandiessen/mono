import "dotenv/config";
import { createWriteStream } from "node:fs";
import { spawn } from "node:child_process";

const token = process.env.DATOCMS_API_TOKEN;
const environment = process.env.DATOCMS_ENVIRONMENT;
const outputFile = "./src/generated/schema.graphql";

if (!token) {
  throw new Error("Missing DATOCMS_API_TOKEN in .env");
}

const args = [
  "graph",
  "introspect",
  "https://graphql.datocms.com/",
  "-H",
  `Authorization: Bearer ${token}`,
  "-H",
  "X-Exclude-Invalid: true",
];

if (environment) {
  args.push("-H", `X-Environment: ${environment}`);
}

const output = createWriteStream(outputFile);

const rover = spawn("rover", args, {
  stdio: ["ignore", "pipe", "inherit"],
  shell: process.platform === "win32",
});

rover.stdout.pipe(output);

rover.on("close", (code) => {
  if (code === 0) {
    console.log(`DatoCMS schema written to ${outputFile}`);
  } else {
    process.exitCode = code ?? 1;
  }
});
