//1
let username="Ragsana";
console.log(username);
//2
let isLoggedIn=true;
//3
const MAX_Users=100;
//4
let email;
console.log(email);
//5
let score=5;
score=score+5;
console.log(score);
score=score*2;
console.log(score);
//6
function sayHello(){
    console.log("Hello, world!");
}
sayHello();
//7
function showMessage(message){
    console.log(message);
}
showMessage("salam");
//8//
const doubleNumber =a=>console.log(2*a);
doubleNumber(5);
//9
function logInfo(title="Info", ...details){
    console.log("Title:", title);
    console.log("Details:", details);
}
logInfo("Fayl tapilmadi", "Yeniden cehd edin", "Ve s");
//10
const book={
    title:"Psixo 101",
    author:"Pol Klaynmen",
    year:1999
}
console.log(book);
//11
console.log(book.title);
console.log(book["year"]);
//12
book.genre="Psixologiya";
console.log(book);
//13
book.year=2000;
console.log(book);
//14
const books={
    title:"Psixo 101",
    author:"Pol Klaynmen",
    year:2000,

    getSummary: function(){
        return `${this.title} by ${this.author} published in ${this.year}`;
    } 
}
console.log(books.getSummary());
//15
let colors=["pink", "white", "black"];
console.log(colors[1]);
//16
colors.push("blue");
console.log(colors);
//17
let numbers=[5,15,25,35];
function add(number){
    return number*3;
}
const newNumbers=numbers.map(add);
console.log(newNumbers);
//18
function ten(number){
    return number>10
}
console.log(numbers.filter(ten));
//19
const nums = [1, 2, 3, 4, 5];
function sumNums(sumS, value) {
    return sumS + value;
}
const sum = nums.reduce(sumNums, 0);
console.log(sum); 
//20
let temperature=20;
if(temperature>30){
    console.log("It's hot");
}
else{
    console.log( "It's cool");
}
//21
const day="Monday";
switch(day){
    case "Monday":
        console.log("Monday");
        break;
    case "Friday":
        console.log("Friday");
        break;
    default:
        console.log("Else");

}
//22
for(i=1; i<6; i++){
    console.log(i);
}
//23
let count=0;
while(count<3){
    console.log("Counting..");
    count++;
}
//24
const animals = ["Cat", "Lion", "Tiger", "Dog", "Zebra"]; 
for(const animal of animals){
    console.log(animal);
}

