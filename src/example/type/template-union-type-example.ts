type City = 'Tokyo' | 'Osaka';
type Gender = 'male' | 'female';
type Combined = `${City}_${Gender}`;

const combined: Combined = 'Tokyo_female';

console.log(typeof combined);
