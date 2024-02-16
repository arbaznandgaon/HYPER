// console.log("Hi")

//  Tuples 

let t1: [string , boolean ,number] = [ "Arbaz" , true , 24];
let t2 :(string | number | boolean)[]  = [ "Arbaz" , 24 ,true];

// console.log(t1[0])


//  Type Declaration
type ArrType = (string | number | boolean)[] ;
let t3 : ArrType  = [ "Arbaz" , 24 ,true];

// type Student = {
//     name : string ,
//     id : string,
//     email : string
// }

// Interface Declaration 
interface Student {
    name : string ,
    id : number,
    email : string
}
let student : Student  = {
    name : "Ejaz",
    id: 1 ,
    email : 'test@gmail.com'
}

enum Score {
        A=25 ,B ,C , D ,E
    }
    
    // console.log(Score.B)

    //optional keys
    type AAA = string | boolean;

type Student2 = {
    name : string ,
    id : AAA ,
    email?: string
}


let student2 : Student2  = {
    name : "Ejaz",
    id: true ,
    email : '2'  // try assigning a number or boolean to  throw an error
}

//  Literal types 

interface User {
    name : string ,
    id : AAA ,
    email : string ,
    role : 'admin' | 'qqq' 
}


let user :User = {
    name : "Anmol",
    id : "5" ,
    email : 'test@gmail.com',
    role : 'qqq'
}

//  Functions

let add = (a:number , b:number) : number => {
    return a+b
 }
 
 type MathFunction = (a:number ,b:number ) => number
 
 let sub : MathFunction = (a ,b) => {
     return a-b
 }
 
 interface MathFunction2 { (a:number ,b:number ) : number}
 
 let multiply : MathFunction2 = (a ,b) => {
     return a * b
 }
//  console.log(sub(2,3))

// Void Return
let voidfn = (a:string) : void  => {
    console.log(a)
}

// never return 
let Neverfn = (a:string) => {
   console.log(a)
   while(true){
    console.log(a)

   }
}
