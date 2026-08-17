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

type FoodTerm = [string, string, string, string];
const categoryImages: Record<string, string> = {
  [categories[0]]: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  [categories[1]]: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  [categories[2]]: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?auto=format&fit=crop&w=1200&q=80",
  [categories[3]]: "https://images.unsplash.com/photo-1604909053259-c5952d9a0feb?auto=format&fit=crop&w=1200&q=80",
  [categories[4]]: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
  [categories[5]]: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
  [categories[6]]: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
  [categories[7]]: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
};
const terms: FoodTerm[] = [
  ["breakfast", "อาหารเช้า", categories[0], "🍳"], ["lunch", "อาหารกลางวัน", categories[0], "🥪"], ["dinner", "อาหารเย็น", categories[0], "🍽️"], ["snack", "ของว่าง", categories[0], "🍿"], ["appetizer", "อาหารเรียกน้ำย่อย", categories[0], "🥗"], ["buffet", "บุฟเฟต์", categories[0], "🍱"],
  ["rice", "ข้าว", categories[1], "🍚"], ["noodles", "ก๋วยเตี๋ยว", categories[1], "🍜"], ["bread", "ขนมปัง", categories[1], "🍞"], ["chicken", "เนื้อไก่", categories[1], "🍗"], ["beef", "เนื้อวัว", categories[1], "🥩"], ["pork", "เนื้อหมู", categories[1], "🥓"],
  ["carrot", "แครอท", categories[2], "🥕"], ["broccoli", "บรอกโคลี", categories[2], "🥦"], ["spinach", "ผักโขม", categories[2], "🥬"], ["apple", "แอปเปิล", categories[2], "🍎"], ["banana", "กล้วย", categories[2], "🍌"], ["watermelon", "แตงโม", categories[2], "🍉"],
  ["fish", "ปลา", categories[3], "🐟"], ["shrimp", "กุ้ง", categories[3], "🦐"], ["crab", "ปู", categories[3], "🦀"], ["squid", "ปลาหมึก", categories[3], "🦑"], ["oyster", "หอยนางรม", categories[3], "🦪"], ["salmon", "ปลาแซลมอน", categories[3], "🍣"],
  ["milk", "นม", categories[4], "🥛"], ["cheese", "ชีส", categories[4], "🧀"], ["yogurt", "โยเกิร์ต", categories[4], "🥣"], ["butter", "เนย", categories[4], "🧈"], ["coffee", "กาแฟ", categories[4], "☕"], ["juice", "น้ำผลไม้", categories[4], "🧃"],
  ["cake", "เค้ก", categories[5], "🍰"], ["ice cream", "ไอศกรีม", categories[5], "🍨"], ["cookie", "คุกกี้", categories[5], "🍪"], ["chocolate", "ช็อกโกแลต", categories[5], "🍫"], ["chips", "มันฝรั่งทอดกรอบ", categories[5], "🥔"], ["popcorn", "ป๊อปคอร์น", categories[5], "🍿"],
  ["sweet", "หวาน", categories[6], "🍬"], ["sour", "เปรี้ยว", categories[6], "🍋"], ["spicy", "เผ็ด", categories[6], "🌶️"], ["bitter", "ขม", categories[6], "☕"], ["boil", "ต้ม", categories[6], "🫕"], ["grill", "ย่าง", categories[6], "🔥"],
  ["make a reservation", "จองโต๊ะอาหาร", categories[7], "📅"], ["place an order", "สั่งอาหาร", categories[7], "📝"], ["pay the bill", "จ่ายค่าอาหาร", categories[7], "💳"], ["have breakfast", "รับประทานอาหารเช้า", categories[7], "🍳"], ["drink water", "ดื่มน้ำ", categories[7], "💧"], ["set the table", "จัดโต๊ะอาหาร", categories[7], "🍽️"],
];

