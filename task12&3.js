//TASK 1:
//print hello world
console.log("hello world")


//Declare four variables without assigning values and print them in console
var a;console.log(a);
var b;console.log(b);
var c;console.log(c);
var d;console.log(d);


//How to get value of the variable myvar as output
var myvar=12;
console.log("myvar");

//Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstname="Monika";
var lastname="Sharma";
var maritalstatus="single";
var country="India";
var age="27";


//Declare variables to store your first name, last name, marital status, country and age in a single line
var firstname="Manali",lastname="Sonar",maritalstatus="Married",country="India",age="28";

//Declare variables and assign string, boolean, undefined and null data types
var a="Hello World";
var b=true;
var c=undefined;
var d=null;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));


//Convert the string to integer
var a="5";
console.log(parseInt(a));

var b="2";
console.log(+b);

var c="3";
console.log(Number(c));


//Write 6 statement which provide truthy & falsey values.
console.log(3===3);
console.log(3==2);
console.log(3!=6);
console.log(3!=3);
console.log(3>=2);
console.log(3<=2);


//TASK 2:
//Square of a number
var a=Math.pow(2,2);
var b=Math.pow(3,2);
console.log(a,b);

//Swapping 2 numbers
var a=1;
var b=2;
[a,b]=[b,a];
console.log(a);
console.log(b);

//Addition of 3 numbers
var a=1;
var b=2;
var c=3;
console.log(a+b+c);

//Celsius to Fahrenheit conversion
var c=30;
const f=(c*1.8)+32;
console.log(f);

//Meter to miles
var met=5;
const miles=0.000621;
console.log(meter*miles);

//Pounds to kg
const kg=2.2046;
var pounds=50;
console.log(pounds/kg);

//Calculate Batting Average
var totalruns=600;
var totalbattings=50;
const average=(totalruns/totalbattings);
console.log(average);

//Calculate five test scores and print their average
var a=130;
var b=147;
var c=133;
var d=165;
var e=155;
console.log((a+b+c+d+e)/2);

//Power of any number x ^ y
var a=4;
var b=3;
let c=Math.pow(a,b)
console.log(c)

//Calculate Simple Interest
var p,t,r,SI;
 p=11;
 t=12;
 r=13;
 SI=(p*t*r)/100;
 Console.log("Simple Interest")

//Calculate area of an equilateral triangle
let a=6
let area=1
for(var i=1;i<=a;i++)
{
  area=(1.73*a*a)/4   
}
console.log(Math.round(area*100)/100)

//Area Of Isosceles Triangle
const a=3;
const base=10;
const area=(1/2.0)*base*Math.sqrt((a*a)-((base*base)/4));
console.log("Area of Isosceles Triangle = " + area);

//Volume Of Sphere
let radius=3;
let volume=(4/3)*Math.PI*Math.pow(radius,3);
console.log('Volume of Sphere: '+volume.toFixed(2));;

//Volume Of Prism
var l=3;
var w=4;
var h=6;
const volume=l*w*h
console.log(volume); 

//Find area of a triangle.
var side1=2
var side2=4
var side3=5
const s=(side1+side2+side3)/2;
const areaValue=Math.sqrt(
  s*(s-side1)*(s-side2)*(s-side3)
);
console.log(areaValue)

//Give the Actual cost and Sold cost, Calculate Discount Of Product
var bill=800;
var discount=20;
var afterDiscount=bill-(bill*discount/100);
console.log(afterDiscount);

//Given their radius of a circle and find its diameter, circumference and area.
var r=3;
const PI=3.14;
let dia=r+r;
let areaofcircle=r*r*PI;
let circumference=2*r*PI;
console.log(dia);
console.log(areaofcircle);
console.log(circumference);

//Given two numbers and perform all arithmetic operations.
var a=3;
var b=3;
const add=a+b;
const sub=a-b;
const mul=a*b;
const div=a/b;
const mod=a%b;
console.log([add,sub,mul,div,mod]);


let n=3;
let string="";
for(let i=0;i<n;i++) { 
  for(let j=0;j<n;j++) {
    string +="*";
  }
    string +="\n";
}
console.log(string);

//Program To Calculate CGPA
let ET=80;
let FM=82;
let DOM=70;
let SOM=60;
//CGPA=((Grades in all Subject)/(Total Number of Subjects))
let CGPA=(ET+FM+DOM+SOM)/5;
console.log(CGPA);

//Task 3
//Write a loop that makes seven calls to console.log to output the following triangle:
let n = 7;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

//Iterate through the string array and print it contents
var strArray= ["Jazz","Blues","New Age","Classical","Opera"];
console.log(strArray);

//write a code to count the elements in the array
var a=[11,22,33,44,55];
console.log(a.length);

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods=["rice","dhal","parotta","chappati","milkshake","juice","meat","chicken","biriyani","dosa",
"poori","idly","samosa","egg","fish","potato","mushroom","pasata","noodles","prawn"]

//Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
let foods=["rice","kheer","eggroll","roti","milkshake","coldcoffee","meat","chicken","biryani","dosa",
"chickenroll","utttappa","samosa","egg","fish","potato","khichdi","maggie","noodles","puranpoli"];
console.log(foods[4]);

//Find the length of your foods array
let foods=["rice","kheer","eggroll","roti","milkshake","coldcoffee","meat","chicken","biryani","dosa",
"chickenroll","utttappa","samosa","egg","fish","potato","khichdi","maggie","noodles","puranpoli"];
console.log(foods.length);


//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”
let friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(input){
    for (var i=0;i<input.length;i++){
            
    }
    }
    dataHandling(friends);
