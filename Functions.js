findOdd(10)
findOdd(20)
findOdd(15)

findFactorial(10)
findFactorial(15)

//Functions

findFactorial

function findFactorial(n){

    let res =1;
    for(let i=1;i<=n;i++){
        res= res*i        
    }
    console.log(res);
}

function findOdd(n){

    // let n = 10
    if (n%2==1) {
        console.log(n+" is an odd number");        
    }else{
        console.log(n+" is an even number");        
    }
}

