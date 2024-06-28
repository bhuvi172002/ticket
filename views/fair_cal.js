//js for fair calculation and all other possibilities with gender age cards , destination calculations min fair 
// for all the 5 pessenger there are different functions listed below 

function minfair(fair){
    if (fair<=5){
        return 5;
    }else{
       return fair;
    }
}
function sumofdesti(){

    var km1 = document.getElementById('km1').value;
    var km2 = document.getElementById('km2').value;
    var ans = document.getElementById('ans');
    km1=  parseInt(km1);
    km2= parseInt(km2);
    let des=km1-km2;
    des=Math.abs(des);
    ans.value=des;
    return des ;


}







//passanger 1 details check
 
function done(){
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var child = document.getElementById('child');
    var smartcard = document.getElementById('smartcard');
    var greencard = document.getElementById('greencard');
    var sammancard = document.getElementById('sammancard');
    var totalfair = document.getElementById('total-fair');
    var ticketpass = document.getElementById('ticketpass');
    
    // fair money calculation
let fair=sumofdesti();
fair=fair*2.19;
console.log(fair);
//  gender child selection check and consession card check and calculation according to their rebate
    if(male.checked==true){
        if(smartcard.checked==true){
            fair=fair-(fair*(10/100));
            fair=minfair(fair);
            totalfair.value=  Math.round(fair);
            ticketpass.value=" Passanger 1 = 1 Full Ordinary Smart Card";
            
        }
        else if(greencard.checked==true){
            fair=fair-(fair*(20/100));
            fair=minfair(fair);
            totalfair.value=  Math.round(fair);
            ticketpass.value="Passanger 1 = 1 Full Ordinary Green Card";
        }
       else if(sammancard.checked==true){
            fair=fair-(fair*(30/100));
            fair=minfair(fair);
            totalfair.value=  Math.round(fair);
            ticketpass.value="Passanger 1 = 1 Full Ordinary Samman Card";
        }
        else{
            fair=minfair(fair);
            totalfair.value=  parseInt(fair);
            ticketpass.value="Passanger 1 = 1 Full ";
           
        }
    }
    if(female.checked==true || child.checked==true){
    
        smartcard.disabled = true;
        greencard.checked=false;
        sammancard.checked=false;
        fair=fair/2;
        fair=minfair(fair);
        totalfair.value=  Math.round(fair);
        ticketpass.value="Passanger 1 = 1 Full Women/Child";
    }
}
// function to set the reset values of all the selections
function reset(){
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var child = document.getElementById('child');
    var smartcard = document.getElementById('smartcard');
    var greencard = document.getElementById('greencard');
    var sammancard = document.getElementById('sammancard');
    var totalfair = document.getElementById('total-fair');

    male.checked=false;
    female.checked=false;
    child.checked=false;
    smartcard.checked=false;
    greencard.checked=false;
    sammancard.checked=false;
    totalfair.value="0"

}








//passanger 2 details check
 
function done2(){
    var male2 = document.getElementById('male2');
    var female2 = document.getElementById('female2');
    var child2 = document.getElementById('child2');
    var smartcard2 = document.getElementById('smartcard2');
    var greencard2 = document.getElementById('greencard2');
    var sammancard2 = document.getElementById('sammancard2');
    var totalfair2 = document.getElementById('total-fair2');
    var ticketpass2 = document.getElementById('ticketpass2');
    
    // fair money calculation
let fair=sumofdesti();
fair=fair*2.19;
console.log(fair);
//  gender child selection check and consession card check and calculation according to their rebate
    if(male2.checked==true){
        if(smartcard2.checked==true){
            fair=fair-(fair*(10/100));
            fair=minfair(fair);
            totalfair2.value=  Math.round(fair);
            ticketpass2.value="Passanger 2 = 1 Full Ordinary Smart Card";
        }
        else if(greencard2.checked==true){
            fair=fair-(fair*(20/100));
            fair=minfair(fair);
            totalfair2.value=  Math.round(fair);
            ticketpass2.value="Passanger 2 = 1 Full Ordinary Green Card";
        }
       else if(sammancard2.checked==true){
            fair=fair-(fair*(30/100));
            fair=minfair(fair);
            totalfair2.value=  Math.round(fair);
            ticketpass2.value="Passanger 2 = 1 Full Ordinary Samman Card";
        }
        else{
            fair=minfair(fair);
            totalfair2.value=  parseInt(fair);
            ticketpass2.value="Passanger 2 = 1 Full ";
        }
    }
    if(female2.checked==true || child2.checked==true){
        fair=fair/2;
        fair=minfair(fair);
        totalfair2.value=  Math.round(fair);
        ticketpass2.value="Passanger 2 = 1 Full Women/Child  ";
    }
}
// function to set the reset values of all the selections
function reset2(){
    var male2 = document.getElementById('male2');
    var female2 = document.getElementById('female2');
    var child2 = document.getElementById('child2');
    var smartcard2 = document.getElementById('smartcard2');
    var greencard2 = document.getElementById('greencard2');
    var sammancard2 = document.getElementById('sammancard2');
    var totalfair2 = document.getElementById('total-fair2');

    male2.checked=false;
    female2.checked=false;
    child2.checked=false;
    smartcard2.checked=false;
    greencard2.checked=false;
    sammancard2.checked=false;
    totalfair2.value="0"

}






