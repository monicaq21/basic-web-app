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

    let sum = 0
    for (let i=0; i<numbers.length; i++) {
      let num = 0
      if (i == numbers.length - 1) {
        num = Number((numbers[i].split("?"))[0]);
      } else {
        num = Number(numbers[i]);
      }
      sum += num
    }
    return "" + sum;
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

    // Which of the following numbers are primes: 70, 17, 73, 74, 98?
    if (ans == "") return ""
    return ans.substring(0, ans.length-2);

  } else if (query.includes("Which of the following ") && query.includes(" primes: ")) {
    let break1 = query.split("Which of the following numbers are primes: ");
    let numbers = break1[1].split(", ");
    let ans = ""

    for (let i=0; i<numbers.length; i++) {
      let num = 0
      if (i == numbers.length - 1) {
        num = Number((numbers[i].split("?"))[0]);
      } else {
        num = Number(numbers[i]);
      }

      let isPrime = true;
      for (let l=2; l<=Math.ceil(Math.sqrt(num)); l++) {
        if (num % l == 0) {
          isPrime = false
          break
        }
      }

      if (isPrime) {
        ans += num + ", ";
      }
    }

    if (ans == "") return ""
    return ans.substring(0, ans.length-2);
  } else if (query.includes("What is ") && query.includes(" minus ")) {
    let break1 = query.split("What is ");
    let numbers = break1[1].split(" minus ");
    let num1 = Number(numbers[0]);
    let num2 = Number((numbers[1].split("?"))[0]);

    return "" + (num1 - num2);
  } else if (query.includes("to the power of")) {
    let break1 = query.split("What is ");
    let numbers = break1[1].split(" to the power of ");
    let num1 = Number(numbers[0]);
    let num2 = Number((numbers[1].split("?"))[0]);

    return "" + (num1 ** num2);
  }


  return "";
}

