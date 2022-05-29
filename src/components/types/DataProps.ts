export interface BookInfoProps {
  id: number;
  title: string;
  isbn: string;
  imgUrl: string;
  category: "romance" | "romance-fantasy" | "fantasy" | "bl";
  author: string;
  publisher: string;
  price: number;
  publicationDate: string;
}

export interface BestSellerItemProps {
  id: BookInfoProps["id"];
  title: BookInfoProps["title"];
  imgUrl: BookInfoProps["imgUrl"];
  author: BookInfoProps["author"];
  avgStar: number;
  totalRatedCount: number;
}

export interface CommentsProps {
  commentId: number;
  writer: string;
  content: string;
  star: number;
  like: number;
  childrenCount: number;
  writeDateTime: string;
}

export interface CommentListProps {
  totalCount: number;
  comments: CommentsProps[];
}

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
