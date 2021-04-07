let data =[10,20,30,40,50];
data.forEach ((v) =>console.log(v));

//short for syntax

//anonynomous function short form :()={}
// () is optional if function having  single parameter
//{} is optional if function having single line
// if {} not used then that single line become return value
//this form is called lamda expression

function calculator (x,y,act){
    return act(x,y);
}

console.log(calculator(2,3,function(a,b){
    return a+b
}))

