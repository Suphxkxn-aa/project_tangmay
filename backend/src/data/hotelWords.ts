import { WordEntry } from "../types";

type Term = readonly [string, string];

// 50 core terms across front office, rooms, food and beverage, revenue,
// events, engineering, security, and guest relations.  Each is presented in
// ten practical hotel-work contexts, giving learners a 500-term word bank.
const coreTerms: Term[] = [
  ["reservation", "การสำรองห้องพัก"], ["check-in", "การเช็กอิน"], ["check-out", "การเช็กเอาต์"], ["registration", "การลงทะเบียนเข้าพัก"], ["room assignment", "การจัดสรรห้องพัก"],
  ["key card", "คีย์การ์ด"], ["wake-up call", "บริการโทรปลุก"], ["room upgrade", "การอัปเกรดห้องพัก"], ["late check-out", "การเช็กเอาต์ล่าช้า"], ["early arrival", "การมาถึงก่อนเวลา"],
  ["no-show", "ผู้จองที่ไม่มาเข้าพัก"], ["walk-in guest", "แขกที่เข้าพักโดยไม่จองล่วงหน้า"], ["guest folio", "ใบรายการค่าใช้จ่ายของแขก"], ["incidental charge", "ค่าใช้จ่ายเบ็ดเตล็ด"], ["cash float", "เงินทอนประจำจุดบริการ"],
  ["night audit", "การตรวจสอบบัญชีกะกลางคืน"], ["occupancy", "อัตราการเข้าพัก"], ["average daily rate", "อัตราค่าห้องพักเฉลี่ยต่อวัน"], ["revenue management", "การบริหารรายได้"], ["rate plan", "แผนราคา"],
  ["room inventory", "จำนวนห้องพักที่พร้อมขาย"], ["booking engine", "ระบบจองห้องพักออนไลน์"], ["channel manager", "ระบบจัดการช่องทางการขาย"], ["confirmation number", "หมายเลขยืนยันการจอง"], ["cancellation policy", "นโยบายการยกเลิก"],
  ["housekeeping", "แผนกแม่บ้าน"], ["room attendant", "พนักงานดูแลห้องพัก"], ["turndown service", "บริการจัดเตรียมห้องก่อนนอน"], ["linen", "ผ้าลินิน"], ["laundry", "บริการซักรีด"],
  ["amenities", "สิ่งอำนวยความสะดวกในห้องพัก"], ["minibar", "มินิบาร์"], ["lost and found", "แผนกของหายและของพบ"], ["maintenance request", "คำขอซ่อมบำรุง"], ["out-of-order room", "ห้องพักที่ใช้งานไม่ได้"],
  ["room inspection", "การตรวจสอบห้องพัก"], ["deep cleaning", "การทำความสะอาดครั้งใหญ่"], ["stayover service", "การทำความสะอาดห้องที่แขกพักต่อ"], ["vacant clean", "ห้องว่างที่ทำความสะอาดแล้ว"], ["do not disturb", "ป้ายห้ามรบกวน"],
  ["concierge", "พนักงานคอนเซียร์จ"], ["bell attendant", "พนักงานยกกระเป๋า"], ["luggage storage", "บริการรับฝากสัมภาระ"], ["airport transfer", "บริการรับส่งสนามบิน"], ["guest complaint", "ข้อร้องเรียนของแขก"],
  ["service recovery", "การแก้ไขสถานการณ์บริการ"], ["guest satisfaction", "ความพึงพอใจของแขก"], ["VIP guest", "แขกวีไอพี"], ["loyalty program", "โปรแกรมสมาชิก"], ["special request", "คำขอพิเศษ"],
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
    pos: "hotel term",
    level: "Hospitality",
  })),
);
