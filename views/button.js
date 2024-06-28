function sum(){
var km1 = document.getElementById('km1').value
var km2 = document.getElementById('km2').value
var total = document.getElementById('total')
km1=parseInt(km1);
km2 = parseInt(km2);

let desti = km1-km2;
desti = Math.abs(desti);
total.value = desti
  return desti;

};
function amount(fair){
  if(fair<=5){
    return 5
  }
  else{
    return fair
  }
}

function price(){
   var days = document.getElementById('days').value
    var price = document.getElementById('price')
if(days>=15){
    var distance=sum()
    var fair= distance*2.19
    console.log(fair)
fair=amount(fair)
    fair = fair*days 
    fair= parseInt(fair)
    price.value = fair
 console.log(fair)
 if(fair>0){
  var generate=document.getElementById('generate')
generate.style.display="block"
 }
}                    
else 
console.log("error")
   
}
function date(){
  var days = document.getElementById('days').value
  days=parseInt(days);
  const validfrom = document.getElementById('validfrom');
  const validupto = document.getElementById('validupto');
  if (days>=15 ){
    const a = new Date();
    console.log(a);
    validfrom.value = a;
    const res = a.setDate(a.getDate() + days);
    const newdate = new Date(res);
    const finaldate = newdate;
    validupto.value=finaldate
  }
  else{
validfrom.value="Enter valid numbers of days"
validupto.value="Enter valid numbers of days"
  }
 
}