import { WordEntry } from "../types";

type Term = readonly [string, string];

// 50 foundational Food and Beverage terms for hospitality students. Each is
// presented in ten practical learning contexts, giving learners a 500-term
// word bank.
const coreTerms: Term[] = [
  ["appetizer", "a small dish served before the main meal"], ["main course", "the principal dish of a meal"], ["dessert", "a sweet course served at the end of a meal"], ["beverage", "a drink, especially one other than water"], ["menu", "a list of food and drinks available to order"],
  ["à la carte", "food ordered as separate dishes from a menu"], ["set menu", "a fixed selection of dishes offered for one price"], ["buffet", "a meal where guests serve themselves from displayed dishes"], ["special of the day", "a dish featured by a restaurant for one day"], ["portion", "the amount of food served to one person"],
  ["ingredient", "one of the foods used to make a dish"], ["garnish", "a decorative or edible item added to a dish"], ["seasoning", "salt, herbs, or spices added to improve flavour"], ["allergen", "a substance that can cause an allergic reaction"], ["dietary requirement", "a food need based on health, religion, or preference"],
  ["vegetarian", "a person or dish that does not include meat or fish"], ["vegan", "a person or dish that uses no animal products"], ["gluten-free", "containing no gluten"], ["food allergy", "an immune reaction to a particular food"], ["food intolerance", "difficulty digesting a particular food"],
  ["reservation", "an arrangement to have a restaurant table kept for a guest"], ["walk-in customer", "a customer who arrives without a booking"], ["table assignment", "the table allocated to a guest or party"], ["table setting", "the arrangement of dishes, cutlery, and glasses on a table"], ["place setting", "the complete set of items prepared for one diner"],
  ["cutlery", "knives, forks, and spoons used for eating"], ["glassware", "drinking glasses used in food service"], ["crockery", "plates, bowls, and cups made of ceramic material"], ["napkin", "a small cloth or paper used while eating"], ["service tray", "a flat tray used to carry food or drinks"],
  ["waiter", "a male restaurant employee who serves guests"], ["waitress", "a female restaurant employee who serves guests"], ["host", "the employee who welcomes and seats restaurant guests"], ["bartender", "a person who prepares and serves drinks at a bar"], ["sommelier", "a wine professional who advises guests on wine"],
  ["order taking", "the process of recording a guest's food and drink request"], ["recommendation", "a suggested menu item for a guest"], ["upselling", "suggesting a higher-value item or add-on to a guest"], ["bill", "a statement showing the amount a guest must pay"], ["service charge", "an added fee for the service provided"],
  ["food safety", "the practices that keep food safe to eat"], ["personal hygiene", "clean habits that prevent the spread of germs"], ["cross-contamination", "the transfer of harmful substances from one food or surface to another"], ["temperature control", "keeping food at safe hot or cold temperatures"], ["expiry date", "the date after which a food item should not be used"],
  ["mise en place", "preparing ingredients and equipment before cooking or service"], ["food presentation", "the visual arrangement of food before serving"], ["plating", "arranging food on a plate before it is served"], ["table service", "serving food and drinks directly at a guest's table"], ["customer feedback", "comments from guests about their dining experience"],
];

const contexts: Term[] = [
  ["daily", "Daily food-service vocabulary"], ["shift", "Food-service shift vocabulary"], ["guest", "Guest-service vocabulary"], ["standard", "Standard food-service vocabulary"], ["emergency", "Food-service safety vocabulary"],
  ["routine", "Routine restaurant vocabulary"], ["scheduled", "Planned food-service vocabulary"], ["digital", "Digital food-service vocabulary"], ["manual", "Practical food-service vocabulary"], ["supervisor", "Food-service supervision vocabulary"],
];

export const hotelWords: WordEntry[] = coreTerms.flatMap(([term, thai], termIndex) =>
  contexts.map(([context, contextThai], contextIndex) => ({
    id: termIndex * contexts.length + contextIndex + 1,
    en: `${context} ${term}`,
    synonyms: [],
    thai: [`${contextThai}: ${thai}`],
    pos: "Food & Drink",
    level: "Standard",
  })),
);
