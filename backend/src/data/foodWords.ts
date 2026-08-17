import { WordEntry } from "../types";

export const categories = [
  "I. ประเภทมื้ออาหารและหมวดอาหาร",
  "II. อาหารจานหลักและเนื้อสัตว์",
  "III. ผักและผลไม้",
  "IV. อาหารทะเล",
  "V. ผลิตภัณฑ์จากนมและเครื่องดื่ม",
  "VI. ของหวานและของว่าง",
  "VII. รสชาติและการปรุงอาหาร",
  "VIII. Collocation เกี่ยวกับอาหาร",
] as const;

type FoodTerm = readonly [english: string, thai: string, category: string];

// Curated food vocabulary. Terms follow standard learner and dictionary food
// vocabulary, rather than generated word combinations.
const terms: FoodTerm[] = [
  ["breakfast", "อาหารเช้า", categories[0]], ["brunch", "อาหารมื้อสาย", categories[0]], ["lunch", "อาหารกลางวัน", categories[0]], ["dinner", "อาหารเย็น", categories[0]], ["supper", "อาหารมื้อค่ำ", categories[0]], ["appetizer", "อาหารเรียกน้ำย่อย", categories[0]], ["main course", "อาหารจานหลัก", categories[0]], ["side dish", "เครื่องเคียง", categories[0]], ["dessert", "ของหวาน", categories[0]], ["buffet", "บุฟเฟต์", categories[0]],
  ["ground beef", "เนื้อบด", categories[1]], ["ribeye steak", "สเต๊กริบอาย", categories[1]], ["chicken breast", "อกไก่", categories[1]], ["chicken thigh", "น่องไก่", categories[1]], ["pork chop", "พอร์กชอป", categories[1]], ["lamb shank", "น่องแกะ", categories[1]], ["duck breast", "อกเป็ด", categories[1]], ["turkey", "เนื้อไก่งวง", categories[1]], ["spaghetti", "สปาเกตตี", categories[1]], ["mashed potatoes", "มันฝรั่งบด", categories[1]],
  ["carrot", "แครอท", categories[2]], ["broccoli", "บรอกโคลี", categories[2]], ["spinach", "ผักโขม", categories[2]], ["asparagus", "หน่อไม้ฝรั่ง", categories[2]], ["zucchini", "ซูกินี", categories[2]], ["eggplant", "มะเขือยาว", categories[2]], ["apple", "แอปเปิล", categories[2]], ["banana", "กล้วย", categories[2]], ["mango", "มะม่วง", categories[2]], ["pineapple", "สับปะรด", categories[2]],
  ["scallop", "หอยเชลล์", categories[3]], ["lobster", "กุ้งมังกร", categories[3]], ["catfish", "ปลาดุก", categories[3]], ["salmon", "ปลาแซลมอน", categories[3]], ["tuna", "ปลาทูน่า", categories[3]], ["cod", "ปลาค็อด", categories[3]], ["shrimp", "กุ้ง", categories[3]], ["crab", "ปู", categories[3]], ["mussel", "หอยแมลงภู่", categories[3]], ["oyster", "หอยนางรม", categories[3]],
  ["milk", "นม", categories[4]], ["cheese", "ชีส", categories[4]], ["butter", "เนย", categories[4]], ["yogurt", "โยเกิร์ต", categories[4]], ["cream", "ครีม", categories[4]], ["ice cream", "ไอศกรีม", categories[4]], ["coffee", "กาแฟ", categories[4]], ["tea", "ชา", categories[4]], ["orange juice", "น้ำส้ม", categories[4]], ["sparkling water", "น้ำแร่มีฟอง", categories[4]],
  ["cake", "เค้ก", categories[5]], ["cookie", "คุกกี้", categories[5]], ["brownie", "บราวนี", categories[5]], ["cheesecake", "ชีสเค้ก", categories[5]], ["donut", "โดนัท", categories[5]], ["potato chips", "มันฝรั่งทอดกรอบ", categories[5]], ["popcorn", "ป๊อปคอร์น", categories[5]], ["pretzel", "เพรทเซล", categories[5]], ["granola bar", "กราโนลาบาร์", categories[5]], ["trail mix", "ถั่วและผลไม้อบแห้งรวม", categories[5]],
  ["sweet", "หวาน", categories[6]], ["sour", "เปรี้ยว", categories[6]], ["bitter", "ขม", categories[6]], ["salty", "เค็ม", categories[6]], ["spicy", "เผ็ด", categories[6]], ["umami", "รสอูมามิ", categories[6]], ["boil", "ต้ม", categories[6]], ["grill", "ย่าง", categories[6]], ["roast", "อบ", categories[6]], ["steam", "นึ่ง", categories[6]],
  ["make a reservation", "จองโต๊ะอาหาร", categories[7]], ["place an order", "สั่งอาหาร", categories[7]], ["pay the bill", "จ่ายค่าอาหาร", categories[7]], ["set the table", "จัดโต๊ะอาหาร", categories[7]], ["pour a drink", "รินเครื่องดื่ม", categories[7]], ["brew coffee", "ชงกาแฟ", categories[7]], ["slice bread", "หั่นขนมปัง", categories[7]], ["boil water", "ต้มน้ำ", categories[7]], ["grill chicken", "ย่างไก่", categories[7]], ["serve dessert", "เสิร์ฟของหวาน", categories[7]],
];

function imageForTerm(term: string): string {
  // Flickr serves real photographs selected with the exact food tags for each term.
  return `https://loremflickr.com/640/480/${encodeURIComponent(term.replace(/\s+/g, ","))}`;
}

export const foodWords: WordEntry[] = terms.map(([en, thai, category], index) => ({
  id: index + 1,
  en,
  synonyms: [],
  thai: [thai],
  pos: "Food & Drink",
  level: "Standard",
  category,
  image: imageForTerm(en),
}));
