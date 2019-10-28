export const getFromStorage = key => {
  let existingObject = localStorage.getItem(key);
  return existingObject ? JSON.parse(existingObject) : false;
};

export const putInStorage = (key, object) => {
  let existingObject = localStorage.getItem(key);
  if (existingObject) {
    existingObject = JSON.parse(existingObject);
    Object.keys(object).forEach(function(key) {
      existingObject[key] = object[key];
    });
    localStorage.setItem(key, JSON.stringify(existingObject));
  } else {
    localStorage.setItem(key, JSON.stringify(object));
  }
};

export const clearStorage = () => localStorage.clear();
