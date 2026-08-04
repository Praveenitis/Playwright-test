var count = {}

var str = "hello"

for(let ch of str){
    if(count[ch]==undefined){
        count[ch] =1
        
    } else {
        count[ch]++
    }


}

console.log(count)