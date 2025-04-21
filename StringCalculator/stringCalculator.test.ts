import {StringCalculator} from './stringCalculator';


test("testing for basic case, number comma number", () => {
    expect(StringCalculator("1,1")).toBe(2);
})

test("testing an uncertain quantity of numbers", () => {
    expect(StringCalculator("1,1,0, 6, 24")).toBe(32);
    expect(StringCalculator("")).toBe(0);
    expect(StringCalculator("1,2,3,4,5")).toBe(15);
    expect(StringCalculator("1,,3,4,5")).toBe(13);
})
test("testing new line in place of commas", ()=> {
    expect(StringCalculator("1\n2")).toBe(3);
    expect(StringCalculator("1,2\n3,4\n5")).toBe(15);
})
test("delimiters", () => {
    expect(StringCalculator("//;\n1;2")).toBe(3);
    expect(StringCalculator("//poop\n1\n2poop8,7,9poop10")).toBe(37);
})
test("disallowing negatves", () => {
    expect(() => StringCalculator("5, -3, 8\n-6")).toThrow("negatives not allowed:-3,-6");
})
test("ignoring big numbers, over 1000", () => {
    expect(StringCalculator("1,20,3,4000,5")).toBe(29);
    expect(StringCalculator("137546,20652435,34623,4000")).toBe(0);
})
test("all the current tests combined", () => {
    expect(StringCalculator("//break\n1break2,3\n4,5, , 10break4000,")).toBe(25);
    expect(() => StringCalculator("//break\n1break2,3\n4,5, , 10break4000,-5")).toThrow("negatives not allowed:-5");
})
test("multiple delimiters", () => {
    expect(StringCalculator("//[*][%]\n1*2%3")).toBe(6);
    expect(StringCalculator("//[poop][*][D]\n1\n2poop8,7,9poop10D4*6")).toBe(47);
})
test("random words in the input string", () => {
    expect(StringCalculator("1,2, sheep,3,4,wolf,5, sheep")).toBe(15);
})
test("text numbers, up to 12, twelve", () => {
    expect(StringCalculator("one,Two,thREE, four,five")).toBe(15);
    expect(StringCalculator("SIX,Se V eN,e iGh t, NinE,   t    e    n, ")).toBe(40);
    expect(StringCalculator("eleVEN, TwelvE")).toBe(23);
})
test("numbers hidden in text", () =>{
    expect(StringCalculator("1,tool2,poo3p,4boo,ONE5, re1gre1ts, 1poop2")).toBe(38);
})