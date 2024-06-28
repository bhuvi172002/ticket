let shimla_ghanatti =["old bus stand","victory tunnel",  "railway station","103","rto","mla crossing","baluganj","tavi","power house","totu","yadgaar","dhanda","hiranagar","jablog","banooti","chali","ghanatti"];

   

function myFunction() {
  // Declare variables
  var input, filter, ul, li, button, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    button = li[i].getElementsByTagName("button")[0];
    txtValue = button.textContent || button.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function myFunction1() {
    // Declare variables
    var input, filter, ul, li, button, i, txtValue;
    input = document.getElementById('myInput1');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL1");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      button = li[i].getElementsByTagName("button")[0];
      txtValue = button.textContent || button.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }







// functions to place the name on search bar of from


  function oldbusstand(){
    var input = document.getElementById('myInput');
    input.value="old bus stand"

    var output = document.getElementById('output');
    output.value="old bus stand"
    var km1 = document.getElementById('km1');
    km1.value="0"
    


  }
  function victorytunnel(){
    var input = document.getElementById('myInput');
    input.value="victory tunnel"
    var output = document.getElementById('output');
    output.value="victory tunnel"
    var km1 = document.getElementById('km1');
    km1.value="1"
  }

  function railwaystation(){
    var input = document.getElementById('myInput');
    input.value="railway station"
    var output = document.getElementById('output');
    output.value="railway station"
    var km1 = document.getElementById('km1');
    km1.value="2"

  }

  function o103(){
    var input = document.getElementById('myInput');
    input.value="103"
    var output = document.getElementById('output');
    output.value="103"
    var km1 = document.getElementById('km1');
    km1.value="3"
  }
  function rto(){
    var input = document.getElementById('myInput');
    input.value="rto"
    var output = document.getElementById('output');
    output.value="rto"
    var km1 = document.getElementById('km1');
    km1.value="4"
  }
  function  mlacrossing(){
    var input = document.getElementById('myInput');
    input.value="mla crossing"
    var output = document.getElementById('output');
    output.value="mla crossing"
    var km1 = document.getElementById('km1');
    km1.value="5"
  }
  function  baluganj(){
    var input = document.getElementById('myInput');
    input.value=" baluganj"
    var output = document.getElementById('output');
    output.value=" baluganj"
    var km1 = document.getElementById('km1');
    km1.value="6"
  }
  function tavi(){
    var input = document.getElementById('myInput');
    input.value="tavi"
    var output = document.getElementById('output');
    output.value="tavi"
    var km1 = document.getElementById('km1');
    km1.value="7"
  }
  function powerhouse(){
    var input = document.getElementById('myInput');
    input.value="power house"
    var output = document.getElementById('output');
    output.value="power house"
    var km1 = document.getElementById('km1');
    km1.value="8"
  }
  function totu(){
    var input = document.getElementById('myInput');
    input.value="totu"
    var output = document.getElementById('output');
    output.value="totu"
    var km1 = document.getElementById('km1');
    km1.value="9"
  }
  function yadgaar(){
    var input = document.getElementById('myInput');
    input.value="yadgaar"
    var output = document.getElementById('output');
    output.value="yadgaar"
    var km1 = document.getElementById('km1');
    km1.value="10"
  }
  function dhanda(){
    var input = document.getElementById('myInput');
    input.value="dhanda"
    var output = document.getElementById('output');
    output.value="dhanda"
    var km1 = document.getElementById('km1');
    km1.value="11"
  }
  function hiranagar(){
    var input = document.getElementById('myInput');
    input.value="hiranagar"
    var output = document.getElementById('output');
    output.value="hiranagar"
    var km1 = document.getElementById('km1');
    km1.value="12"
  }
  function jablog(){
    var input = document.getElementById('myInput');
    input.value="jablog"
    var output = document.getElementById('output');
    output.value="jablog"
    var km1 = document.getElementById('km1');
    km1.value="13"
  }
  function banooti(){
    var input = document.getElementById('myInput');
    input.value="banooti"
    var output = document.getElementById('output');
    output.value="banooti"
    var km1 = document.getElementById('km1');
    km1.value="14"
  }
  
  function chali(){
    var input = document.getElementById('myInput');
    input.value="chali"
    var output = document.getElementById('output');
    output.value="chali"
    var km1 = document.getElementById('km1');
    km1.value="15"
  }
  function  ghanatti(){
    var input = document.getElementById('myInput');
    input.value=" ghanatti"
    var output = document.getElementById('output');
    output.value="ghanatti"
    var km1 = document.getElementById('km1');
    km1.value="16"
  }





  // functions to place the name on search bar of to


  function oldbusstand1(){
    var input = document.getElementById('myInput1');
    input.value="old bus stand"
    var output1 = document.getElementById('output1');
    output1.value="old bus stand"
    var km2 = document.getElementById('km2');
    km2.value="0"

  }
  function victorytunnel1(){
    var input = document.getElementById('myInput1');
    input.value="victory tunnel"
    var output1 = document.getElementById('output1');
    output1.value="victory tunnel"
    var km2 = document.getElementById('km2');
    km2.value="1"
   
  }


  function railwaystation1(){
    var input = document.getElementById('myInput1');
    input.value="railway station"
    var output1 = document.getElementById('output1');
    output1.value="railway station"
    var km2 = document.getElementById('km2');
    km2.value="2"
  }
  function o1031(){
    var input = document.getElementById('myInput1');
    input.value="103"
    var output1 = document.getElementById('output1');
    output1.value="103"
    var km2 = document.getElementById('km2');
    km2.value="3"
  }
  function rto1(){
    var input = document.getElementById('myInput1');
    input.value="rto"
    var output1 = document.getElementById('output1');
    output1.value="rto"
    var km2 = document.getElementById('km2');
    km2.value="4"
  }
  function  mlacrossing1(){
    var input = document.getElementById('myInput1');
    input.value="mla crossing"
    var output1 = document.getElementById('output1');
    output1.value="mla crossing"
    var km2 = document.getElementById('km2');
    km2.value="5"
  }
  function  baluganj1(){
    var input = document.getElementById('myInput1');
    input.value=" baluganj"
    var output1 = document.getElementById('output1');
    output1.value="baluganj"
    var km2 = document.getElementById('km2');
    km2.value="6"
  }
  function tavi1(){
    var input = document.getElementById('myInput1');
    input.value="tavi"
    var output1 = document.getElementById('output1');
    output1.value="tavi"
    var km2 = document.getElementById('km2');
    km2.value="7"
  }
  function powerhouse1(){
    var input = document.getElementById('myInput1');
    input.value="power house"
    var output1 = document.getElementById('output1');
    output1.value="power house"
    var km2 = document.getElementById('km2');
    km2.value="8"
  }
  function totu1(){
    var input = document.getElementById('myInput1');
    input.value="totu"
    var output1 = document.getElementById('output1');
    output1.value="totu"
    var km2 = document.getElementById('km2');
    km2.value="9"
  }
  function yadgaar1(){
    var input = document.getElementById('myInput1');
    input.value="yadgaar"
    var output1 = document.getElementById('output1');
    output1.value="yadgaar"
    var km2 = document.getElementById('km2');
    km2.value="10"
  }
  function dhanda1(){
    var input = document.getElementById('myInput1');
    input.value="dhanda"
    var output1 = document.getElementById('output1');
    output1.value="dhanda"
    var km2 = document.getElementById('km2');
    km2.value="11"
  }
  function hiranagar1(){
    var input = document.getElementById('myInput1');
    input.value="hiranagar"
    var output1 = document.getElementById('output1');
    output1.value="hiranagar"
    var km2 = document.getElementById('km2');
    km2.value="12"
  }
  function jablog1(){
    var input = document.getElementById('myInput1');
    input.value="jablog"
    var output1 = document.getElementById('output1');
    output1.value="jablog"
    var km2 = document.getElementById('km2');
    km2.value="13"
  }
  function banooti1(){
    var input = document.getElementById('myInput1');
    input.value="banooti"
    var output1 = document.getElementById('output1');
    output1.value="banooti"
    var km2 = document.getElementById('km2');
    km2.value="14"
  }
 
  function chali1(){
    var input = document.getElementById('myInput1');
    input.value="chali"
    var output1 = document.getElementById('output1');
    output1.value="chali"
    var km2 = document.getElementById('km2');
    km2.value="15"
  }
  function  ghanatti1(){
    var input = document.getElementById('myInput1');
    input.value=" ghanatti"
    var output1 = document.getElementById('output1');
    output1.value=" ghanatti"
    var km2 = document.getElementById('km2');
    km2.value="16"
  }