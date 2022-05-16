
var BuyItem= JSON.parse(localStorage.getItem("BuyItem"));
console.log(BuyItem)
function displaydata(BuyItem){
    BuyItem.map(function(elem){
        // var productqty=document.querySelector(".qty");
        var productname=document.querySelector(".productname");
        var productprice=document.querySelector(".prodprice");
        var subtotal=document.querySelector("#subtotl");
        var total=document.querySelector("#GrandTotal");
        var cardtotal=document.querySelector("#pricetotl");
        var submit=document.querySelector("#submit");
        

        productname.textContent=elem.name;
        // productqty.textContent= "1";
        productprice.textContent=elem.price;
        subtotal.textContent=elem.price;
        total.textContent=elem.price;
        cardtotal.textContent=total.textContent;
        submit.textContent="PAY  ₹"+cardtotal.textContent;
    })
}
displaydata(BuyItem);
document.querySelector("#submit").addEventListener("click",paysuccess);

function paysuccess(){
    window.location.href="shopcompleted.html";
}
















// --------------------------------------section2----------------------------------------

var regdUsers = JSON.parse(localStorage.getItem("signUpDetails"));
// console.log(regdUsers)
var myemail=document.querySelector(".email");
myemail.textContent=regdUsers[regdUsers.length-1].email;
// console.log(myemail);

var paymentType=document.querySelectorAll(".billing>div");
// console.log(paymentType[2]);

for(var i=0; i<paymentType.length; i++){
    paymentType[i].addEventListener("click", pay)
        
}

function pay(event){
    if(event.target.style.borderBottom==="none"){
        event.target.style.borderBottom="5px solid #f7941d";
    }
    else{
        event.target.style.borderBottom="none";
    }
    
    // console.log(event.target)
}

var card=document.querySelector("#paynow").addEventListener("click", popupFrom)

function popupFrom(){
   var paymentpop=document.querySelector("#paym");
   if(paymentpop.style.display="none"){
       paymentpop.style.display="block";
       document.querySelector("#guard").style.opacity="0.6";
   }
   else{
       paymentpop.style.display="none";
   }
}

var card=document.querySelector(".cross").addEventListener("click", closefrom);
 function closefrom(){
     document.querySelector("#paym").style.display="none";
     document.querySelector("#guard").style.opacity="1";

 }



