export function sortArray(data, attribute, direction) {
  if (!data) {
    return null;
  }

  //CHECK IF ATTRIBUTE IS STRING OR NUMBER
  if (data.length === 0) {
    return data;
  } else {
    if (typeof data[0][attribute] === "number") {
      return sortByNumber(data, attribute);
    }
    if (typeof data[0][attribute] === "string") {
      return sortByCharacter(data, attribute);
    }
  }
  //

  //SORT FUNCTION FOR NUMERIC ATTRIBUTES
  function sortByNumber(data, attribute) {
    if (direction === 1) {
      const sortedData = data.sort((a, b) => a[attribute] - b[attribute]);
      return sortedData;
    } else {
      const sortedData = data.sort((a, b) => b[attribute] - a[attribute]);
      return sortedData;
    }
  }

  //SORT FUNCTION FOR STRING ATTRIBUTES
  function sortByCharacter(data, attribute) {
    if (direction === 1) {
      const sortedData = data.sort((a, b) => {
        if (a[attribute].toLowerCase() < b[attribute].toLowerCase()) return -1;
        if (a[attribute].toLowerCase() > b[attribute].toLowerCase()) return 1;
        return 0;
      });
      return sortedData;
    } else {
      const sortedData = data.sort((a, b) => {
        if (a[attribute].toLowerCase() < b[attribute].toLowerCase()) return 1;
        if (a[attribute].toLowerCase() > b[attribute].toLowerCase()) return -1;
        return 0;
      });
      return sortedData;
    }
  }
  //
}
