var hideNav=document.querySelector("#hideNav");

var category=document.querySelector("#category").addEventListener("click",hideFunc);
function hideFunc(){
// hideNav.style.top="-10px"
if(hideNav.style.display==="none"){
hideNav.style.display="block"
} 
else {
    hideNav.style.display="none"
}


}

var newArrivals=JSON.parse(localStorage.getItem("newArrivals"))
// console.log(newArrivals)

var fastMovingProduct=JSON.parse(localStorage.getItem("fastMovingProduct"))

var mobileAccess=JSON.parse(localStorage.getItem("mobileAccess"))

var toy=JSON.parse(localStorage.getItem("toy"))


var waterBottles=JSON.parse(localStorage.getItem("waterBottles"))

var homeImprovement=JSON.parse(localStorage.getItem("homeImprovement"))

var bluetoothEarphone=JSON.parse(localStorage.getItem("bluetoothEarphone"))

var sportingBluetooth=JSON.parse(localStorage.getItem("sportingBluetooth"))

     newArrivals.map(function(elem,index){
         var productDiv=document.createElement("div");
         productDiv.setAttribute("id","arrivalProDiv")


         var image= document.createElement("img");
         image.setAttribute("src",elem.image);

        var nameRating=document.createElement("div");
        nameRating.setAttribute("id","name-rating")
        
        

         var name=document.createElement("p");
         name.innerText=elem.name;

        var ratingIcon=document.createElement("div");
        ratingIcon.setAttribute("id","rating-icon")

         var rating=document.createElement("p");
         rating.innerText=elem.rating;

         var ratingStar=document.createElement("span")
         ratingStar.setAttribute("class","fa fa-star");

         ratingIcon.append(rating,ratingStar)
         
         nameRating.append(name,ratingIcon)

         var hr=document.createElement("hr")
         hr.style.backgroundColor="#ECEFF1"
         hr.style.margin="0 1px 9px 1px"
         hr.style.height="1px";
        //  hr.style.padding="0 1px"


        var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

         var para=document.createElement("p");
         para.setAttribute("class","pricePara")
         para.innerText=elem.para;
         
          //<--3rd Layer Section-->//


    //     box.addEventListener("click", function(){
    //         var displayLayer=[];
    //         displayLayer.push(elem)
    //         localStorage.setItem("displayLayer",JSON.stringify(displayLayer))

    //     window.location.href="../../MeanBuyProject/MainProject/Display3rdLayer/display3rdLayer.html";
    // })


         productDiv.append(image,nameRating,hr,priceBox,para);
         document.getElementById("arrivaldata").append(productDiv)

     })
     

     fastMovingProduct.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;

    

        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("window").append(productDiv)

    })
    

// ------------------------------------------


    mobileAccess.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
         
    

        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("mobilesCart").append(productDiv)

    })



// --------------------------------
    

    toy.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
         
     

        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("toyCnt").append(productDiv)

    })




