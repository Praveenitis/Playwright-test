let row = ""

for(let i=1;i<=5;i++){ //row
    row = ""

    for(let j=1;j<=5-i;j++){ //spaces
    row += " "
    }

      for(let k=1;k<=2*i-1;k++){ //stars
        row+="*"
    }


}

for(let i=1;i<=5;i++){ //row
    row = ""

    for(let j=5;j<=j-i;j++){ //spaces
    row += " "
    }

      for(let k=1;k<=2*i-1;k++){ //stars
        row+="*"
    }


}



  

