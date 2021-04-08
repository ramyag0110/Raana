//print 10 for 5 times

//for : executing a block of code for specific number of times
//while : executing a block of code until condition failed

//print number 10 for 5 times
for (let c = 22; c <= 26; c++) {
    console.log(10);
}

//print numbers from 1 to 10
for (let c = 1; c <= 10; c++) { //c++ = c=c+1
    console.log(c);
}

//print odd numbers between 10 and 20
for (let c = 11; c <= 20; c += 2) { //c+=2 = c=c+2
    console.log(c);
}

//print numbers from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


let data = [10, 20, 30, 40, 50, 60, 70];

for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

let username = "sudhakar"

console.log(username.length);

for (let i = 0; i < username.length; i++) {
    console.log(username[i]);
}

//reverse string

//9999 : 2000*4 , 500*3, 200*2, 50*1, 20*2, 5*1, 2*2
let den = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
let amount = 9999

for(let d = 0;d<den.length;d++){
    let res = parseInt (amount / den[d]);
    console.log(res+"*"+den[d]);
    amount = amount % den[d];
}


let numberof2k = parseInt (amount / den[0]);
 console.log(numberof2k+"*"+den[0]);
 amount = amount % den[0];

// let numberof5h = parseInt(amount/den[1])
// console.log(numberof5h+"*"+den[1]);
// amount = amount % den[1];

// let numberof2h = parseInt(amount/den[2])
// console.log(numberof2h+"*"+den[2]);
// amount = amount % den[2];

// let numberof1h = parseInt(amount/den[3])
// console.log(numberof1h+"*"+den[3]);
// amount = amount % den[3];

// let numberof50 = parseInt(amount/den[4])
// console.log(numberof50+"*"+den[4]);
// amount = amount % den[4];

// let numberof20 = parseInt(amount/den[5])
// console.log(numberof20+"*"+den[5]);
// amount = amount % den[5];

// let numberof10 = parseInt(amount/den[6])
// console.log(numberof10+"*"+den[6]);
// amount = amount % den[6];

// let numberof5 = parseInt(amount/den[7])
// console.log(numberof5+"*"+den[7]);
// amount = amount % den[7];

// let numberof2 = parseInt(amount/den[8])
// console.log(numberof2+"*"+den[8]);
// amount = amount % den[8];

// let numberof1 = parseInt(amount/den[9])
// console.log(numberof1+"*"+den[9]);