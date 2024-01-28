//Extracts every second word from the reversed array using the .slice() method.
let str1 = "After the interview he got a job"
console.log (str1);
let arr1 = str1.split(" ");
console.log(arr1);
let a_order = arr1.sort();
console.log(a_order);
let reversearr = a_order.reverse();
console.log(reversearr);

let extractarr = [];
for (let i = 0; i < reversearr.length; i++) {
    if (i % 2 === 1) {
        extractarr.push(reversearr[i])

    }
}
console.log(extractarr);
