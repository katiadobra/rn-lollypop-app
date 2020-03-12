export const ADD_ORDERS = 'ADD_ORDERS';

export const addOrder = (cartItem, totalAmount) => {
  return {
    type: ADD_ORDERS,
    orderData: {
      item: cartItems,
      amount: totalAmount
    }
  };
};
