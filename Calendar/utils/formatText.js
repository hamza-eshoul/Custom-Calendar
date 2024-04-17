const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const removeDuplicatesFromString = (string) => {
  const words = string.split(" ");
  const seen = new Set();
  const uniqueWords = words.filter((word) => {
    const lowerCaseWord = word.toLowerCase();
    if (!seen.has(lowerCaseWord)) {
      seen.add(lowerCaseWord);
      return true;
    }
    return false;
  });
  return uniqueWords.join(" ");
};

const formatToLowerCaseExceptFirst = (string) => {
  const lowerCaseString = string.toLowerCase();

  return capitalizeFirstLetter(lowerCaseString);
};

export {
  capitalizeFirstLetter,
  removeDuplicatesFromString,
  formatToLowerCaseExceptFirst,
};
