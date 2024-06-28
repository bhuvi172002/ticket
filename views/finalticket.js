function finalticket(){
 var finalfair = document.getElementById('final-fair').value;
var ptp = document.getElementById('ptp')
   if(finalfair >0){
   
       if(ptp.style.display!='none'){
           
           ptp.style.display="none";
       }else{
           ptp.style.display="block";
       }
       }


//    for date in ticket
    var date = document.getElementById('date');
    const d = new Date();
date.value=d;

// for getting destination on ticket

var output = document.getElementById('output').value;
var output1 = document.getElementById('output1').value;
var ticketdesfrom = document.getElementById('ticketdesfrom');
var ticketdesto = document.getElementById('ticketdesto');
ticketdesfrom.value=output;
ticketdesto.value=output1;



//to show kilo meter in ticket
var ans = document.getElementById('ans').value;
var disticket = document.getElementById('disticket');
disticket.value=ans;


// to have the final fair on ticket

var finalfair = document.getElementById('final-fair').value;
var fairticket = document.getElementById('fairticket');

fairticket.value=finalfair;

}
