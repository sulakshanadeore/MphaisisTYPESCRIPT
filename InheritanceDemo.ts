class EmployeeMaster
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


public CalculateSal():number{
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

class Manager extends EmployeeMaster {
    _mgrid:number;
    _mgrname:string;
    constructor(EmpID:number,EmpName:string,Sal:number,mgrid:number,mgrname:string,Deptno?:number) {
        super(EmpID,EmpName,Sal,Deptno);

        this._mgrid=mgrid;
        this._mgrname=mgrname;
    }

//     public CalculateSal():number{
// return 1000;

//     }


    PrintDetails():void{
console.log(this._empid);
console.log(this._ename);
console.log(this._sal);
console.log(this._deptno);
console.log(this._mgrid);
console.log(this._mgrname);


    }
}

var emp1=new EmployeeMaster(101,'Harsh',30000,10);
var mgr=new Manager(emp1._empid,emp1._ename,emp1._sal,50,'Uma',emp1._deptno);
console.log("---------------");
console.log('Employee class calculate salary' + emp1.CalculateSal());
console.log('Mgr class calcualtesalary' + mgr.CalculateSal)

mgr.PrintDetails();