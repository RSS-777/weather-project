const newDate = new Date();
const year = newDate.getFullYear();
const months = newDate.getMonth();
const day = newDate.getDate();
const hours = newDate.getHours();
const minute = newDate.getMinutes();
const second = newDate.getSeconds();

let season = '';
if (months === 11 || months === 0 || months === 1) { season = 'winter' };
if (months === 2 || months === 3 || months === 4) { season = 'spring' };
if (months === 5 || months === 6 || months === 7) { season = 'summer' };
if (months === 8 || months === 9 || months === 10) { season = 'autumn' };

export const date = {
  year,
  day,
  hours,
  minute,
  second,
  season
};