// ------------------------------




    waterBottles.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
         
 

        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("bottles").append(productDiv)

    })


    // ---------------------------------


    homeImprovement.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
         

        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("improveC").append(productDiv)

    })

    bluetoothEarphone.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
         
  

        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("deviceB").append(productDiv)

    })



    sportingBluetooth.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
         

        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("sportsBlue").append(productDiv)

    })


    var wirelessChargers=JSON.parse(localStorage.getItem("wirelessChargers"))


    wirelessChargers.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
         
     
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("wirelessC").append(productDiv)

    })


    var wirelessSpeakers=JSON.parse(localStorage.getItem("wirelessSpeakers"))
    console.log(wirelessSpeakers)


    wirelessSpeakers.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
 
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("wirelessSpeak").append(productDiv)

    })


    var smartWatches=JSON.parse(localStorage.getItem("smartWatches"))


    smartWatches.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"


       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
  
        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("smartW").append(productDiv)

    })


    var mensWatches=JSON.parse(localStorage.getItem("mensWatches"))

    // console.log(mensWatches)


    mensWatches.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"

       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
    

        
        productDiv.append(image,nameRating,hr,priceBox,para);
        document.getElementById("mensW").append(productDiv)

    })


    var electronics=JSON.parse(localStorage.getItem("electronics"))

    electronics.map(function(elem,index){
        var productDiv=document.createElement("div");
        productDiv.setAttribute("id","arrivalProDiv")


        var image= document.createElement("img");
        image.setAttribute("src",elem.image);

       var nameRating=document.createElement("div");
       nameRating.setAttribute("id","name-rating")
       
       

        var name=document.createElement("p");
        name.innerText=elem.name;

       var ratingIcon=document.createElement("div");
       ratingIcon.setAttribute("id","rating-icon")

        var rating=document.createElement("p");
        rating.innerText=elem.rating;

        var ratingStar=document.createElement("span")
        ratingStar.setAttribute("class","fa fa-star");

        ratingIcon.append(rating,ratingStar)
        
        nameRating.append(name,ratingIcon)

        var hr=document.createElement("hr")
        hr.style.backgroundColor="#ECEFF1"
        hr.style.margin="0 1px 9px 1px"
        hr.style.height="1px";
       //  hr.style.padding="0 1px"

       var priceBox=document.createElement("div")
       priceBox.setAttribute("class","priceBox")
 
    var symbol=document.createElement("span")
    symbol.setAttribute("class", "inr-sign")
    symbol.style.paddingLeft="10px"
        
    var price=document.createElement("p");
        price.setAttribute("class","priceOf")
        price.innerText=elem.price;

    priceBox.append(symbol,price)

        
        var para=document.createElement("p");
        para.setAttribute("class","pricePara")
        para.innerText=elem.para;
        
      

        
        productDiv.append(image,nameRating,hr,priceBox,para);
 
        document.getElementById("electricDev").append(productDiv)

    })

    console.log(electronics.index)




    var giftUp=JSON.parse(localStorage.getItem("giftUp"))

    giftUp.map(function(elem){

        var innerGift=document.createElement("div");


        var image=document.createElement("img");
        image.setAttribute("src",elem.img)

        innerGift.append(image)

        document.querySelector(".gift1").append(innerGift)


    })

     
    var giftDown=JSON.parse(localStorage.getItem("giftDown"))

    giftDown.map(function(elem){

        var innerGift=document.createElement("div");


        var image=document.createElement("img");
        image.setAttribute("src",elem.img)

        innerGift.append(image)

        document.querySelector(".gift2").append(innerGift)

    })


    var asSeenOn=JSON.parse(localStorage.getItem("asSeenOn"))

    asSeenOn.map(function(elem){

        var div=document.createElement("div")

        var img=document.createElement("img")
        img.setAttribute("src",elem.img)

        var h4=document.createElement("h4");
        h4.innerText=elem.h4 ;

        var a= document.createElement("p")
        a.innerText=elem.a ;

        div.append(img,h4,a)
        document.getElementById("asSeenOn").append(div)
    })




    // 
//                                 scrolling Functionality                           //
    // 




    var i=1;

var leftSwipe=document.querySelector(".left-swipe").addEventListener("click",leftSwipeFun);
function leftSwipeFun(){
   var movingPro= document.getElementById("window")

    movingPro.style.transform=`translateX(${300 * i}px)`
    i++ ;
}



var rightSwipe=document.querySelector(".right-swipe").addEventListener("click",rightSwipeFun);
function rightSwipeFun(){
 var movingPro= document.getElementById("window")

    movingPro.style.transform=`translateX(${-300 * i}px)`
    i++;
    }
  


    var leftSwipe1=document.querySelector(".left-swipe1").addEventListener("click",leftSwipeFun1);
    function leftSwipeFun1(){
       var mobilesCart= document.getElementById("mobilesCart")
    
       mobilesCart.style.transform=`translateX(${300 * i}px)`
        i++ ;
    }
    
    
    
    var rightSwipe1=document.querySelector(".right-swipe1").addEventListener("click",rightSwipeFun1);
    function rightSwipeFun1(){
     var mobilesCart= document.getElementById("mobilesCart")
    
     mobilesCart.style.transform=`translateX(${-300 * i}px)`
        i++;
        }


        var leftSwipe2=document.querySelector(".left-swipe2").addEventListener("click",leftSwipeFun2);
    function leftSwipeFun2(){
       var toyCnt= document.getElementById("toyCnt")
    
       toyCnt.style.transform=`translateX(${300 * i}px)`
        i++ ;
    }
    
    
    
    var rightSwipe2=document.querySelector(".right-swipe2").addEventListener("click",rightSwipeFun2);
    function rightSwipeFun2(){
     var toyCnt= document.getElementById("toyCnt")
    
     toyCnt.style.transform=`translateX(${-300 * i}px)`
        i++;
        }




        var leftSwipe3=document.querySelector(".left-swipe3").addEventListener("click",leftSwipeFun3);
    function leftSwipeFun3(){
       var bottles= document.getElementById("bottles")
    
       bottles.style.transform=`translateX(${300 * i}px)`
        i++ ;
    }
    
    
    
    var rightSwipe3=document.querySelector(".right-swipe3").addEventListener("click",rightSwipeFun3);
    function rightSwipeFun3(){
     var bottles= document.getElementById("bottles")
    
     bottles.style.transform=`translateX(${-300 * i}px)`
        i++;
        }




        
        var leftSwipe4=document.querySelector(".left-swipe4").addEventListener("click",leftSwipeFun4);
    function leftSwipeFun4(){
       var improveC= document.getElementById("improveC")
    
       improveC.style.transform=`translateX(${300 * i}px)`
        i++ ;
    }
    
    
    
    var rightSwipe4=document.querySelector(".right-swipe4").addEventListener("click",rightSwipeFun4);
    function rightSwipeFun4(){
     var improveC= document.getElementById("improveC")
    
     improveC.style.transform=`translateX(${-300 * i}px)`
        i++;
        }



        var leftSwipe5=document.querySelector(".left-swipe5").addEventListener("click",leftSwipeFun5);
        function leftSwipeFun5(){
           var deviceB= document.getElementById("deviceB")
        
           deviceB.style.transform=`translateX(${300 * i}px)`
            i++ ;
        }
        
        
        
        var rightSwipe5=document.querySelector(".right-swipe5").addEventListener("click",rightSwipeFun5);
        function rightSwipeFun5(){
         var deviceB= document.getElementById("deviceB")
        
         deviceB.style.transform=`translateX(${-300 * i}px)`
            i++;
            }
    
