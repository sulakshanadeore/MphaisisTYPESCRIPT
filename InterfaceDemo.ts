interface IProducts
{
//prodid:number;
//prodname:string;
 AcceptProductData():void;


}


class Products implements IProducts {
pid:number;
pname:string;
    constructor(prodid:number,prodname:string)
    {
this.pid=prodid;
this.pname=prodname;

    }
    
    ShowAcceptedProductDetails():void{

        this.AcceptProductData();
    }

    AcceptProductData():void{
console.log(" The following details were accepted");
console.log(this.pid);
console.log(this.pname);
    }

}

var p=new Products(12,"Tea");
p.ShowAcceptedProductDetails();
