const orderCartWithoutItem = (order, item) =>
  order.filter(menuItem => menuItem.id !== item.id); // All the items in the order

const orderItemInCart = (order, item) =>
  order.filter(menuItem => menuItem.id === item.id)[0]; // The new item

const addOrder = (cart, item) => {
  const orderItem = orderItemInCart(cart, item);
  return orderItem === undefined
    ? [...orderCartWithoutItem(cart, item), { ...item, numberOfOrders: 1 }]
    : [
        ...orderCartWithoutItem(cart, item),
        { ...orderItem, numberOfOrders: orderItem.numberOfOrders + 1 }
      ];
};

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      // return [...state, action.payload]
      return addOrder(state, action.payload);
    // return currentTotal(state, action.payload);
    case "FINISHED":
      return (state = []);
    default:
      return state;
  }
};
export default orderReducer;
