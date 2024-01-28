// const udemy = 'udemy';
// const letters = [...udemy];
// console.log(letters);

// const boys = ['john', 'sam', 'fred'];
// const girls =['stacy', 'joices','joy'];
// const bestfriend = 'kitten';

// const friends = [...boys, ...girls, bestfriend];
// console.log (friends);

// const person = {name: 'John', job: 'development'};
// const Newperson = {...person, name: 'Sandy', age : 30};
// console.log (person);
// console.log (Newperson);
const numsArray = [11, 3, 7, 9, 5];11
const targetToFind = 11;


const findTwoSum = (nums, target) => {
  for(let p1 = 0; p1 < nums.length; p1++) {
    
    const numberToFind = target - nums[p1];

    for(let p2 = p1 + 1; p2 < nums.length; p2++) {
      if(numberToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }

  return null;
};

console.log(findTwoSum(numsArray, targetToFind));

