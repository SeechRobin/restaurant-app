import store from "../config/store";

//Each function returns true/false and the error code when false
const isOrderCorrect = item => {
  let currentOrder = store.getState().order;

  // Ugh cant have prawn cocktail and samon fillet!
  let currentSelection = item.name.trim();

  if (currentSelection === "prawn cocktail") {
    let fishy = currentOrder.filter(
      menuItem => menuItem.name.trim() === "salmon fillet"
    );
    if (fishy.length > 0) {
      return [false, 4];
    }
  }

  if (currentSelection === "salmon fillet") {
    let fishy = currentOrder.filter(
      menuItem => menuItem.name.trim() === "prawn cocktail"
    );
    if (fishy.length > 0) {
      return [false, 4];
    }
  }

  // The 3 groups starter, main and desert
  const isSameGroup = currentOrder.filter(
    menuItem => menuItem.group === item.group
  );
  if (isSameGroup.length > 0) {
    return [false, 2];
  }
  return [true, 0];
};

export const isReadyToSubmit = () => {
  let currentOrder = store.getState().order;
  // Each person must have at least two course
  if (currentOrder.length < 2) {
    return [false, 1];
  }
  // Check if there is a main course in the order :needs improvement
  const mainCourse = currentOrder.filter(menuItem => menuItem.group === 2);

  if (mainCourse.length === 0) {
    return [false, 1];
  }
  return [true, 0];
};
export default isOrderCorrect;
