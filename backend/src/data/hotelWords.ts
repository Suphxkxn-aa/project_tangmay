import { WordEntry } from "../types";

type Term = readonly [string, string];

// 50 foundational Food and Beverage terms for hospitality students. Each is
// presented in ten practical learning contexts, giving learners a 500-term
// word bank.
const coreTerms: Term[] = [
  ["appetizer", "อาหารเรียกน้ำย่อย"], ["main course", "อาหารจานหลัก"], ["dessert", "ของหวาน"], ["beverage", "เครื่องดื่ม"], ["menu", "รายการอาหาร"],
  ["à la carte", "อาหารที่สั่งแยกเป็นจาน"], ["set menu", "ชุดเมนูอาหาร"], ["buffet", "อาหารบุฟเฟต์"], ["special of the day", "เมนูพิเศษประจำวัน"], ["portion", "ปริมาณอาหารต่อหนึ่งที่"],
  ["ingredient", "วัตถุดิบ"], ["garnish", "เครื่องตกแต่งอาหาร"], ["seasoning", "เครื่องปรุงรส"], ["allergen", "สารก่อภูมิแพ้"], ["dietary requirement", "ข้อกำหนดด้านอาหาร"],
  ["vegetarian", "อาหารมังสวิรัติ"], ["vegan", "อาหารวีแกน"], ["gluten-free", "ปราศจากกลูเตน"], ["food allergy", "การแพ้อาหาร"], ["food intolerance", "ภาวะไม่ทนต่ออาหาร"],
  ["reservation", "การจองโต๊ะอาหาร"], ["walk-in customer", "ลูกค้าที่เข้ามาโดยไม่จอง"], ["table assignment", "การจัดโต๊ะให้ลูกค้า"], ["table setting", "การจัดโต๊ะอาหาร"], ["place setting", "ชุดอุปกรณ์ประจำที่นั่ง"],
  ["cutlery", "ช้อนส้อมและมีด"], ["glassware", "ภาชนะแก้ว"], ["crockery", "ภาชนะเซรามิก"], ["napkin", "ผ้าเช็ดปาก"], ["service tray", "ถาดบริการ"],
  ["waiter", "พนักงานเสิร์ฟชาย"], ["waitress", "พนักงานเสิร์ฟหญิง"], ["host", "พนักงานต้อนรับหน้าร้าน"], ["bartender", "พนักงานผสมเครื่องดื่ม"], ["sommelier", "ผู้เชี่ยวชาญด้านไวน์"],
  ["order taking", "การรับรายการอาหาร"], ["recommendation", "การแนะนำเมนู"], ["upselling", "การเสนอขายเมนูที่มีมูลค่าสูงขึ้น"], ["bill", "ใบเรียกเก็บเงิน"], ["service charge", "ค่าบริการ"],
  ["food safety", "ความปลอดภัยด้านอาหาร"], ["personal hygiene", "สุขอนามัยส่วนบุคคล"], ["cross-contamination", "การปนเปื้อนข้าม"], ["temperature control", "การควบคุมอุณหภูมิ"], ["expiry date", "วันหมดอายุ"],
  ["mise en place", "การเตรียมอุปกรณ์และวัตถุดิบก่อนบริการ"], ["food presentation", "การจัดตกแต่งอาหาร"], ["plating", "การจัดอาหารลงจาน"], ["table service", "การบริการที่โต๊ะอาหาร"], ["customer feedback", "ความคิดเห็นของลูกค้า"],
];

const contexts: Term[] = [
  ["daily", "ประจำวัน"], ["shift", "ประจำกะ"], ["guest", "สำหรับแขก"], ["standard", "ตามมาตรฐาน"], ["emergency", "ฉุกเฉิน"],
  ["routine", "ตามปกติ"], ["scheduled", "ตามกำหนด"], ["digital", "ผ่านระบบดิจิทัล"], ["manual", "ดำเนินการด้วยมือ"], ["supervisor", "สำหรับหัวหน้างาน"],
];

export const hotelWords: WordEntry[] = coreTerms.flatMap(([term, thai], termIndex) =>
  contexts.map(([context, contextThai], contextIndex) => ({
    id: termIndex * contexts.length + contextIndex + 1,
    en: `${context} ${term}`,
    synonyms: [],
    thai: [`${thai}${contextThai}`],
    pos: "Food & Beverage term",
    level: "F&B",
  })),
);
