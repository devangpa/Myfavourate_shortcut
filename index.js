// // -------> Mastering this 
// // class devang {
// //     constructor(hello){
// //         var m = this.hello;
// //         console.log(m)
// //     }
// // }
// // var cool="keunal"
// // var k =new devang(cool);
// // console.log(k)
// // console.log(2>1);
// // console.log(2!=1);

// // console.log(0===false);
// // console.log(null=undefined);  //Invalid left-hand side in assignment
// // console.log(null==undefined)    //true
// // console.log(null===undefined)   //false



// // console.log(0=null);   /Invalid left-hand side in assignment

// // console.log(0==null)  //flase


// // console.log("devang"==="devang");  //true  check the value  of string




// // // ---> function details 


// // // (function devang(){
// // //    console.log(" devang patel")
// // // })()

// // //  function name(firstName,lastName){
// // //     fullName = firstName + lastName;
// // //  return console.log(fullName);
// // // }
// // // name(Devang,Patel)
// // // function showMessage(from, text) { // arguments: from, text
// // //     console.log(from + ': ' + text);
// // //   }
  
// // //   showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
// // //   showMessage('Ann', "What's up?");


// // // function sum(a, b) {
// // //     return a + b;
// // //   }
  
// // //   let result = sum(1, 2);
// // //   console.log( result ); 

// // // function checkAge(age) {
// // //     if (age > 18) {
// // //       return true;
// // //     } else {
// // //       return confirm('Do you have permission from your parents?');
// // //     }
// // //   }
  
// // //   let age = prompt('How old are you?', 18);
  
// // //   if ( checkAge(age) ) {
// // //     alert( 'Access granted' );
// // //   } else {
// // //     alert( 'Access denied' );
// // //   }




// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);



// let sub = (a,b) =>{  console.log(a+b)};  sub("devang","Patel");


// let use ="devo"
//     ,age = 27
//     ,message = "cool"

//     console.log(message);

// let k = true;
// let b = "kasdhaskjd"*1
// console.log(typeof(b))


// let m = (age)=>{
//     if (age<19){
//        console.log("you are to small")
//     }
//     else{
//         console.log("you are cool")
//     }
// }
// m(23);



// ------> ternary opratior consitions
// age = 26;
// let mk = (age<19)? 'hi cool':
//         (age>29)? 'this is cool':
//         'never cool'
// console.log(mk);



// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }



// let age = 23 ;

// switch(age){
//     case 23 :
//         function devanga(){

//                 console.log("your age is 23");
//         };

//         break

//         case 24 :
//         function devanga(){

//                 console.log("your age is 24");
//         }

//         break

//         default:
//             cosnsole.log("this is cool");
// }




// function sum(a, b) {
//     let result = a + b;
  
//     return console.log(result) ;
//   }
// sum (1,3)



// let user ={};
// console.log(user)




const companies = [
    {name:"company One",catagory:"finance",start:1983,end:2001},
    {name:"company two",catagory:"retail",start:1988,end:2000},
    {name:"company three",catagory:"Auto",start:1987,end:2002},
    {name:"company Four",catagory:"Food",start:1986,end:2004},
    {name:"company Five",catagory:"transport",start:1986,end:2003},
    {name:"company six",catagory:"boat",start:1982,end:2003},
    {name:"company seven",catagory:"teaching",start:1983,end:2004},
    {name:"company eignt",catagory:"Automobile",start:1983,end:2007},
    {name:"company nine",catagory:"bank",start:1986,end:2010},
    {name:"company ten",catagory:"cloth",start:1984,end:2007},
    {name:"company twelve",catagory:"Mobile",start:1986,end:2002},
    {name:"company thurteen",catagory:"managments",start:1981,end:2008},
];

const age = [ 12,33,23,23,32,12,43,12,54,64,21,43,35];


// foreach

// loop data

// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

// companies.forEach(function(company){
//     console.log(company);
// })




// ------> filter the things

// let canDrink =[];

// for(let i =0;i <age.length; i++){
//     if(age[i]<=13){
//         canDrink.push(age[i]);
//     }
// }

// console.log(canDrink);

// const canDring = age.filter(function(age){
//     if(age<=21){
//         return true
//     }

// })

// const canDrink = age.filter(age => age<=27);

// console.log(canDrink);

// const retails = companies.filter(function(company){
//     if(company.catagory == "retail"){
//         return true;
//     }
// })

// // ------> result is [ { name: 'company two',catagory: 'retail',start: 1988,end: 2000 } ]
//  console.log(retails);           



// const retailCompanis = companies.filter((company)=>company.catagory ==="retails" );
// console.log(retailCompanis);

//

// const eighteens = companies.filter(company => (companies.start >=1980 && company.end <2019));

// console.log(eighteens);

// const lastTenyear = companies.filter(comapany =>(comapany.end - comapany.start >=10 ));

// console.log(lastTenyear);



// --> map 

// --------> return the new array of the data
//create Array Of Comapies Name
// const companyName = companies.map((company)=> `${company.name} [${company.start}-${company.end}]`);
// console.log(companyName);


// const agesSquery = age.map(ages => Math.sqrt(ages));
// console.log(agesSquery);

// ---> sort

// const sortcompanies = companies.sort(function(c1,c2){
//     if(c1.start > c2.start){
//         console.log(c1.start);
//         return 1
//     }else{
//         return -1;
//     }
// })
//companies by start year
// const sortcompanies = companies.sort((a,b)=>(a.start>b.start ? 1:-1))

// console.log(sortcompanies);

// const sortAnges = age.sort((a,b)=> a-b);
// console.log(sortAnges);

//reduce



// let ageSum = 0
// for( let i=0;i<age.length;i++){
//     ageSum += age[i];
// }

// console.log(ageSum);

// const ageSum = age.reduce(function(total,age){
//     return total+age;
// },0)
// console.log(ageSum);

// const ageSum = age.reduce((total,age)=> total+age ,0)
// console.log(ageSum);

//getv totle year of the companies 

// const totleSum = companies.reduce((total,company)   => ( total + (company.end - company.start)),0);
// console.log(totleSum); 

// const combine = age.map(ages=>ages*5)
//                     .filter(ages=>ages>=98)
//                     .sort((a,b)=>a-b)
//                     .reduce((a,b)=>a+b,0)


// console.log(combine);

