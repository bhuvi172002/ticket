function form11(){
     var firstname = document.getElementById('FirstName').value
     var lastname=document.getElementById('LastName').value

     var output=document.getElementById('output').value
     var output1=document.getElementById('output1').value
     var total=document.getElementById('total').value
     var validfrom=document.getElementById('validfrom').value
     var validupto=document.getElementById('validupto').value
     var price=document.getElementById('price').value





     var fn = document.getElementById('fn')
     fn.value = firstname

     var ln=document.getElementById('ln').value=lastname
    
     var ot=document.getElementById('ot').value=output
     var ot1=document.getElementById('ot1').value=output1
     var tot=document.getElementById('tot').value=total
     var vf=document.getElementById('vf').value=validfrom
     var vu=document.getElementById('vu').value=validupto
     var pr=document.getElementById('pr').value=price

     var ermsg=document.getElementById('ermsg')
if (firstname==="" || lastname===""){
ermsg.style.display="flex"

}






}