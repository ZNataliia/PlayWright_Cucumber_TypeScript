function checkSign(myMumber: number){
    if(myMumber>0){
        console.log("Positive")
    }
    else if(myMumber<0){
        console.log("Negative")
    }
    else if(myMumber==0){
        console.log("Zero")
    }
    else console.log("input error")
    
};

checkSign(0);