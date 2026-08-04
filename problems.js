//merge arrays, remove dup and sort

var arr1 = [5,4,3,2,1]
var arr2 = [4,5,3,1,2]

for(let i=0;i<arr2.length;i++){
    arr1.push(arr2[i]);
}

//console.log(arr1);

var result = []
for(let j=0;j<arr1.length;j++){
    if(result.includes(arr1[j])){
        continue;
    }
    result.push(arr1[j]);
    
}
result.sort((a,b) => a-b)

console.log(result)

//first non-repeating element

var arr = [1,2,3,4,2,5,4]
var isRepeat = false;

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]!==arr[j]){
            isRepeat = true;

        } 
    }
    if(isRepeat){
        console.log(arr[i])
        break
    }
}

//FACTORIAL

function fact(n){
    if(n==0 || n==1){
        return 1
    } 

    return n*fact(n-1)
}
console.log(fact(5))

//OCCURANCES

var arr = [1,2,3,4,5,6,7,8]
var count = 0;

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] + arr[j] === 10){
            count++;
        }
    }
}

console.log(count)


//Anagram 

function sortstr(str){
    

    return str.split('').sort().join('')
}

var str1 = "listen"
var str2 = "silent"

var sortedstr1 = sortstr(str1)
var sortedstr2 = sortstr(str2)

if(sortedstr1===sortedstr2){
    console.log("Anagram")
} else {
    console.log("Not a Anagram")
}

//Anagram - optimized approach
str1count = {}
str2count = {}
let isAnagram = true;

var str1 = "listen"
var str2 = "hello"

for(let ch1 of str1){
    if(str1count[ch1] == undefined){
        str1count[ch1]=1
    } else {
        str1count[ch1]++
    }
}

for(let ch2 of str2){
    if(str2count[ch2] == undefined){
        str2count[ch2]=1
    } else {
        str2count[ch2]++
    }
}

for(let key in str1count){
    if(str1count[key]!==str2count[key]){
        isAnagram = false;
        break;
        
    } 
}

if(isAnagram){
    console.log("Anagram")
} else {
    console.log("Not a Anagram")
}

//vowels
var str = "Javascript programming language"
var strL = str.toLowerCase()
var count =0;

for(let i=0;i<strL.length;i++){
    if(str[i]=='a' || str[i]=='e'|| str[i]=='i' || str[i]=='o' || str[i]=='u' )
        count++
}

console.log(count)

//Q no 16

    var num = "1020330120"
    var result = ""
    var count = 0

    for(let val of num){
        if(val!=="0"){
            result+=val
        } 
        if(val=="0"){
            count++
        }
        


    }
    for(let i=0;i<count;i++){
        result+="0"
    }


console.log(result)
console.log(count)











