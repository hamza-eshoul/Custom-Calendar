const generateEmptyArray = (number) => {
  return Array(number)
    .fill()
    .map((_, i) => i + 1);
};

export default generateEmptyArray;
