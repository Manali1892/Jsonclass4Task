//This for population
//var request= new XMLHttpRequest();
//request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
//request.send();
//request.onload=function(){
  //  var data=JSON.parse(request.response);
//console.log(data);
//let res=data.reduce((acc,ele)=>acc+ele.population,0);
//console.log(res);
//}
//======================================================================================================
//This is for printing the flags of all countries
var request= new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
   var data=JSON.parse(request.response);
 // console.log(data);
    for(var i=0;i<249;i++)
        {
           console.log(data[i].flag);
        }
};


//alternate=======================================================================================================
//const request = new XMLHttpRequest()
//request.open("GET","https://restcountries.com/v3.1/all")
//request.send()

//request.onload = function(){
//if(request.status==200)
//{
  //  let c = JSON.parse(request.responseText)
    //c.map((s)=>{
      //  console.log(s.flags.png);
    //})
//}
//else{
  //  request.onerror=function(){
    //    console.log("error")
    //}
//}}