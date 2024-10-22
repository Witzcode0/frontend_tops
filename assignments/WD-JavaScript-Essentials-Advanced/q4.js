// Write a JavaScript program to calculate days left until next Christmas?

const today = new Date();

const christmasDay = new Date(today.getFullYear(), 12, 25);

if (today > christmasDay) {
  christmasDay.setFullYear(today.getFullYear() + 1);
}

const daysLeft = Math.ceil((christmasDay - today) / (1000 * 60 * 60 * 24));

console.log(daysLeft);
