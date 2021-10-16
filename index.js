import crc from 'crc';
import { SHA3 } from 'sha3';
import { nouns, adjectives } from "./haiku.js";

export default {
  crc32haiku(str, radix = 36) {
    // Radix of 36 will use characters from 0 to z
    const crcStr = this.crc32str(str, radix);

    // Using the crc32 decimal checksum, then use first 5 digits for adjective
    // and remaining digits for noun
    const adj = adjectives[Math.floor(this.crc32str(str, 10) / 10000) % adjectives.length];
    const noun = nouns[(this.crc32str(str, 10) % 10000) % nouns.length];
    return `${adj}-${noun}-${crcStr}`;
  },

  crc32str(str, radix = 36) {
    return crc.crc32(str).toString(radix);
  },

  sha3256str(str) {
    const hash = new SHA3(256);
    hash.update(str);
    return hash.digest("hex");
  },
};
