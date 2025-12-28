module.exports = (str) => str
  .split('-')
  .map((item, i) => i ? item[0].toUpperCase() + item.slice(1) : item)
  .join('');
