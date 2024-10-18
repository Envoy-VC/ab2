// compute sha256 hash
const arr = [
  100, 97, 116, 101, 58, 77, 111, 110, 44, 32, 49, 52, 32, 79, 99, 116, 32, 50,
  48, 50, 52, 32, 48, 52, 58, 52, 49, 58, 52, 48, 32, 43, 48, 48, 48, 48, 13,
  10, 102, 114, 111, 109, 58, 88, 32, 60, 105, 110, 102, 111, 64, 120, 46, 99,
  111, 109, 62, 13, 10, 116, 111, 58, 61, 63, 85, 84, 70, 45, 56, 63, 81, 63,
  86, 101, 100, 97, 110, 116, 95, 61, 55, 67, 95, 101, 110, 118, 111, 121, 49,
  48, 56, 52, 61, 50, 69, 101, 116, 104, 47, 108, 101, 110, 115, 95, 61, 70, 48,
  61, 57, 70, 61, 56, 67, 61, 66, 49, 63, 61, 32, 60, 118, 101, 100, 97, 110,
  116, 99, 104, 97, 105, 110, 97, 110, 105, 48, 48, 55, 64, 103, 109, 97, 105,
  108, 46, 99, 111, 109, 62, 13, 10, 115, 117, 98, 106, 101, 99, 116, 58, 80,
  97, 115, 115, 119, 111, 114, 100, 32, 114, 101, 115, 101, 116, 32, 114, 101,
  113, 117, 101, 115, 116, 13, 10, 109, 105, 109, 101, 45, 118, 101, 114, 115,
  105, 111, 110, 58, 49, 46, 48, 13, 10, 99, 111, 110, 116, 101, 110, 116, 45,
  116, 121, 112, 101, 58, 109, 117, 108, 116, 105, 112, 97, 114, 116, 47, 97,
  108, 116, 101, 114, 110, 97, 116, 105, 118, 101, 59, 32, 98, 111, 117, 110,
  100, 97, 114, 121, 61, 34, 45, 45, 45, 45, 61, 95, 80, 97, 114, 116, 95, 57,
  57, 48, 51, 53, 56, 95, 51, 49, 53, 56, 49, 50, 54, 55, 56, 46, 49, 55, 50,
  56, 56, 56, 48, 57, 48, 48, 52, 51, 48, 34, 13, 10, 109, 101, 115, 115, 97,
  103, 101, 45, 105, 100, 58, 60, 68, 66, 46, 67, 49, 46, 49, 52, 57, 57, 54,
  46, 52, 48, 49, 65, 67, 48, 55, 54, 64, 120, 46, 99, 111, 109, 62, 13, 10,
  100, 107, 105, 109, 45, 115, 105, 103, 110, 97, 116, 117, 114, 101, 58, 118,
  61, 49, 59, 32, 97, 61, 114, 115, 97, 45, 115, 104, 97, 50, 53, 54, 59, 32,
  99, 61, 114, 101, 108, 97, 120, 101, 100, 47, 114, 101, 108, 97, 120, 101,
  100, 59, 32, 100, 61, 120, 46, 99, 111, 109, 59, 32, 115, 61, 100, 107, 105,
  109, 45, 50, 48, 50, 51, 48, 56, 59, 32, 116, 61, 49, 55, 50, 56, 56, 56, 48,
  57, 48, 48, 59, 32, 98, 104, 61, 90, 67, 105, 113, 52, 110, 101, 81, 99, 57,
  84, 101, 122, 49, 122, 99, 114, 119, 80, 81, 54, 56, 74, 43, 81, 84, 100, 101,
  122, 99, 87, 71, 88, 52, 110, 70, 90, 112, 101, 81, 68, 112, 69, 61, 59, 32,
  104, 61, 68, 97, 116, 101, 58, 70, 114, 111, 109, 58, 84, 111, 58, 83, 117,
  98, 106, 101, 99, 116, 58, 77, 73, 77, 69, 45, 86, 101, 114, 115, 105, 111,
  110, 58, 67, 111, 110, 116, 101, 110, 116, 45, 84, 121, 112, 101, 58, 77, 101,
  115, 115, 97, 103, 101, 45, 73, 68, 59, 32, 98, 61, 128, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 16, 176,
];

const buf = Buffer.from(arr);
const crypto = require('crypto');
const hash = crypto.createHash('sha256');
hash.update(buf);
const result = hash.digest('hex');
// print in number array
const arr2 = [];
for (let i = 0; i < result.length; i += 2) {
  arr2.push(parseInt(result.slice(i, i + 2), 16));
}

console.log(arr2);