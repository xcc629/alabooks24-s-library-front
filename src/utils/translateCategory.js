export const transelation = (category) => {
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
