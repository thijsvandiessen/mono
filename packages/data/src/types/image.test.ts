import { describe, expect, it } from "vitest";
import { formatCloudinaryImage } from "../formatters/formatCloudinaryImage.js";
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

const toImage = (value: unknown) =>
  formatCloudinaryImage(isOfTypeCloudinaryAsset(value) ? value : undefined);

describe("isOfTypeCloudinaryAsset", () => {
  it("accepts a full asset, with or without a duration", () => {
    expect(isOfTypeCloudinaryAsset(asset)).toBe(true);
    expect(isOfTypeCloudinaryAsset({ ...asset, duration: null })).toBe(true);
    expect(isOfTypeCloudinaryAsset({ ...asset, duration: 12.5 })).toBe(true);
  });

  it("accepts an asset that only has a url", () => {
    expect(isOfTypeCloudinaryAsset({ secure_url: asset.secure_url })).toBe(true);
    expect(isOfTypeCloudinaryAsset({ url: asset.url })).toBe(true);
  });

  it("accepts an asset with unexpected optional fields", () => {
    expect(
      isOfTypeCloudinaryAsset({
        ...asset,
        width: "874",
        tags: null,
        created_by: "someone",
        metadata: "nope",
        newField: { anything: true },
      }),
    ).toBe(true);
  });

  it("rejects values without a url", () => {
    expect(isOfTypeCloudinaryAsset(undefined)).toBe(false);
    expect(isOfTypeCloudinaryAsset(null)).toBe(false);
    expect(isOfTypeCloudinaryAsset({})).toBe(false);
    expect(isOfTypeCloudinaryAsset({ ...asset, secure_url: "", url: undefined })).toBe(false);
    expect(isOfTypeCloudinaryAsset({ ...asset, secure_url: undefined, url: undefined })).toBe(
      false,
    );
  });
});

describe("formatCloudinaryImage", () => {
  it("formats a full asset", () => {
    expect(toImage(asset)).toEqual({
      id: "v1794938366/some_poster_abc123",
      title: "",
      description: "",
      width: 874,
      height: 1299,
      url: asset.secure_url,
    });
  });

  it("shows an image when only a url is known", () => {
    expect(toImage({ url: asset.url })).toEqual({
      id: asset.secure_url,
      title: "",
      description: "",
      url: asset.secure_url,
    });
  });

  it("drops optional fields with an unexpected shape", () => {
    expect(toImage({ ...asset, width: "874", alt: "nope" })).toEqual({
      id: "v1794938366/some_poster_abc123",
      title: "",
      description: "",
      height: 1299,
      url: asset.secure_url,
    });
  });

  it("shows no image when there is no asset", () => {
    expect(toImage(undefined)).toBeUndefined();
    expect(toImage({ width: 10, height: 10 })).toBeUndefined();
  });
});
