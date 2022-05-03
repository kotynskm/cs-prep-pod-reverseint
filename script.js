function reverseInt(num) {
    // initialize digits array
    let arrayOfDigits = [];
  
     // repeat while int > 0
    while (num > 0) {
        // use modulus 10 to get the last digit of the number
    arrayOfDigits.push(num % 10);
        // divide num by 10 to get to the next number
    num = Math.floor(num / 10);
}
   // join array into a string, and then turn into number
    let joined = arrayOfDigits.join("");
    let finalNum = Number(joined);
    return finalNum;
}
function reverseIntTests() {
  console.log(reverseInt(1234), ' -> ', 4321);
  console.log(reverseInt(1), ' -> ', 1);
  console.log(reverseInt(87654), ' -> ', 45678);
  console.log(reverseInt(13542), ' -> ', 24531);
}

reverseIntTests() // uncomment to test

