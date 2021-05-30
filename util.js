const getJuzIndex = (maqra) => Math.floor(maqra / 8);
const getMaqraIndex = (maqra) => Math.ceil(maqra % 8);

const generatePageNumbers = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) arr.push(i);
  return arr;
};

module.exports = {
  getJuzIndex,
  getMaqraIndex,
  generatePageNumbers,
};
