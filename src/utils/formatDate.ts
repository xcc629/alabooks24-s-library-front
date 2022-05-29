export function formateDate(date: string): string {
  let newDate = date.slice(0, 10);
  let result = "";
  for (let i = 0; i < newDate.length; i++) {
    result += newDate[i].replace("-", ".");
  }
  return result;
}
