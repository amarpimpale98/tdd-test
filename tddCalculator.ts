export function add(numbers: string): number {
    // for if string is blank
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

// for if string contains different delimiters

  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterEnd);
    delimiter = new RegExp(
      customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    numbers = numbers.substring(delimiterEnd + 1);
  }
  const numArray = numbers.split(delimiter);
  const negatives: string[] = [];

  //   checking negatives

  const sum = numArray.reduce((acc, num) => {
    const parsedNum = parseInt(num, 10);
    if (parsedNum < 0) {
      negatives.push(num);
    }
    return acc + parsedNum;
  }, 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return sum;
}
