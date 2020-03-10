function updateInventory(currentInventory, newInventory) {
  const inventoryMap = {};
  currentInventory.concat(newInventory).forEach((item) => {
    inventoryMap[item[1]] = inventoryMap[item[1]] ? inventoryMap[item[1]] + item[0] : item[0];
  });
  return Object.entries(inventoryMap).sort().map(entry => entry.reverse());
}
export {
  updateInventory,
};
