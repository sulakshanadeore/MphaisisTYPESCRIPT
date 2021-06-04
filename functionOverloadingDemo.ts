class UserProducts {
    
    addProduct(pid:number,pname:string):void;
    addProduct(pname:string,pid:number):string;
    addProduct(pname:string,pid:number,price:number):string;

     addProduct(pname:any,pid:any):any{
console.log( pname +" " + pid);

    }


}

let pdata=new UserProducts();
pdata.addProduct(12,"Tea");
pdata.addProduct("Coffee",13);

