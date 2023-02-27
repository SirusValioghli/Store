const shorten = (title) => {
  const titleArray = title.split(" ");
  const newTitle = `${titleArray[0]} ${titleArray[1]}`;
  return newTitle;
};

const isInCart = (state, id) => {
  const res = !!state.selectedItems.find((item) => item.id === id);
  return res;
};

const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else return state.selectedItems[index].quantity;
};

export { shorten, isInCart, quantityCount };
