const animalSort = animals => {
  if (!Array.isArray(animals) || animals.length === 0) return [];
  return animals.sort((a, b) => {
    if (a.numberOfLegs === b.numberOfLegs) {
      return a.name > b.name ? 1 : -1;
    }
    return a.numberOfLegs - b.numberOfLegs;
  });
};

export {
  animalSort,
};
