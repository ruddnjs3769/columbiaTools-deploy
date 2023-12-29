export type Order = {
  username: string;
  userEmail: string;
  orderDate: string;
  orderStatus: OrderStatus;
  orderAmount: number;
  cartItems: CartItem[];
  billingAddress: Address;
  shippingAddress: Address;
  createdAt: Date;
  _id: string;
};

export type CartItem = {
  name: string;
  imageURL: string;
  price: number;
  cartQuantity: number;
  id: string;
  quantity: number;
};

type Address = {
  postalCode: string;
  city: string;
  line: string;
  name: string;
  phone: string;
};

type OrderStatus =
  | "preparing"
  | "payed"
  | "ready"
  | "moving"
  | "done"
  | "canceled";
