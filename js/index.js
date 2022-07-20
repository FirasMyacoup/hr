"use strict"

const allEmployees=[];

function Employeeinfo(employeeID,fullname,department,level,imageURL){

    this.employeeID=employeeID;
    this.fullname=fullname;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    
   
    
    allEmployees.push(this);

}

  
Employeeinfo.prototype.salary=function(){

(this.level.toLowerCase()==="senior")?this.salary = getRndInteger(1500,2000):
(this.level.toLowerCase()==="mid senior")?this.salary = getRndInteger(1000,1500):
this.salary = getRndInteger(500,1000)

allEmployees.push(this.salary);

}


    
      
    Employeeinfo.prototype.netsalary=function(){

        this.netsalary=Math.floor(this.salary - (this.salary * 0.075));
        allEmployees.push(this.netsalary);

    }


    Employeeinfo.prototype.printinfo= function(){
        document.write(`<p> <br> fullname: ${this.fullname}: first salary:   ${this.salary} : net salary = ${this.netsalary}</p>`)
        
        

}




const GhaziSamer = new Employeeinfo(1000,"GhaziSamer","Administration","senior","img","");
const 	LanaAli = new Employeeinfo(1001,"LanaAli","Finance","senior","img","");
const  TamaraAyoub= new Employeeinfo(1002,"TamaraAyoub","Marketing","senior","img","");
const  SafiWalid= new Employeeinfo(1003,"SafiWalid","Administration","Mid-Senior","img","");
const OmarZaid = new Employeeinfo(1004,"OmarZaid","Development","senior","img","");
const RanaSaleh = new Employeeinfo(1005,"RanaSaleh","Development","Junior","img","");
const  HadiAhmad= new Employeeinfo(1006,"HadiAhmad","Finance","Mid-Senior","img","");

 

for( let i=0; i <  allEmployees.length; i++){
    if(typeof allEmployees[i]!=="number"){
        console.log(i,allEmployees[i]);


    allEmployees[i].salary();
    allEmployees[i].netsalary();
    allEmployees[i].printinfo();
}
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}







 




