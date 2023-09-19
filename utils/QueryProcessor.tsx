export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrew id")) {
    return "yuqiq";
  } else if (query.toLowerCase().includes("what is your name?")) {
    return "mon";
  } else if (query.includes("Which of the following numbers is the largest:")) {
    let break1 = query.split(":");
    let numbers = break1[1].split(", ");
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
    let num3 = Number((numbers[2].split("?"))[0]);

    return "" + Math.max(num1, Math.max(num2, num3));
  } else if (query.includes("What is ") && query.includes(" plus ")) {
    let break1 = query.split("What is ");
    let numbers = break1[1].split(" plus ");
    let num1 = Number(numbers[0]);
    let num2 = Number((numbers[1].split("?"))[0]);

    return "" + (num1 + num2);
  }

  return "";
}
