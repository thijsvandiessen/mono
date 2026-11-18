import type { Client } from "@datocms/cma-client-node";
import fs from "node:fs/promises";
import path from "node:path";
import { modelsDir } from "./modelsDir.js";

export const downloadModels = async (client: Client) => {
  const { data } = await client.itemTypes.rawList();

  console.log("Saving models...");

  await fs.mkdir(modelsDir, { recursive: true });

  for (const itemType of data) {
    const fileName = `${itemType.attributes.name}.json`;
    await fs.writeFile(path.join(modelsDir, fileName), JSON.stringify(itemType));
    console.log(`Saved ${fileName}`);
  }
};
