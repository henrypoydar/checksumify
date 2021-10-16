import checksumify from "../index.js";
import assert from "assert";

describe("checksumify", function () {
  describe("#crc32str", function () {
    it("should return a CRC32 checksum", function () {
      const res = checksumify.crc32str("horse battery staple");
      assert.equal(6, res.length);
      assert.equal("j5wkks", res);
    });
  });

  describe("#sha3256str", function () {
    it("should return a SHA3-256 checksum", function () {
      const res = checksumify.sha3256str("horse battery staple");
      assert.equal(64, res.length);
      assert.equal("aa2b0cc543c0f1cfee62c6d994e0825e9a55672983c6d6ae1eac5a3dfd788819", res);
    });
  });

  describe("#crc32haiku", function () {
    it("should return concatenated haiku words and a CRC32 checksum", function () {
      const res = checksumify.crc32haiku("horse battery staple");
      assert.equal("late-wave-j5wkks", res);
    });
  });
});
