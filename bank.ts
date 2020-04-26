class Account {

    accid:number ;
    names:string;
    balance:number;

constructor(accid:number,names:string,balance:number)
{
    this.accid=accid;
    this.names=names;
    this.balance=balance;
}

disp(): number {
    return this.balance;
    } 

}

class SavingsAccount extends Account {

    interest:number;
    constructor(accid:number,names:string,balance:number,interest:number)
{
    super(accid,names,balance);
    this.interest=interest;
}
dispp(): number {
    return this.balance ;
    } 


}

class CurrentAccount extends Account {

    cashcredit:number;

    constructor(accid:number,names:string,balance:number,cashcredit:number)
    {
        super(accid,names,balance);
        this.cashcredit=cashcredit;
    }

    disppp(): number {
        return  this.cashcredit;
        } 


}

function total () {

 
    
    let savacc=new SavingsAccount(10,"Sanket",100,10);
    let curracc= new CurrentAccount(10 , "Sanket" , 100 , 10 );

    let sum = savacc.dispp()+curracc.disppp();
    document.write(" The sum  of money in account is : "+sum);
    console.log(sum);

}

total ();