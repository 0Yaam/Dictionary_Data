const fs = require("fs");

//read
const rawData = fs.readFileSync("dictionary.txt", "utf-8");

// process
const words = rawData.split("@").slice(1).map((entry) => {
  const lines = entry.trim().split("\n");
  const wordLine = lines[0].split(" ");
  const word = wordLine[0]; // Lấy từ
  const ipa = wordLine[1] || ""; // Lấy phiên âm
  const definition = lines.slice(1).join("\n"); // Lấy nghĩa
  return { word, ipa, definition };
});

// write
fs.writeFileSync("data.json", JSON.stringify(words, null, 2));
console.log("Chuyển đổi hoàn tất! File được lưu dưới tên data.json");
