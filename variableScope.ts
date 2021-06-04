//Global------declared outside prorgramming constructs. Available anywhere within the code
//Local----declared within constrcts like methods,loops etc. Only accessible where they are declared
//class------fields.Class variables, declared in the class but outside the methkd. These can be accessed using the objects of the class.
//If static can be accessed with the class name.
function f1() {
    console.log("this is non returning function ");
}
function greet():string {
    return "Hello World";
}


var g_var=100;
class Demo1 {
    c_num1=11;
    static sval=1000;






m1():void{

    var local_var=10;
    console.log(local_var);
}


m2():void{
    var i=100;
    var res=i > 10 ? "i is greater than 10" : "i is smaller than 10";
console.log(res);


}

m3():void{
var no1=100;

if (no1>10) {
    console.log('greater than 10');
}
else
{
    console.log('smaller than 10');

}
}


m4():void{
var g:string='C';
switch (g) {
    case 'A':
        console.log('U have typed A');
        break;
 case 'B':
    console.log('U have typed B');
     break;
    default:
        console.log('U have not typed A or B');
        break;
}





}
fordemo():void{
var i=10;
var cnt=1;
for(cnt=1;cnt<=5;cnt++)
{
console.log(i);
i=i+10;
}
    
}

whiledemo():void{
console.log("----------------");
var i=10;
var cnt=1;
while(cnt<=5){
console.log(i);
i+=10;
cnt++;

}

}




forIndemo():void{
var i:any;
var arr:any="1 2 3";
console.log("------------")
for (i in arr)
{
console.log(arr[i]);
}

console.log("--------------------")
}




}
console.log("Global variable =" + g_var);
var obj=new Demo1();
console.log("Class variable - " + obj.c_num1);
console.log("static var-  " + Demo1.sval);
obj.m1();
obj.m2();
obj.m3();
obj.m4();
obj.fordemo();
obj.whiledemo();
obj.forIndemo();
f1();
var myvar=greet();
console.log(myvar);