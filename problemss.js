const str = "javascript";

const count = {};

for (let char of str) {

    if (count[char]) {
        count[char]++;
    } else {
        count[char] = 1;
    }
}

console.log(count);



  

