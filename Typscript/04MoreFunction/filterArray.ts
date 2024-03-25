
function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
    const filteredArray: T[] = [];

    for (const item of arr) {
        if (predicate(item)) {
            filteredArray.push(item);
        }
    }

    return filteredArray;
}

const numbers: number[] = [1, 2, 3, 4, 5];
const filteredNumbers: number[] = filterArray(numbers, num => num % 2 === 0);
console.log("Filtered numbers:", filteredNumbers); // Output: Filtered numbers: [2, 4]

const words: string[] = ["apple", "banana", "cherry", "orange"];
const filteredWords: string[] = filterArray(words, word => word.length > 5);
console.log("Filtered words:", filteredWords); // Output: Filtered words: ["banana", "cherry", "orange"]
