let b1=document.getElementById("btn");
b1.addEventListener("click",function(){
let p1=document.getElementById("pwd").value;
let e1=document.getElementById("mail").value;
let p2=document.getElementById("phn").value; 
if (p1.match(/[a-z]/g) && p1.match(
    /[A-Z]/g) && p1.match(
    /[0-9]/g) && p1.match(
    /[^a-zA-Z\d]/g) && p1.length >= 8){
        document.getElementById("msg").style.visibility="hidden";
  //alert('succesfull')
    }
    else{
        document.getElementById("msg").innerHTML="please enter valid password"
    }
  if ((p2.match(/[0-9]/g)&& p2.length===10)){
                document.getElementById("msg2").style.visibility="hidden";
                //alert("success");
        }
        else{
            document.getElementById("msg2").innerHTML="please enter valid phone number";
        }
        if (/@gmail\.com$/.test(e1)){
            document.getElementById("msg1").style.visibility="hidden";
            return true
    }
    else{
        document.getElementById("msg1").innerHTML="please enter valid mail";
    }
})
b1.addEventListener("click",function(){
    let c1=document.getElementById("radio");
    let c2=document.getElementById("radio1");
    let ch1=document.getElementById("ch1");
    let ch2=document.getElementById("ch2");
    let ch3=document.getElementById("ch3");
    let ch4=document.getElementById("ch4");
    if(c1.checked || c2.checked)
    {
        document.getElementById("msg3").style.visibility="hidden";
       // alert("hi");
    }
    else{
        document.getElementById("msg3").innerHTML="please select your gender";
    }
    if(ch1.checked || ch2.checked || ch3.checked)
    {
        document.getElementById("msg4").style.visibility="hidden";
        //alert("hi");
    }
    else{
        document.getElementById("msg4").innerHTML="please select your language";
    }
    if(ch4.checked)
    {
        document.getElementById("msg5").style.visibility="hidden";
    }
    else{
        document.getElementById("msg5").innerHTML="please tick the box";
    }

})