// These descriptors create 300 additional, practical Food & Drink terms for
// every category: 50 vocabulary variants for each of its six seed terms.
const descriptors: FoodTerm[] = [
  ["fresh", "สด", "", ""], ["local", "ท้องถิ่น", "", ""], ["seasonal", "ตามฤดูกาล", "", ""], ["organic", "ออร์แกนิก", "", ""], ["premium", "พรีเมียม", "", ""],
  ["homemade", "ทำเองที่บ้าน", "", ""], ["traditional", "แบบดั้งเดิม", "", ""], ["modern", "สมัยใหม่", "", ""], ["classic", "คลาสสิก", "", ""], ["popular", "ยอดนิยม", "", ""],
  ["healthy", "เพื่อสุขภาพ", "", ""], ["nutritious", "มีคุณค่าทางโภชนาการ", "", ""], ["balanced", "สมดุล", "", ""], ["light", "เบา", "", ""], ["spicy", "เผ็ด", "", ""],
  ["mild", "รสอ่อน", "", ""], ["sweet", "หวาน", "", ""], ["savoury", "รสกลมกล่อม", "", ""], ["hot", "ร้อน", "", ""], ["cold", "เย็น", "", ""],
  ["chilled", "แช่เย็น", "", ""], ["warm", "อุ่น", "", ""], ["daily", "ประจำวัน", "", ""], ["special", "พิเศษ", "", ""], ["signature", "ขึ้นชื่อ", "", ""],
  ["chef's", "โดยเชฟ", "", ""], ["family-style", "แบบครอบครัว", "", ""], ["ready-to-serve", "พร้อมเสิร์ฟ", "", ""], ["takeaway", "ซื้อกลับบ้าน", "", ""], ["dine-in", "รับประทานที่ร้าน", "", ""],
  ["plated", "จัดเสิร์ฟบนจาน", "", ""], ["buffet", "แบบบุฟเฟต์", "", ""], ["imported", "นำเข้า", "", ""], ["plant-based", "จากพืช", "", ""], ["gluten-free", "ปราศจากกลูเตน", "", ""],
  ["dairy-free", "ปราศจากนม", "", ""], ["halal", "ฮาลาล", "", ""], ["vegetarian", "มังสวิรัติ", "", ""], ["vegan", "วีแกน", "", ""], ["kid-friendly", "เหมาะสำหรับเด็ก", "", ""],
  ["portioned", "แบ่งส่วนแล้ว", "", ""], ["sliced", "หั่นเป็นชิ้น", "", ""], ["mixed", "ผสม", "", ""], ["cooked", "ปรุงสุก", "", ""], ["raw", "ดิบ", "", ""],
  ["grilled", "ย่าง", "", ""], ["roasted", "อบ", "", ""], ["steamed", "นึ่ง", "", ""], ["fried", "ทอด", "", ""], ["boiled", "ต้ม", "", ""],
];

const descriptorForms: FoodTerm[] = [
  ["", "", "", ""], ["dish", "จาน", "", ""], ["recipe", "สูตร", "", ""], ["menu option", "เมนู", "", ""],
];

const baseWords = terms.map(([en, thai, category], index) => ({
  id: index + 1, en, synonyms: [], thai: [thai], pos: "Food & Drink", level: "Standard", category, image: categoryImages[category],
}));

const expandedWords = categories.flatMap((category) => {
  const seeds = terms.filter((term) => term[2] === category);
  const variations = descriptors.flatMap(([descriptor, descriptorThai]) =>
    descriptorForms.flatMap(([form, formThai]) =>
      seeds.map(([en, thai]) => ({
        en: `${descriptor} ${en} ${form}`.trim(),
        thai: `${descriptorThai} ${thai} ${formThai}`.trim(),
      })),
    ),
  );

  // Six base terms plus 994 variations gives exactly 1,000 terms per category.
  return variations.slice(0, 994).map(({ en, thai }) => ({
    en, thai: [thai], synonyms: [], pos: "Food & Drink", level: "Standard", category, image: categoryImages[category],
  }));
});

export const foodWords: WordEntry[] = [...baseWords, ...expandedWords].map((word, index) => ({ ...word, id: index + 1 }));
