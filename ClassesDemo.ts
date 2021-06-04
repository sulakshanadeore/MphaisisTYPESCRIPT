class Employee
{
_empid:number;
_ename:string;
_sal:number;
_deptno:number;
// constructor(EmpID:number,EmpName:string,Sal:number,Deptno:number)
// {


// }

constructor(EmpID:number,EmpName:string,Sal:number,Deptno?:number)
{
this._empid=EmpID;
this._ename=EmpName;
this._sal=Sal;
this._deptno=Deptno;
console.log(this._empid);
console.log(this._ename);
}

 CalculateSal():number{
var _salary:number;
_salary=this._sal;
if (_salary>10000 && _salary<=20000) {
    this._sal=_salary + (_salary*.10);
}
else  {
    this._sal=_salary + (_salary*.5);


}
_salary=this._sal;
return _salary;


}

}

var emp=new Employee(101,'Payal',20000);
var c_sal:number;
c_sal=emp.CalculateSal();
console.log(c_sal);