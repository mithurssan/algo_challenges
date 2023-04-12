//1. Implement a capitalise function

const capitalise = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

console.log(capitalise("hEllo"));
console.log(capitalise("avGeroU"));

//2. Implement a swapcase function

const swapcase = (str) => str.split("").map((char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())).join("");

console.log(swapcase("JournAl"));
console.log(swapcase("lAfOSSEaCADEMY"));

//3. Implement 2 reverse functions
//a. using for

function reverse1(str) {
    let reverse = [];
    for (let i = str.length-1; i >= 0; i--) {
        reverse.push(str[i]);
    }
    return reverse.join("");
}

console.log(reverse1("olleh"));
console.log(reverse1("tpircSavaJ"));

//b. using for in

const reverse2 = function (str) {
    let reverse = [];
    for (char in str) {
        reverse.push(str[(str.length - char) - 1]);
    }
    return reverse.join("");
}

console.log(reverse2("olleh"));
console.log(reverse2("tpircSavaJ"));

//4. Implement an upcase function using Array.prototype.forEach()

const upcase = (arr) => {
    arr.forEach((element, i) => arr[i] = element.toUpperCase());
    return arr;
}

console.log(upcase(["a", "b", "c", "d"]));

//5. Implement downcase using Array.prototype.map()

const downcase = (arr) => arr.map(element => element.toLowerCase());

console.log(downcase(["A", "B", "C", "D"]));

//6. Implement evens using Array.prototype.filter()

const evens = (arr) => arr.filter((element) => element % 2 == 0);

console.log(evens([1, 2, 3, 45, 79, 8]));

//7. Implement howIndex using Array.prototype.indexOf()

const howIndex = (arr) => arr.indexOf("how");

console.log(howIndex([ 'hello', 'how', 'are', 'you' ]));

//8. Implement a third reverse function using Array.prototype.join() and String.prototype.split()

const reverse3 = (str) => str.split("").reverse().join("");

console.log(reverse3("olleh"));
console.log(reverse3("tpircSavaJ"));

//9. Implement max and shortestString using Array.prototype.reduce()

const max = (arr) => arr.reduce((a, b) => Math.max(a,b));

console.log(max([1, 297, -73, 99, 10]));

const shortestString = (arr) => arr.reduce((a, b) => Math.min(a.length, b.length) ? a : b);

console.log(shortestString(['I', 'prefer', 'marshmallow', 'to', 'oreo']));

//10. Implement a sort function without using Array.prototype.sort()

const sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];
console.log(sort(months));

//11. Implement sortedNames Using Array.prototype.sort()

const sortedNames = (arr) => arr.map(element => element.toLowerCase()).sort();

const trainers = ["Ree", "romeo", "emile", "sergi"]
console.log(sortedNames(trainers));

//12. Implement countLetters that will print

const countLetters = (str) => {
    const count = {};
    const lower = str.toLowerCase();

    for (char in str) {
        const c = lower[char];
        if (!(c.match(/[a-z]/i))) {
            continue;
        }
        if (!count[c]) {
            count[c] = 1;
        }
        else {
            count[c]++;
        }
    }

    return count;
}

const sentence = "Hello I am a random sentence, we have learnt HTML, CSS, git and GitHub so far. Thanks"
console.log(countLetters(sentence));
