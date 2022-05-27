export interface CartItemsProps {
  bookId: number;
  title: string;
  author: string;
  price: number;
  imgUrl: string;
}

export interface CartDataProps {
  memberId: number;
  cartItems: CartItemsProps[];
  totalCount: number;
  totalPrice: number;
}
