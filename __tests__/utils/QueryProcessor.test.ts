import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id string', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe("yuqiq");
    });

    test('should return name string', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("mon");
    });

    test('should return max number string', () => {
        const query = "Which of the following numbers is the largest: 97, 41, 35?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("97");
    });

    test('should return sum string', () => {
        const query = "What is 66 plus 26?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("92");
    });

    test('should return sum string', () => {
        const query = "What is 20 plus 74?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("94");
    });

    test('should return product string', () => {
        const query = "What is 58 multiplied by 80?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("4640");
    });

    test('should return sqrt cbrt string', () => {
        const query = "Which of the following numbers is both a square and a cube: 3670, 1728, 1, 64, 4198, 4176, 1072?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("1, 64");
    });

    test('should return prime string', () => {
        const query = "Which of the following numbers are primes: 4, 78, 89, 71, 50?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("31, 13");
    });

    test('should return minus string', () => {
        const query = "What is 60 minus 64?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("-4");
    });

    test('should return minus string', () => {
        const query = "What is 43 minus 75?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("-32");
    });

    test('should return sums string', () => {
        const query = "What is 43 plus 75 plus 19?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("137");
    });

    
    



    
    

    
});