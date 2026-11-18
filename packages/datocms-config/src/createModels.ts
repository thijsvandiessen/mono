import type { Client } from "@datocms/cma-client-node";
import fs from "node:fs/promises";
import path from "node:path";
import { modelsDir } from "./modelsDir.js";
import { validateAndTransform } from "./validators/itemType.js";

export const createModels = async (client: Client) => {
  const fileNames = (await fs.readdir(modelsDir)).filter((fileName) => fileName.endsWith(".json"));

  for (const fileName of fileNames) {
    const res = await fs.readFile(path.join(modelsDir, fileName), { encoding: "utf8" });
    const itemType = await client.itemTypes.rawCreate(validateAndTransform(res));
    console.log(itemType);
  }
};
