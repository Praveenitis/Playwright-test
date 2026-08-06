let row = ""

for(let i=1;i<=5;i++){ //row
    row = ""

    for(let j=1;j<=5-i;j++){ //spaces
    row += " "
    }

      for(let k=1;k<=i;k++){ //stars
        row+="*"
    }

    console.log(row)


}


  

