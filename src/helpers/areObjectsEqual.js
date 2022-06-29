export const areObjectsEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;

  if (!obj1 || !obj2 || (typeof obj1 !== "object" && typeof obj2 !== "object"))
    return obj1 === obj2;

  if (
    obj1 === null ||
    obj1 === undefined ||
    obj2 === null ||
    obj2 === undefined
  )
    return false;

  const keys = Object.keys(obj1);
  if (keys.length !== Object.keys(obj2).length) return false;

  return keys.every((key) => areObjectsEqual(obj1[key], obj2[key]));
};
