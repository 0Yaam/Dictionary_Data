const fs = require("fs");

// Đọc file .txt
const rawData = fs.readFileSync("dictionary.txt", "utf-8");

// Xử lý file thành JSON
const words = rawData.split("@").slice(1).map((entry) => {
  const lines = entry.trim().split("\n");
  const wordLine = lines[0].split(" ");
  const word = wordLine[0]; // Lấy từ
  const ipa = wordLine[1] || ""; // Lấy phiên âm
  const definition = lines.slice(1).join("\n"); // Lấy nghĩa
  return { word, ipa, definition };
});

// Ghi ra file JSON
fs.writeFileSync("data.json", JSON.stringify(words, null, 2));
console.log("Chuyển đổi hoàn tất! File được lưu dưới tên data.json");
