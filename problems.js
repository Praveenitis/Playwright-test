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










