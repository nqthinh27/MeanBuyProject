document.querySelector("#form").addEventListener("submit", myFormSubmit);

var signupArr = JSON.parse(localStorage.getItem("signUpDetails")) || [];
function myFormSubmit(event) {
  event.preventDefault();
  var signupObj = {
    email: document.querySelector("#myemail").value,
    pass: document.querySelector("#mypassword").value,
    cnfpass: document.querySelector("#checkpassword").value,
    
  };
  
  if(signupObj.email=="" || signupObj.pass=="" || signupObj.cnfpass==""){

    if(signupObj.cnfpass !==signupObj.pass){
      alert("Invalid Details! :(");
      document.querySelector("#myemail").value=""; 
      document.querySelector("#mypassword").value="";
      document.querySelector("#checkpassword").value="";
    }
    
   
 }
 else{
    signupArr.push(signupObj);
    console.log(signupArr);
    localStorage.setItem("signUpDetails", JSON.stringify(signupArr));
    window.location.href = "login.html";
    document.querySelector("#myemail").value=""; 
    document.querySelector("#mypassword").value="";
    document.querySelector("#checkpassword").value="";
 }
 
    
}


// -----------------------------------cart details---------------------------------------


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
