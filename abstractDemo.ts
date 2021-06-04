abstract class Person
{
personid:number;
personname:string;

PrintDetails():void{

    console.log(this.personid);
    console.log(this.personname);
}

abstract AcceptDetails(pid:number,pname:string):void;

}

class Student extends Person{
    AcceptDetails(pid:number,pname:string):void
    {
        this.personid=pid;
        this.personname=pname;
// console.log(this.personid);
// console.log(this.personname);
    }


}

var stud=new Student();
stud.AcceptDetails(12,"Ajay");
stud.PrintDetails();