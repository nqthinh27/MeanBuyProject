var regdUsers = JSON.parse(localStorage.getItem("signUpDetails"));
console.log(regdUsers);

document.querySelector("#form").addEventListener("submit", formSubmit);

var form = document.querySelector("#form");

function formSubmit(event) {
  event.preventDefault();

  var username = form.myemail.value;
  var password = form.mypassword.value;
  console.log(username, password);
  window.location.href="../paymentDetails.html"
//   var flag = false;
//   for (var i = 0; i < regdUsers.length; i++) {
//         if (regdUsers[i].email == username && regdUsers[i].pass == password) {
//         flag = true;
//         break;
//         }
//         else if(regdUsers[i].email=="" || regdUsers[i].pass==""){
//             flag=false;
//         }
//   }
//     if (flag === true) {
//         window.location.href="../paymentDetails.html"
//     } else {
//         alert("Invalid Credentials :(");
//     }
}





// --------------------------------cart details-----------------------------------


var BuyItem= JSON.parse(localStorage.getItem("BuyItem"));
console.log(BuyItem)
BuyItem.map(function(elem){
    var productqty=document.querySelector(".TotalQty");
    var subtotal=document.querySelector(".cartSubTotl");
    var total=document.querySelector(".cartTotal");
    
    productqty.textContent=elem.quant;
    subtotal.textContent=elem.price;
    total.textContent=subtotal.textContent;
})
