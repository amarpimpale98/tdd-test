    import {add} from './tddCalculator'

    test("Should return 0 for empty string",()=>{
        expect(add("")).toBe(0)
    })

    test("should return the number itself for a single number", () => {
      expect(add("1")).toBe(1);
    });

    test("should return the sum of two numbers separated by a comma", () => {
      expect(add("1,2")).toBe(3);
    });

    test("should return the sum of any amount of numbers", () => {
      expect(add("1,2,3,4")).toBe(10);
      expect(add("10,20,30")).toBe(60);
    });

    test("should handle newlines as delimiters", () => {
      expect(add("1\n2,3")).toBe(6);
    });

    test("should support custom delimiters", () => {
      expect(add("//;\n1;2")).toBe(3); // Custom delimiter ";"
      expect(add("//|\n1|2|3")).toBe(6); // Custom delimiter "|"
    });

    test("should throw an exception for negative numbers", () => {
      expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
      expect(() => add("1,-2,-3")).toThrow(
        "negative numbers not allowed: -2,-3"
      );
    });





