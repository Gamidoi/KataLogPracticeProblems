

export function StringCalculator(stringOfNumbers: string) {
    if (stringOfNumbers.length === 0) {return 0}
    let calculateArray: string[] = [stringOfNumbers];
    calculateArray = useDelimiter(",", calculateArray)
    calculateArray = useDelimiter("\n", calculateArray)

    if (stringOfNumbers.startsWith("//")) {
        let delimiter: string = stringOfNumbers;
        delimiter = delimiter.split("\n")[0];
        delimiter = delimiter.substring(2);
        calculateArray = useDelimiter(delimiter, calculateArray)
        if (delimiter.startsWith("[") && delimiter.endsWith("]")) {
            let delimiterArray = delimiter.split("]");
            delimiterArray.forEach(innerDelimiter => {
                if (innerDelimiter != "") {
                    let realDelimiter = innerDelimiter.substring(1);
                    calculateArray = useDelimiter(realDelimiter, calculateArray);
                }
            })
        }
    }
    let negativeValues : number[] = [];
    let sum = 0;
    calculateArray.forEach((entry) => {
        let strippedOfAlpha = removeAlphabet(entry)
        if (strippedOfAlpha != "" && !isNaN(parseInt(strippedOfAlpha)) && parseInt(strippedOfAlpha) <= 1000) {
            let number = parseInt(strippedOfAlpha);
            sum += number;
            if (number < 0) {
                negativeValues.push(number);
            }
        }
        sum += isTextNumber(entry.replace(/ /g, ""));
    })
        if (negativeValues.length > 0) {
            throw ('negatives not allowed:' + negativeValues.toString())
        }
    return sum;
}

function useDelimiter(delimiter: string, calculateArray: string[]){
    let calculateArrayHolder: string[] = []
    calculateArray.forEach((element) => {
        let delimiterSplitArray: string[] = element.split(delimiter);
        delimiterSplitArray.forEach((item) => {
            calculateArrayHolder.push(item);
        })
    })
    return calculateArrayHolder;
}
function isTextNumber(entry: string): number {
    if (entry.toLowerCase() == "one"){return 1}
    if (entry.toLowerCase() == "two"){return 2}
    if (entry.toLowerCase() == "three"){return 3}
    if (entry.toLowerCase() == "four"){return 4}
    if (entry.toLowerCase() == "five"){return 5}
    if (entry.toLowerCase() == "six"){return 6}
    if (entry.toLowerCase() == "seven"){return 7}
    if (entry.toLowerCase() == "eight"){return 8}
    if (entry.toLowerCase() == "nine"){return 9}
    if (entry.toLowerCase() == "ten"){return 10}
    if (entry.toLowerCase() == "eleven"){return 11}
    if (entry.toLowerCase() == "twelve"){return 12}
    return 0
}
function removeAlphabet(entry: string): string{
    let removedAlphabet: string = entry.replace(/ /g, "");
    removedAlphabet = removedAlphabet.replace(/a/ig, "");
    removedAlphabet = removedAlphabet.replace(/b/ig, "");
    removedAlphabet = removedAlphabet.replace(/c/ig, "");
    removedAlphabet = removedAlphabet.replace(/d/ig, "");
    removedAlphabet = removedAlphabet.replace(/e/ig, "");
    removedAlphabet = removedAlphabet.replace(/g/ig, "");
    removedAlphabet = removedAlphabet.replace(/g/ig, "");
    removedAlphabet = removedAlphabet.replace(/h/ig, "");
    removedAlphabet = removedAlphabet.replace(/i/ig, "");
    removedAlphabet = removedAlphabet.replace(/j/ig, "");
    removedAlphabet = removedAlphabet.replace(/k/ig, "");
    removedAlphabet = removedAlphabet.replace(/l/ig, "");
    removedAlphabet = removedAlphabet.replace(/m/ig, "");
    removedAlphabet = removedAlphabet.replace(/n/ig, "");
    removedAlphabet = removedAlphabet.replace(/o/ig, "");
    removedAlphabet = removedAlphabet.replace(/p/ig, "");
    removedAlphabet = removedAlphabet.replace(/q/ig, "");
    removedAlphabet = removedAlphabet.replace(/r/ig, "");
    removedAlphabet = removedAlphabet.replace(/s/ig, "");
    removedAlphabet = removedAlphabet.replace(/t/ig, "");
    removedAlphabet = removedAlphabet.replace(/u/ig, "");
    removedAlphabet = removedAlphabet.replace(/v/ig, "");
    removedAlphabet = removedAlphabet.replace(/w/ig, "");
    removedAlphabet = removedAlphabet.replace(/x/ig, "");
    removedAlphabet = removedAlphabet.replace(/y/ig, "");
    removedAlphabet = removedAlphabet.replace(/z/ig, "");
    return removedAlphabet;

}