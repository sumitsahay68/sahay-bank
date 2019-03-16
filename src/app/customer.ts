export class Customer{
    cid: number;
    pwd: string;
    cpwd: string;
    firstName: string;
    lastName: string;
    gender: string;
    dob: Date;
    fname: string;
    email: string;
    address: string;
    addr_proof: File;

    constructor(addr_proof: File,address: string,
                cpwd:string,cid: number,dob: Date,pwd: string,
                firstName: string,lastName: string,
                gender: string,fname: string,
                email: string)
    {   
        this.cid=cid;
        this.pwd=pwd;
        this.cpwd=cpwd;
        this.firstName=firstName;
        this.lastName=lastName;
        this.gender=gender;
        this.dob=dob;
        this.fname=fname;
        this.email=email;
        this.address=address;
        this.addr_proof=addr_proof;
    }
}


//previous order
/*
cid: number,pwd: string,cpwd:string,
                firstName: string,lastName: string,
                gender: string,dob: Date,fname: string,
                email: string,address: string,addr_proof: File
*/