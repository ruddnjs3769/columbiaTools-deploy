import { Order } from "@/model/order";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IOrderState {
  orderHistory: Order;
}

const initialState: IOrderState = {
  orderHistory: {
    name: { username: "" },
    status: "결재 대기",
    receiverName: "",
    receiverPhone: "",
    address: "",
    phone: "",
    zipCode: "",
    orderTime: "",
    totalPrice: 0,
    deliveryTime: "",
    products: [],
    _id: "",
  },
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    STORE_ORDER(state, action) {
      state.orderHistory = action.payload;
    },
    CALCULATE_TOTAL_ORDER_AMOUNT(state) {
      const array: number[] = [];
      state.orderHistory.products.map(item => {
        const { eachPrice, quantity } = item;
        const totalPrice = eachPrice * quantity;
        return array.push(totalPrice);
      });
      const totalAmount = array.reduce((a, b) => {
        return a + b;
      }, 0);
      state.orderHistory.totalPrice = totalAmount;
    },
  },
});

export const { STORE_ORDER, CALCULATE_TOTAL_ORDER_AMOUNT } = orderSlice.actions;

export const selectOrderHistory = (state: RootState) =>
  state.orders.orderHistory;
// export const selectTotalOrderAmount = (state: RootState) =>
//   state.orders.totalOrderAmount;

export default orderSlice.reducer;
