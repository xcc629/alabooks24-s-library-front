export const transelateCategory = (category: string) => {
  switch (category) {
    case "romance":
      return "로맨스";
    case "fantasy":
      return "판타지";
    case "romance-fantasy":
      return "로판";
    case "bl":
      return "BL";
    default:
      throw new Error("no Category");
  }
};

export const starRateSignString = (starValue: number) => {
  switch (starValue) {
    case 0:
      return "이 책을 평가해주세요!";
    case 1:
      return "별로에요";
    case 2:
      return "그저그래요";
    case 3:
      return "보통이에요";
    case 4:
      return "좋아요";
    case 5:
      return "최고에요!";
  }
};
