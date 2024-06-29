for (var i=0; i<6;i++){
    var line = "";
    for (var j=0; j<6;j++){
        if(i===0 && j%3!=0) || (i===1 && j%3===0) || (i<6 && i-j===2) || (i<6 && i+j===8){
            line = line + "*";
        } else {
            line = line + " ";
        }
    }
    console.log(line);
}