//passanger 3 details check
 
function done3(){
    var male3 = document.getElementById('male3');
    var female3 = document.getElementById('female3');
    var child3 = document.getElementById('child3');
    var smartcard3 = document.getElementById('smartcard3');
    var greencard3 = document.getElementById('greencard3');
    var sammancard3 = document.getElementById('sammancard3');
    var totalfair3 = document.getElementById('total-fair3');
    var ticketpass3 = document.getElementById('ticketpass3');
   
   
    // fair money calculation
let fair=sumofdesti();
fair=fair*2.19;
console.log(fair);
//  gender child selection check and consession card check and calculation according to their rebate
    if(male3.checked==true){
        if(smartcard3.checked==true){
            fair=fair-(fair*(10/100));
            fair=minfair(fair);
            totalfair3.value=  Math.round(fair);
            ticketpass3.value="Passanger 3 = 1 Full Ordinary Smart Card";
        }
        else if(greencard3.checked==true){
            fair=fair-(fair*(20/100));
            fair=minfair(fair);
            totalfair3.value=  Math.round(fair);
            ticketpass3.value="Passanger 3 = 1 Full Ordinary Green Card";
        }
       else if(sammancard3.checked==true){
            fair=fair-(fair*(30/100));
            fair=minfair(fair);
            totalfair3.value=  Math.round(fair);
            ticketpass3.value="Passanger 3 = 1 Full Ordinary Samman Card";
        }
        else{
            fair=minfair(fair);
            totalfair3.value=  parseInt(fair);
            ticketpass3.value="Passanger 3 = 1 Full";
        }
    }
    if(female3.checked==true || child3.checked==true){
        fair=fair/2;
        fair=minfair(fair);
        totalfair3.value=  Math.round(fair);
        ticketpass3.value="Passanger 3 = 1 Full Women/child";
    }
}
// function to set the reset values of all the selections
function reset3(){
    var male3 = document.getElementById('male3');
    var female3 = document.getElementById('female3');
    var child3 = document.getElementById('child3');
    var smartcard3 = document.getElementById('smartcard3');
    var greencard3 = document.getElementById('greencard3');
    var sammancard3 = document.getElementById('sammancard3');
    var totalfair3 = document.getElementById('total-fair3');

    male3.checked=false;
    female3.checked=false;
    child3.checked=false;
    smartcard3.checked=false;
    greencard3.checked=false;
    sammancard3.checked=false;
    totalfair3.value="0"

}





//passanger 4 details check
 
function done4(){
    var male4 = document.getElementById('male4');
    var female4 = document.getElementById('female4');
    var child4 = document.getElementById('child4');
    var smartcard4 = document.getElementById('smartcard4');
    var greencard4 = document.getElementById('greencard4');
    var sammancard4 = document.getElementById('sammancard4');
    var totalfair4 = document.getElementById('total-fair4');
    var ticketpass4 = document.getElementById('ticketpass4');
   
    // fair money calculation
let fair=sumofdesti();
fair=fair*2.19;
console.log(fair);
//  gender child selection check and consession card check and calculation according to their rebate
    if(male4.checked==true){
        if(smartcard4.checked==true){
            fair=fair-(fair*(10/100));
            fair=minfair(fair);
            totalfair4.value=  Math.round(fair);
            ticketpass4.value="Passanger 4 = 1 Full Ordinary Smart Card";
        }
        else if(greencard4.checked==true){
            fair=fair-(fair*(20/100));
            fair=minfair(fair);
            totalfair4.value=  Math.round(fair);
            ticketpass4.value="Passanger 4 = 1 Full Ordinary Green Card";
        }
       else if(sammancard4.checked==true){
            fair=fair-(fair*(30/100));
            fair=minfair(fair);
            totalfair4.value=  Math.round(fair);
            ticketpass4.value="Passanger 4 = 1 Full Ordinary Samman Card";
        }
        else{
            fair=minfair(fair);
            totalfair4.value=  parseInt(fair);
            ticketpass4.value="Passanger 4 = 1 Full";
        }
    }
    if(female4.checked==true || child4.checked==true){
        fair=fair/2;
        fair=minfair(fair);
        totalfair4.value=  Math.round(fair);
        ticketpass4.value="Passanger 4 = 1 Full Women/Child";
    }
}
// function to set the reset values of all the selections
function reset4(){
    var male4 = document.getElementById('male4');
    var female4 = document.getElementById('female4');
    var child4 = document.getElementById('child4');
    var smartcard4 = document.getElementById('smartcard4');
    var greencard4 = document.getElementById('greencard4');
    var sammancard4 = document.getElementById('sammancard4');
    var totalfair4 = document.getElementById('total-fair4');

    male4.checked=false;
    female4.checked=false;
    child4.checked=false;
    smartcard4.checked=false;
    greencard4.checked=false;
    sammancard4.checked=false;
    totalfair4.value="0"

}











