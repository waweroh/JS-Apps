
function isAnagram(str1, str2){
    let a = str1.split(",").sort().join("");
    let b = str2.split(",").sort().join("");
    if (a.length === b.length) {
        return (true);
    } else{
        return (false);
    }

};

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));