// ================================


            var leftSwipe6=document.querySelector(".left-swipe6").addEventListener("click",leftSwipeFun6);
            function leftSwipeFun6(){
               var sportsBlue= document.getElementById("sportsBlue")
            
               sportsBlue.style.transform=`translateX(${300 * i}px)`
                i++ ;
            }
            
            
            
            var rightSwipe6=document.querySelector(".right-swipe6").addEventListener("click",rightSwipeFun6);
            function rightSwipeFun6(){
             var sportsBlue= document.getElementById("sportsBlue")
            
             sportsBlue.style.transform=`translateX(${-300 * i}px)`
                i++;
                }
        

                // ===============================


                var leftSwipe7=document.querySelector(".left-swipe7").addEventListener("click",leftSwipeFun7);
                function leftSwipeFun7(){
                   var wirelessC= document.getElementById("wirelessC")
                
                   wirelessC.style.transform=`translateX(${300 * i}px)`
                    i++ ;
                }
                
                
                
                var rightSwipe7=document.querySelector(".right-swipe7").addEventListener("click",rightSwipeFun7);
                function rightSwipeFun7(){
                 var wirelessC= document.getElementById("wirelessC")
                
                 wirelessC.style.transform=`translateX(${-300 * i}px)`
                    i++;
                    }
        
                    
                    // =======================================


                    var leftSwipe8=document.querySelector(".left-swipe8").addEventListener("click",leftSwipeFun8);
                    function leftSwipeFun8(){
                       var wirelessSpeak= document.getElementById("wirelessSpeak")
                    
                       wirelessSpeak.style.transform=`translateX(${300 * i}px)`
                        i++ ;
                    }
                    
                    
                    
                    var rightSwipe8=document.querySelector(".right-swipe8").addEventListener("click",rightSwipeFun8);
                    function rightSwipeFun8(){
                     var wirelessSpeak= document.getElementById("wirelessSpeak")
                    
                     wirelessSpeak.style.transform=`translateX(${-300 * i}px)`
                        i++;
                        }
        
                        
                        // =============================


                        var leftSwipe9=document.querySelector(".left-swipe9").addEventListener("click",leftSwipeFun9);
                        function leftSwipeFun9(){
                           var smartW= document.getElementById("smartW")
                        
                           smartW.style.transform=`translateX(${300 * i}px)`
                            i++ ;
                        }
                        
                        
                        
                        var rightSwipe9=document.querySelector(".right-swipe9").addEventListener("click",rightSwipeFun9);
                        function rightSwipeFun9(){
                         var smartW= document.getElementById("smartW")
                        
                         smartW.style.transform=`translateX(${-300 * i}px)`
                            i++;
                            }
                    

// ===================================================



                            var leftSwipe10=document.querySelector(".left-swipe10").addEventListener("click",leftSwipeFun10);
                            function leftSwipeFun10(){
                               var mensW= document.getElementById("mensW")
                            
                               mensW.style.transform=`translateX(${300 * i}px)`
                                i++ ;
                            }
                            
                            
                            
                            var rightSwipe10=document.querySelector(".right-swipe10").addEventListener("click",rightSwipeFun10);
                            function rightSwipeFun10(){
                             var mensW= document.getElementById("mensW")
                            
                             mensW.style.transform=`translateX(${-300 * i}px)`
                                i++;
                                }
                        

                                var leftSwipe11=document.querySelector(".left-swipe11").addEventListener("click",leftSwipeFun11);
                            function leftSwipeFun11(){
                               var electricDev= document.getElementById("electricDev")
                            
                               electricDev.style.transform=`translateX(${300 * i}px)`
                                i++ ;
                            }
                            
                            
                            
                            var rightSwipe11=document.querySelector(".right-swipe11").addEventListener("click",rightSwipeFun11);
                            function rightSwipeFun11(){
                             var electricDev= document.getElementById("electricDev")
                            
                             electricDev.style.transform=`translateX(${-300 * i}px)`
                                i++;
                                }
                        