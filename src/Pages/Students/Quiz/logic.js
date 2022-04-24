export const calc = (answer) => {
  let point = 0;

  switch (answer) {
    case "NOT AT ALL":
      point += 0;
      break;
    case "SEVERAL DAYS":
      point += 10;
      break;
    case "MORE THAN HALF THE DAYS":
      point += 20;
      break;
    case "NEARLY EVERY DAY":
      point += 30;
      break;
    case "Good":
      point += 0;
      break;
    case "Average":
      point += 10;
      break;
    case "Poor":
      point += 20;
      break;
    case "Not sure":
      point += 30;
      break;
    case "YES":
      point = point;
      break;
    case "NO":
      point = point;
      break;
    case "DON'T KNOW":
      point = point;
      break;
    default:
      point = point;
  }

  return point;
};
