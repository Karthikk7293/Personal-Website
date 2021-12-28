var pname = document.getElementById('name')
var pmail = document.getElementById('email')
var Lmesage = document.getElementById('message')
var pmobile = document.getElementById('mobile')
var errbox = document.getElementsByClassName('error')
var submit = document.getElementById('submit-form')
var charecters = /^[a-zA-Z]+$/
var mailcode =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var phonenumber = /^((\+[1-9]{1,4}[ \-])|(\([0-9]{2,3}\)[ \-])|([0-9]{2,4})[ \-])?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
var def=0

$("#submit-form").submit((e)=>{

    def=0;
     e.preventDefault()
     validation()
     emailpart()
     mobilepart()
     messagepart()
     if(def==4){
     $.ajax({
         url:"https://script.google.com/macros/s/AKfycbzHMLP0Cz93Kkr4nd0j6ibDFIDcs0A8P7fW4PJ-QnZDd7IuvZeTmmw26yNaeotbJD5R/exec",
         data:$("#submit-form").serialize(),
         method:"post",
         success:function (response){
             alert("Form submitted successfully")
             window.location.reload()
             //window.location.href="https://google.com"
         },
         error:function (err){
             alert("Something Error")

         }
     })
   }
 })



        // Namepart validation

function validation(){
    if(pname.value =="" ){
        errbox[0].innerHTML="Please Enter your Name"
    }else if(pname.value.trim()==" "){
        errbox[0].innerHTML="Please do not enter spaces"
    }else if(charecters.test(pname.value)==false){
        
        errbox[0].innerHTML="Please Enter charecters only"
    }else{
        errbox[0].innerHTML="";
        def=def+1;
    }
}

         // emailpart validation

function emailpart(){
    if(mailcode.test(pmail.value)==false){
        errbox[1].innerHTML="Please Enter a valid email id"
    }else{
        errbox[1].innerHTML=""
        def=def+1;
    }

}

         // mobile number part



function mobilepart(){
    var m=pmobile.value
    if(m.length<10 || m.length>10){
        errbox[2].innerHTML="Please Enter 10 digit mobile number"
    }else{
        errbox[2].innerHTML=""
        def=def+1;
    }
}


        // message part  
    
function messagepart(){
    var k=Lmesage.value
    if(k.length<10){
        errbox[3].innerHTML="Please enter atleast 10 words"
    }else{
        errbox[3].innerHTML=""
        def=def+1;
    }
}


// document.querySelector(".php-email-form").addEventListener('submit',(event)=>{
//     //console.log("api call",event.target.name.value);
   
// })


// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbzHMLP0Cz93Kkr4nd0j6ibDFIDcs0A8P7fW4PJ-QnZDd7IuvZeTmmw26yNaeotbJD5R/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })