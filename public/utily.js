const getItem = () => {
  const getOldItem = localStorage.getItem("jonApplyed");
  if (getOldItem) {
    return JSON.parse(getOldItem);
  } else {
    return [];
  }
};
const newItemAdd = (id) => {
  const getOldData = getItem();
  const exists = getOldData.find((jobId) => id == jobId);
  if (!exists) {
    getOldData.push(id);
    localStorage.setItem("jonApplyed", JSON.stringify(getOldData));
  }
};
export { getItem, newItemAdd };