//passanger 5 details check
 
function done5(){
    var male5 = document.getElementById('male5');
    var female5 = document.getElementById('female5');
    var child5 = document.getElementById('child5');
    var smartcard5 = document.getElementById('smartcard5');
    var greencard5 = document.getElementById('greencard5');
    var sammancard5 = document.getElementById('sammancard5');
    var totalfair5 = document.getElementById('total-fair5');
    var ticketpass5 = document.getElementById('ticketpass5');
    // fair money calculation
let fair=sumofdesti();
fair=fair*2.19;
console.log(fair);
//  gender child selection check and consession card check and calculation according to their rebate
    if(male5.checked==true){
        if(smartcard5.checked==true){
            fair=fair-(fair*(10/100));
            fair=minfair(fair);
            totalfair5.value=  Math.round(fair);
            ticketpass5.value="Passanger 5 = 1 Full Ordinary Smart Card";
        }
        else if(greencard5.checked==true){
            fair=fair-(fair*(20/100));
            fair=minfair(fair);
            totalfair5.value=  Math.round(fair);
            ticketpass5.value="Passanger 5 = 1 Full Ordinary Green Card";
        }
       else if(sammancard5.checked==true){
            fair=fair-(fair*(30/100));
            fair=minfair(fair);
            totalfair5.value=  Math.round(fair);
            ticketpass5.value="Passanger 5 = 1 Full Ordinary Samman Card";
        }
        else{
            fair=minfair(fair);
            totalfair5.value=  parseInt(fair);
            ticketpass5.value="Passanger 5 = 1 Full";
        }
    }
    if(female5.checked==true || child5.checked==true){
        fair=fair/2;
        fair=minfair(fair);
        totalfair5.value=  Math.round(fair);
        ticketpass5.value="Passanger 5 = 1 Full Women/child";
    }
}
// function to set the reset values of all the selections
function reset5(){
    var male5 = document.getElementById('male5');
    var female5 = document.getElementById('female5');
    var child5 = document.getElementById('child5');
    var smartcard5 = document.getElementById('smartcard5');
    var greencard5 = document.getElementById('greencard5');
    var sammancard5 = document.getElementById('sammancard5');
    var totalfair5 = document.getElementById('total-fair5');

    male5.checked=false;
    female5.checked=false;
    child5.checked=false;
    smartcard5.checked=false;
    greencard5.checked=false;
    sammancard5.checked=false;
    totalfair5.value="0"

}



// to calculate the total fair of all five inputs

function totalfair(){
    var totalfair = document.getElementById('total-fair');
    var totalfair2 = document.getElementById('total-fair2');
    var totalfair3 = document.getElementById('total-fair3');
    var totalfair4 = document.getElementById('total-fair4');
    var totalfair5 = document.getElementById('total-fair5');
    var finalfair = document.getElementById('final-fair');

    var a,b,c,d,e;

 a=totalfair.value 
 b=totalfair2.value
 c=totalfair3.value
 d=totalfair4.value
 e=totalfair5.value 

 a=parseInt(a);
 b=parseInt(b);
 c=parseInt(c);
 d=parseInt(d);
 e=parseInt(e);
 finalfair.value=a+b+c+d+e;

//  var ptp = document.getElementById('ptp')
//    if(finalfair >0){
   
//        if(ptp.style.display!='none'){
           
//            ptp.style.display="none";
//        }else{
//            ptp.style.display="block";
//        }
//        }

}

 


    

