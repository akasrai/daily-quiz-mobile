export const updateObject = (oldObject: object, updatedProperties: object) => ({
  ...oldObject,
  ...updatedProperties,
});
