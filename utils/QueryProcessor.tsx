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
  } else if (query.includes("What is ") && query.includes(" multiplied by ")) {
    let break1 = query.split("What is ");
    let numbers = break1[1].split(" multiplied by ");
    let num1 = Number(numbers[0]);
    let num2 = Number((numbers[1].split("?"))[0]);

    return "" + (num1 * num2);
  } else if (query.includes("Which of the following ") && query.includes(" square and a cube: ")) {
    let break1 = query.split("Which of the following numbers is both a square and a cube: ");
    let numbers = break1[1].split(", ");
    let ans = ""

    for (let i=0; i<numbers.length; i++) {
      if (i == numbers.length - 1) {
        let num = Number((numbers[i].split("?"))[0]);
        if (Number.isInteger(Math.sqrt(num)) && Number.isInteger(Math.cbrt(num))) {
          ans += num + ", ";
        }

      } else {
        let num = Number(numbers[i]);
        if (Number.isInteger(Math.sqrt(num)) && Number.isInteger(Math.cbrt(num))) {
          ans += num + ", ";
        }
         
      }
    }

    return ans.substring(0, ans.length-2);
  }

  return "";
}
