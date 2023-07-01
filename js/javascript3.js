// var a = "Assalam o Alaikum"
// var b= 313541
// var c= true
// or

let a,b,c;
a = "Assalam o Alaikum";
b= 36;


console.log(a);
console.log(b);

a= "jnj";
console.log(a);

d="hello ";
e="world"
c= d + e;
console.log(c);

f=b+d;
console.log(f);

g=true;
h=b+g; /* adding a number and boolean*/ 
console.log(h);


i= 5;
function mul(a,b){
    return a * b;
}

console.log(mul(b,i));


function printResult(result){
    console.log(result);
}
function printResultSuffix(result){
    console.log(result + "suffix");
}



function output(a,b,pr){
    var r= a+b;
    pr(r);
}

output(5,7,printResult);
output(8,7,printResultSuffix);

/*Bhai line  and line 53 both will call output function and after performing a+b function passed from line 52 will continue
its route to line 38 and function passed from line 53 will continue its route to line 41 regardless of what secondary function
is written in line 49. It will always follow line 52 and 53 functions wich are inside brackets*/ 

