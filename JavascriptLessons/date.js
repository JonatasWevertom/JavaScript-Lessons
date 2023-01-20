const data1 = new Date();

console.log(data1);

const data2 = new Date('January 19 2023 02:00');

console.log(data2);

const data3 = new Date(2023, 03, 11, 16);

console.log(data3);

data3.setFullYear(2030);

console.log(data2.toDateString());

console.log(data2.toTimeString());

console.log(data2.toISOString());
