import { describe, expect, it } from "vitest";
import { isOfTypeCloudinaryAsset } from "./image.js";

const user = { type: "user", id: "some-user-id" };

// Shape of a poster as returned by the DatoCMS Cloudinary plugin.
const asset = {
  bytes: 214189,
  created_at: "2026-11-17T17:59:26Z",
  created_by: user,
  format: "jpg",
  width: 874,
  height: 1299,
  metadata: {},
  public_id: "some_poster_abc123",
  id: "some_poster_abc123",
  resource_type: "image",
  secure_url: "https://res.cloudinary.com/demo/image/upload/v1/some_poster_abc123.jpg",
  tags: [],
  type: "upload",
  uploaded_by: user,
  url: "http://res.cloudinary.com/demo/image/upload/v1/some_poster_abc123.jpg",
  version: 1794938366,
};

describe("isOfTypeCloudinaryAsset", () => {
  it("accepts an asset without a duration key", () => {
    expect(isOfTypeCloudinaryAsset(asset)).toBe(true);
  });

  it("accepts an asset with a null duration", () => {
    expect(isOfTypeCloudinaryAsset({ ...asset, duration: null })).toBe(true);
  });

  it("accepts an asset with a numeric duration", () => {
    expect(isOfTypeCloudinaryAsset({ ...asset, duration: 12.5 })).toBe(true);
  });

  it("rejects something that is not an asset", () => {
    expect(isOfTypeCloudinaryAsset({ url: "https://example.com/a.jpg" })).toBe(false);
    expect(isOfTypeCloudinaryAsset(undefined)).toBe(false);
  });
});
