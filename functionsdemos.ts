function f1() {
    console.log("this is non returning function ");
}
function greet() {
    return "Hello World";
}


function f3(n1,n2):any{
    return n1+n2;
}

function f4(id:number,empname:string,age?:number) {
    console.log(id);
    console.log(empname);
    console.log(age);
}

function f6(...nums:number[])
{

var n;
var sum:number=0;
for (let index = 0; index < nums.length; index++) {
   sum=sum+nums[index];
    
}
console.log(sum);

}

f1();
var myvar = greet();
console.log(myvar);
// var ans:number=f3(10,20);
// console.log(ans);

console.log(f3("Hello","Mphasis"));
f4(1,"Shwetha");
f6(10,20,30,40);