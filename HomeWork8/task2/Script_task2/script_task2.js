const date = new Date();

const hrs = date.getHours();
const mins = date.getMinutes();

const PassMins = (hrs*60)+mins;

console.log(PassMins);
