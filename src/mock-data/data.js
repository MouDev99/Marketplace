import accessories from './accessories.js';
import clothing from './clothing.js';
import electronics from './electronics.js';
import furniture from './furniture.js';
import homeAppliances from './homeAppliances.js';
import officeSupplies from './officeSupplies.js';
import petSupplies from './petSupplies.js';
import shoes from './shoes.js';
import sportsEntertainment from './sportsEntertainment.js';
import toysGames from './toysGames.js';

export const allCategories = [
  ...accessories,
  ...clothing,
  ...electronics,
  ...furniture,
  ...homeAppliances,
  ...officeSupplies,
  ...petSupplies,
  ...shoes,
  ...sportsEntertainment,
  ...toysGames
];

const data = {
  "All Categories": allCategories,
  "Accessories": accessories,
  "Clothing": clothing,
  "Electronics": electronics,
  "Furniture": furniture,
  "Home Appliances": homeAppliances,
  "Office Supplies": officeSupplies,
  "Pet Supplies": petSupplies,
  "Shoes": shoes,
  "Sports & Entertainment": sportsEntertainment,
  "Toys & Games": toysGames
};

export default data;
