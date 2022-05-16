var slideImage=[
    {img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/home/12011222143847_web%20banner%20f.jpg"},
    {img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/home/04120420164842_55c39054-c908-4e16-bb9e-45efc6534b1d.jpg"},
    {img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/home/12011222144050_web%20template-01.jpg"},
    {img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/home/01090120193056_ad853907-0dcc-44f3-acd0-3b49700d279c.jpg"},
    {img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/home/20012021172738_d.jpg"},
]
localStorage.setItem("slideImage", JSON.stringify(slideImage))


var firstMovingProduct=[
    {
    image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDIwXC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name:"Huawei Mate 40 Ring Light Cover",
    rating:"4.6/5",
    price:3999,
    para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDIyXC9QaW5rX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:  "KZ SK10 TWS Wirelss Earphones",
        rating:"5.0/5",
        price: 4499,
        para:"Free Shipping",
       },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDE4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       name:"Mask With Bluetooth",
       rating:"3.7/5",
       price: 3999,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzA2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       name:"Wearbuds TWS Smart Watch",
       rating:"4.0/5",
       price: 32999,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       name:"Lenovo Pad Plus 11 inch Tablet (6GB+128GB)",
       rating:"4.5/5",
       price: 29999,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTgwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       name:"TWS Bluetooth Earbud",
       rating:"4.6/5",
       price: 3399,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzU5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       name:"Haylou GT2S Earbuds",
       rating:"4.5/5",
       price: 3199,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzA3XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
       name:"Wearbud Pro Smart Watch",
       rating:"4.3/5",
       price: 19999,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjkxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       name:"NEO Serie Smartwatch",
       rating:"5.0/5",
       price: 5499,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzg2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       name:"Soundpeats Bluetooth Earphones",
       rating:"4.7/5",
       price: 4999,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDQ2XC9TaWx2ZXJfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
       name:"Sport Smart Watch",
       rating:"4.5/5",
       price: 3999,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Nzc3XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
       name:"Mens Digital Quartz Watch",
       rating:"4.5/5",
       price: 3299,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwNDAyXC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
       name:"Multi-purpose Quartz Watch",
       rating:"4.7/5",
       price: 3699,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTU2XC9SZWRfbl8xX01lYW5idXkyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
       name:"Honor Pro 5.0 Earphone",
       rating:"4.3/5",
       price: 6499,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTY1XC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
       name:"8GB Bluetooth Headset",
       rating:"4.5/5",
       price: 11499,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDU1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
       name:"Whizzer Wired Earphone",
       rating:"4.7/5",
       price: 12999,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODQyXC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
       name:"Sabbat E12 Earbuds",
       rating:"4.6/5",
       price: 8999,
       para:"Free Shipping",
    },
    {
       image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjk3XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
       name:"Baseus 7in1 Charger",
       rating:"4.5/5",
       price: 3299,
       para:"Free Shipping",
    }
 ]
 localStorage.setItem("firstMovingProduct", JSON.stringify(firstMovingProduct))

 
 var mobileAccessories=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"M8 Bluetooth Speaker",
        rating:"4.7/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Qi Wireles Charger",
        rating:"4.6/5",
        price: 3199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MTA5XC9TaWx2ZXJfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Car Mount Charger",
        rating:"4.2/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMzYyXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"7in1 Quick Charge",
        rating:"4.7/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4OTk3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Charging Case",
        rating:"4.6/5",
        price: 1799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3OTcyXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"3in1 Charging Dock",
        rating:"4.4/5",
        price:2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NzEzXC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"3in1 Charge Stand",
        rating:"4.3/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDgwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USB Cable Organizer Holder",
        rating:"4.1/5",
        price: 499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MTAzXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USB Dashboard Pad",
        rating:"4.8/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDc5XC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"3in1 Charging Cable",
        rating:"4.5/5",
        price: 699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"M8 Bluetooth Speaker",
        rating:"4.7/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Qi Wireles Charger",
        rating:"4.6/5",
        price: 3199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MTA5XC9TaWx2ZXJfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Car Mount Charger",
        rating:"4.2/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMzYyXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"7in1 Quick Charge",
        rating:"4.7/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NzEzXC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"3in1 Charge Stand",
        rating:"4.3/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDgwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USB Cable Organizer Holder",
        rating:"4.1/5",
        price: 499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4OTk3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Charging Case",
        rating:"4.6/5",
        price: 1799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3OTcyXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"3in1 Charging Dock",
        rating:"4.4/5",
        price:2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NzEzXC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"3in1 Charge Stand",
        rating:"4.3/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDgwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USB Cable Organizer Holder",
        rating:"4.1/5",
        price: 499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MTAzXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USB Dashboard Pad",
        rating:"4.8/5",
        price: 1999,
        para:"Free Shipping"
    },
]
localStorage.setItem("mobileAccessories", JSON.stringify(mobileAccessories))


var toy=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjcxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Remote Control Monster Trurk",
        rating:"4.5/5",
        price: 3299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjcyXC9HcmVlbl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Remote Control Monster Drift Toy",
        rating:"4.4/5",
        price: 3199,
        para:"Free Shipping"
    },
    {   image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjczXC9ZZWxsb3dfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Remote Controlled Monster Drift Toy",
        rating:"3.8/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjc1XC9ZZWxsb3dfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Remote Control Construction Truck",
        rating:"4.3/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjc3XC9ZZWxsb3dfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Kids Remote Control Construction Toy",
        rating:"4.5/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjc5XC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Remote Control Whale Shark",
        rating:"4.4/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjgxXC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Remote Control Robot",
        rating:"5.0/5",
        price: 3899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjc2XC9ZZWxsb3dfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Remote Control Construction Toy",
        rating:"4.5/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjc4XC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Remote Control Shark Toy",
        rating:"3.8/5",
        price: 3499,
        para:"Free Shipping"
    },
]
localStorage.setItem("toy", JSON.stringify(toy))


var waterBottles=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzODExXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Smart Display Water Bottle",
        rating:"4.5/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MTU5XC9Sb3NlX25fMV9XYXRlckJvdHRsZTIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"500ml Stainles Steel Travel Tea Bottle",
        rating:"4.7/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MTM3XC9SZWRfbl8xX1dhdGVyQm90dGxlMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"380ml Portable Glass Insulated Tea Bottle",
        rating:"4.8/5",
        price: 4199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MTExXC9CbHVlX25fMV9XYXRlckJvdHRsZTIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"500ml Luminous Thermos Water Bottle",
        rating:"4.7/5",
        price: 2549,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MTMzXC9SZWRfbl8xX1dhdGVyQm90dGxlMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Sports Ultralight Stainless Steel Water Bottle",
        rating:"4.9/5",
        price:2749,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MTA3XC9OYXZ5K0JsdWVfbl8xX1dhdGVyQm90dGxlNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Portable stainlesss Steel Avenger Thermos Cans",
        rating:"4.7/5",
        price: 2899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzODExXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Smart Display Water Bottle",
        rating:"4.5/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MTU5XC9Sb3NlX25fMV9XYXRlckJvdHRsZTIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"500ml Stainles Steel Travel Tea Bottle",
        rating:"4.7/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MTM3XC9SZWRfbl8xX1dhdGVyQm90dGxlMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"380ml Portable Glass Insulated Tea Bottle",
        rating:"4.8/5",
        price: 4199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MTExXC9CbHVlX25fMV9XYXRlckJvdHRsZTIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"500ml Luminous Thermos Water Bottle",
        rating:"4.7/5",
        price: 2549,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MTMzXC9SZWRfbl8xX1dhdGVyQm90dGxlMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Sports Ultralight Stainless Steel Water Bottle",
        rating:"4.9/5",
        price:2749,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MTA3XC9OYXZ5K0JsdWVfbl8xX1dhdGVyQm90dGxlNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Portable stainlesss Steel Avenger Thermos Cans",
        rating:"4.7/5",
        price: 2899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MTM4XC9CbGFja19uXzFfV2F0ZXJCb3R0bGUxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Stainle Steel Glass Infuser Water Bottle",
        rating:"4.9/5",
        price: 3199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MTM4XC9CbGFja19uXzFfV2F0ZXJCb3R0bGUxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Stainle Steel Glass Infuser Water Bottle",
        rating:"4.9/5",
        price: 3199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MTE0XC9CbHVlX25fMV9XYXRlckJvdHRsZTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"800ml Stainless Steel Water Bottle",
        rating:"4.8/5",
        price: 2849,
        para:"Free Shipping"
    }
]
localStorage.setItem("waterBottles", JSON.stringify(waterBottles))


var homeImprovement=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTQxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Light Detection Sensor",
        rating:"4.5/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Monitor Light Bar",
        rating:"3.8/5",
        price: 5799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjA1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"BOTMI Silicone Night Light",
        rating:"5.0/5",
        price: 3445,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjgxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Silicone LED Lamp",
        rating:"4.2/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzA0XC9SZWRfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Water Stopper Flood Barrier",
        rating:"4.7/5",
        price: 11999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3ODY3XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USB Drawing Board",
        rating:"3.9/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ0XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Mosquito Killer Lamp",
        rating:"4.1/5",
        price: 3399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3ODU4XC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"LED Digital Alarm",
        rating:"4.3/5",
        price: 1799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ2XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Touch Switch LED Lamp",
        rating:"4.4/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMDA0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Smart Antibacterial Humidifier",
        rating:"4.4/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4MDQ4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Smart Fingerprint Lock",
        rating:"4.2/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTQxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Light Detection Sensor",
        rating:"4.5/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Monitor Light Bar",
        rating:"3.8/5",
        price: 5799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjA1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"BOTMI Silicone Night Light",
        rating:"5.0/5",
        price: 3445,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjgxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Silicone LED Lamp",
        rating:"4.2/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzA0XC9SZWRfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Water Stopper Flood Barrier",
        rating:"4.7/5",
        price: 11999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3ODY3XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USB Drawing Board",
        rating:"3.9/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ0XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Mosquito Killer Lamp",
        rating:"4.1/5",
        price: 3399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3ODU4XC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"LED Digital Alarm",
        rating:"4.3/5",
        price: 1799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ2XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Touch Switch LED Lamp",
        rating:"4.4/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMDA0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Smart Antibacterial Humidifier",
        rating:"4.4/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4MDQ4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Smart Fingerprint Lock",
        rating:"4.2/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTQxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Light Detection Sensor",
        rating:"4.5/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Monitor Light Bar",
        rating:"3.8/5",
        price: 5799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjA1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"BOTMI Silicone Night Light",
        rating:"5.0/5",
        price: 3445,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjgxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Silicone LED Lamp",
        rating:"4.2/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzA0XC9SZWRfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Water Stopper Flood Barrier",
        rating:"4.7/5",
        price: 11999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3ODY3XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USB Drawing Board",
        rating:"3.9/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ0XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Mosquito Killer Lamp",
        rating:"4.1/5",
        price: 3399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3ODU4XC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"LED Digital Alarm",
        rating:"4.3/5",
        price: 1799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ2XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Touch Switch LED Lamp",
        rating:"4.4/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMDA0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Smart Antibacterial Humidifier",
        rating:"4.4/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4MDQ4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Smart Fingerprint Lock",
        rating:"4.2/5",
        price: 2799,
        para:"Free Shipping"
    }
]
localStorage.setItem("homeImprovement", JSON.stringify(homeImprovement))


var bluetoothEarphone=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMwNDk5XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"JBL T280 TWS Bluetooth",
        rating:"4.5/5",
        price: 10999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMwNTU5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Huawei FreeLace Pro Earphones",
        rating:"5.0/5",
        price: 8999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Bluetooth Headset with Smart Watch",
        rating:"4.5/5",
        price: 4299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"OT1 TWS Airdots",
        rating:"4.7/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ5XC9SZWRfbl8xXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"True Wireless Dynamic Earbuds",
        rating:"4.5/5",
        price: 12999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODMxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Awei T85 TWS Earbuds",
        rating:"4.5/5",
        price: 3599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MzYxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Huawein FreeBuds 3 Earphone",
        rating:"3.7/5",
        price: 17999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjQ5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Q9S TWS Earphones",
        rating:"4.5/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"6D Sport Stereo Headset",
        rating:"4.7/5",
        price: 3099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTgwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Bluetooth Earbuds",
        rating:"4.6/5",
        price: 3399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMwNDk5XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"JBL T280 TWS Bluetooth",
        rating:"4.5/5",
        price: 10999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMwNTU5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Huawei FreeLace Pro Earphones",
        rating:"5.0/5",
        price: 8999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Bluetooth Headset with Smart Watch",
        rating:"4.5/5",
        price: 4299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"OT1 TWS Airdots",
        rating:"4.7/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ5XC9SZWRfbl8xXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"True Wireless Dynamic Earbuds",
        rating:"4.5/5",
        price: 12999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODMxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Awei T85 TWS Earbuds",
        rating:"4.5/5",
        price: 3599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MzYxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Huawein FreeBuds 3 Earphone",
        rating:"3.7/5",
        price: 17999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjQ5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Q9S TWS Earphones",
        rating:"4.5/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"6D Sport Stereo Headset",
        rating:"4.7/5",
        price: 3099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTgwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Bluetooth Earbuds",
        rating:"4.6/5",
        price: 3399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMwNDk5XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"JBL T280 TWS Bluetooth",
        rating:"4.5/5",
        price: 10999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMwNTU5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Huawei FreeLace Pro Earphones",
        rating:"5.0/5",
        price: 8999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Bluetooth Headset with Smart Watch",
        rating:"4.5/5",
        price: 4299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"OT1 TWS Airdots",
        rating:"4.7/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ5XC9SZWRfbl8xXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"True Wireless Dynamic Earbuds",
        rating:"4.5/5",
        price: 12999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODMxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Awei T85 TWS Earbuds",
        rating:"4.5/5",
        price: 3599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MzYxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Huawein FreeBuds 3 Earphone",
        rating:"3.7/5",
        price: 17999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjQ5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Q9S TWS Earphones",
        rating:"4.5/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"6D Sport Stereo Headset",
        rating:"4.7/5",
        price: 3099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTgwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Bluetooth Earbuds",
        rating:"4.6/5",
        price: 3399,
        para:"Free Shipping"
    }
]
localStorage.setItem("bluetoothEarphone", JSON.stringify(bluetoothEarphone))


var sportingBluetooth=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDI2XC9QaW5rX25fMV8zLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Whizzer Bluetooth Earphones",
        rating:"4.6/5",
        price: 7999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzk3XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Edifier Bluetooth Earphone",
        rating:"4.9/5",
        price: 7999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjQxXC9CbGFja19uXzFfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Wirless Stereo Headset",
        rating:"5.0/5",
        price: 999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTY1XC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"8GB Bluetooth Headset",
        rating:"4.5/5",
        price: 11499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTU2XC9SZWRfbl8xX01lYW5idXkyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Honor Pro 5.0 Earphone",
        rating:"4.3/5",
        price: 6499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTUxXC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"X9 Wireless Earphone",
        rating:"4.5/5",
        price: 3099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDI5XC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Langsdom L9 Bluetooth",
        rating:"4.4/5",
        price: 3099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTc3XC9SZWRfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mifa Waterproof Earphones",
        rating:"4.2/5",
        price: 3099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzk3XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Edifier Bluetooth Earphone",
        rating:"4.9/5",
        price: 7999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjQxXC9CbGFja19uXzFfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Wirless Stereo Headset",
        rating:"5.0/5",
        price: 999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTY1XC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"8GB Bluetooth Headset",
        rating:"4.5/5",
        price: 11499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTU2XC9SZWRfbl8xX01lYW5idXkyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Honor Pro 5.0 Earphone",
        rating:"4.3/5",
        price: 6499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTUxXC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"X9 Wireless Earphone",
        rating:"4.5/5",
        price: 3099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDI5XC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Langsdom L9 Bluetooth",
        rating:"4.4/5",
        price: 3099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTc3XC9SZWRfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mifa Waterproof Earphones",
        rating:"4.2/5",
        price: 3099,
        para:"Free Shipping"
    }
]
localStorage.setItem("sportingBluetooth", JSON.stringify(sportingBluetooth))


var wirelessChargers=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjk3XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Baseus 7in1 Charger",
        rating:"4.5/5",
        price: 3299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MjU5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Magnetic Charger",
        rating:"4.4/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjk4XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Basues Multi Charger",
        rating:"4.7/5",
        price: 3599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjYyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Qi Wireless Charger",
        rating:"4.3/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NTA3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USAMS Charging Pad",
        rating:"4.9/5",
        price: 1299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NTA0XC9CbGFja19uXzFfMTAyMDAwNzM0fjEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USAMS CD30 Charger",
        rating:"4.7/5",
        price: 999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NDM2XC9CbGFja19uXzFfQ1c4XzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"HOCO CW8 Charger",
        rating:"4.8/5",
        price: 999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjU2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Qi Charger",
        rating:"4.6/5",
        price: 1199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NTA3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USAMS Charging Pad",
        rating:"4.9/5",
        price: 1299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NTA0XC9CbGFja19uXzFfMTAyMDAwNzM0fjEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USAMS CD30 Charger",
        rating:"4.7/5",
        price: 999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NDM2XC9CbGFja19uXzFfQ1c4XzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"HOCO CW8 Charger",
        rating:"4.8/5",
        price: 999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjU2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Qi Charger",
        rating:"4.6/5",
        price: 1199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NDMzXC9TaWx2ZXJfbl8xX0NXMTFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"HOCO CW11 Charger",
        rating:"4.8/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NDM0XC9CbGFja19uXzFfQ1cxMF8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"HOCO CW10 Charger",
        rating:"4.3/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjk3XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Baseus 7in1 Charger",
        rating:"4.5/5",
        price: 3299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MjU5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Magnetic Charger",
        rating:"4.4/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjk4XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Basues Multi Charger",
        rating:"4.7/5",
        price: 3599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjYyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Qi Wireless Charger",
        rating:"4.3/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NTA3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USAMS Charging Pad",
        rating:"4.9/5",
        price: 1299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NTA0XC9CbGFja19uXzFfMTAyMDAwNzM0fjEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USAMS CD30 Charger",
        rating:"4.7/5",
        price: 999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NDM2XC9CbGFja19uXzFfQ1c4XzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"HOCO CW8 Charger",
        rating:"4.8/5",
        price: 999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjU2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Qi Charger",
        rating:"4.6/5",
        price: 1199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NDMzXC9TaWx2ZXJfbl8xX0NXMTFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"HOCO CW11 Charger",
        rating:"4.8/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NDM0XC9CbGFja19uXzFfQ1cxMF8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"HOCO CW10 Charger",
        rating:"4.3/5",
        price: 1499,
        para:"Free Shipping"
    }
]
localStorage.setItem("wirelessChargers", JSON.stringify(wirelessChargers))


var wirelessSpeakers=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQwXC9SZWRfbl8xXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Smart Bluetooth Speaker with Alexa",
        rating:"4.5/5",
        price: 14999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQxXC9SZWRfbl8xXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Neck Speaker with Google Assitant",
        rating:"4.7/5",
        price: 17999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzkwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Lenovo K3 Wireless Speaker",
        rating:"3.7/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTk5XC9SZWRfbl8xX0JsdWV0b290aFNwZWFrZXIxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Iron Man Bluetooth Speaker",
        rating:"4.7/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQyXC9CbGFja19uXzFfMS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Smart 360 Degree Speaker",
        rating:"3.5/5",
        price: 29999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjU5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"MIFA F10 Bluetooth Speakers",
        rating:"4.3/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQzXC9CZWlnZV9uXzFfMS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Bluetooth Audio Speaker",
        rating:"4.4/5",
        price: 85999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjUxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Marvel Bluetooth Speakers",
        rating:"4.3/5",
        price: 4799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI1MzYxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Mini Speaker",
        rating:"4.9/5",
        price: 4425,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MDA1XC9NdWx0aX5jb2xvcl9uXzFfQmx1ZXRvb3RoU3BlYWtlcjEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mifa i8 Speaker",
        rating:"4.7/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQwXC9SZWRfbl8xXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Smart Bluetooth Speaker with Alexa",
        rating:"4.5/5",
        price: 14999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQxXC9SZWRfbl8xXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Neck Speaker with Google Assitant",
        rating:"4.7/5",
        price: 17999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzkwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Lenovo K3 Wireless Speaker",
        rating:"3.7/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTk5XC9SZWRfbl8xX0JsdWV0b290aFNwZWFrZXIxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Iron Man Bluetooth Speaker",
        rating:"4.7/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQyXC9CbGFja19uXzFfMS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Smart 360 Degree Speaker",
        rating:"3.5/5",
        price: 29999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjU5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"MIFA F10 Bluetooth Speakers",
        rating:"4.3/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI1MzYxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Mini Speaker",
        rating:"4.9/5",
        price: 4425,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MDA1XC9NdWx0aX5jb2xvcl9uXzFfQmx1ZXRvb3RoU3BlYWtlcjEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mifa i8 Speaker",
        rating:"4.7/5",
        price: 1999,
        para:"Free Shipping"
    }
]
localStorage.setItem("wirelessSpeakers", JSON.stringify(wirelessSpeakers))


var smartWatches=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzcwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"KOSPET Optimus 2 Smartwatch",
        rating:"4.3/5",
        price: 20999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTc2XC9TaWx2ZXJfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mens Smart watch",
        rating:"4.5/5",
        price: 3799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzY4XC9CbHVlX25fMV8yLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"LOKMAT Attack Smart Watch",
        rating:"4.8/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjUwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"HAYLOU LS05 Smartwatch",
        rating:"4.5/5",
        price: 5299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3Mzk2XC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"LEMFO LEMD Smart Watch",
        rating:"3.8/5",
        price: 8999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Haylou RS4 Smartwatch",
        rating:"4.2/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Haylou RT2 LS10 Smartwatch",
        rating:"4.1/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjkyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"ZEBLAZE THOR 4 Dual SmartWatch",
        rating:"4.7/5",
        price: 14399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MzUyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TICWRIS Max 4G Smart Watch",
        rating:"3.5/5",
        price: 25099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjg0XC9CbGFja19uXzNfMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Magnetic Multi-function Watch",
        rating:"4.8/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjg1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Magnetic Metal Watch",
        rating:"4.2/5",
        price: 3799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjk2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Magnetic Wrist Watch",
        rating:"4.8/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyODg4XC9HcmF5X25fMV8zLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Mens Digital Sports Watch",
        rating:"4.4/5",
        price: 1699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTEwXC9SZWRfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Digital Waterproof Watch",
        rating:"4.4/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTMwXC9Sb3NlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Steel Quartz Watch",
        rating:"4.7/5",
        price: 1699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDgxXC9TaWx2ZXJfbl8xXzIuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Mens Luminous Wristwatch",
        rating:"4.5/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDY5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Dragon Pattern Wristwatch",
        rating:"4.8/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDcxXC9CbHVlX25fMV8xLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"CURRENT Leather Belt Watch",
        rating:"4.6/5",
        price: 1899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDU4XC9CbHVlX25fMV8xLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Leather Belt Sport Watch",
        rating:"5.0/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjE0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"LEMFO LEMX Smartwatch",
        rating:"3.5/5",
        price: 29999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjEyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"KOSPET Prime Smartwatch",
        rating:"4.1/5",
        price: 25999,
        para:"Free Shipping"
    }
]
localStorage.setItem("smartWatches", JSON.stringify(smartWatches))


var mensWatches=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjg0XC9CbGFja19uXzNfMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Magnetic Multi-function Watch",
        rating:"4.8/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjg1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Magnetic Metal Watch",
        rating:"4.2/5",
        price: 3799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjk2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Magnetic Wrist Watch",
        rating:"4.8/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyODg4XC9HcmF5X25fMV8zLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Mens Digital Sports Watch",
        rating:"4.4/5",
        price: 1699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTEwXC9SZWRfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Digital Waterproof Watch",
        rating:"4.4/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MzUyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TICWRIS Max 4G Smart Watch",
        rating:"3.5/5",
        price: 25099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjg0XC9CbGFja19uXzNfMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Magnetic Multi-function Watch",
        rating:"4.8/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjg1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Magnetic Metal Watch",
        rating:"4.2/5",
        price: 3799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjk2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Magnetic Wrist Watch",
        rating:"4.8/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyODg4XC9HcmF5X25fMV8zLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Mens Digital Sports Watch",
        rating:"4.4/5",
        price: 1699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTMwXC9Sb3NlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Steel Quartz Watch",
        rating:"4.7/5",
        price: 1699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDgxXC9TaWx2ZXJfbl8xXzIuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Mens Luminous Wristwatch",
        rating:"4.5/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzcwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"KOSPET Optimus 2 Smartwatch",
        rating:"4.3/5",
        price: 20999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTc2XC9TaWx2ZXJfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mens Smart watch",
        rating:"4.5/5",
        price: 3799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzY4XC9CbHVlX25fMV8yLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"LOKMAT Attack Smart Watch",
        rating:"4.8/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjUwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"HAYLOU LS05 Smartwatch",
        rating:"4.5/5",
        price: 5299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3Mzk2XC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"LEMFO LEMD Smart Watch",
        rating:"3.8/5",
        price: 8999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Haylou RS4 Smartwatch",
        rating:"4.2/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Haylou RT2 LS10 Smartwatch",
        rating:"4.1/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjkyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"ZEBLAZE THOR 4 Dual SmartWatch",
        rating:"4.7/5",
        price: 14399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MzUyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TICWRIS Max 4G Smart Watch",
        rating:"3.5/5",
        price: 25099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjg0XC9CbGFja19uXzNfMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Magnetic Multi-function Watch",
        rating:"4.8/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjg1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Magnetic Metal Watch",
        rating:"4.2/5",
        price: 3799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDY5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Dragon Pattern Wristwatch",
        rating:"4.8/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDcwXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Forshining Luxury Watch",
        rating:"4.8/5",
        price: 1899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDcxXC9CbHVlX25fMV8xLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"CURRENT Leather Belt Watch",
        rating:"4.6/5",
        price: 1899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDU4XC9CbHVlX25fMV8xLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Leather Belt Sport Watch",
        rating:"5.0/5",
        price: 2999,
        para:"Free Shipping"
    }
]
localStorage.setItem("mensWatches", JSON.stringify(mensWatches))


var electronics=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTg4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Smart Watch",
        rating:"4.8/5",
        price: 4299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDE4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Mask With Bluethooth",
        rating:"3.7/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNDcxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"HOCO 3in Charger",
        rating:"4.9/5",
        price: 1699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzAzXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"1080P Wireless CCTV Bulb Camera",
        rating:"3.6/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNDEzXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Bluedio Bluetooth Earphone",
        rating:"4.5/5",
        price: 1899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTg1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Meizu POP TW50 Bluetooth",
        rating:"5.0/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMjUwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USAMS 10000mAh Powerbank",
        rating:"4.4/5",
        price: 1099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTc3XC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"DBT02 TWS Earburds",
        rating:"4.9/5",
        price: 2399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDA2XC9SZWRfbl8xXzUuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"i7s TWS Wireless Bluetooth Earphone With Box",
        rating:"5.0/5",
        price: 799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTc4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"DBT04 TWS Earburds",
        rating:"4.7/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTc5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"DBT05 TWS Earburds",
        rating:"4.5/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTg4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Smart Watch",
        rating:"4.8/5",
        price: 4299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDE4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Mask With Bluethooth",
        rating:"3.7/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNDcxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"HOCO 3in Charger",
        rating:"4.9/5",
        price: 1699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzAzXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"1080P Wireless CCTV Bulb Camera",
        rating:"3.6/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNDEzXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Bluedio Bluetooth Earphone",
        rating:"4.5/5",
        price: 1899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTg1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Meizu POP TW50 Bluetooth",
        rating:"5.0/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMjUwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USAMS 10000mAh Powerbank",
        rating:"4.4/5",
        price: 1099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTc3XC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"DBT02 TWS Earburds",
        rating:"4.9/5",
        price: 2399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDA2XC9SZWRfbl8xXzUuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"i7s TWS Wireless Bluetooth Earphone With Box",
        rating:"5.0/5",
        price: 799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTc4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"DBT04 TWS Earburds",
        rating:"4.7/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTc5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"DBT05 TWS Earburds",
        rating:"4.5/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTg4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Smart Watch",
        rating:"4.8/5",
        price: 4299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDE4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Mask With Bluethooth",
        rating:"3.7/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNDcxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"HOCO 3in Charger",
        rating:"4.9/5",
        price: 1699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzAzXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"1080P Wireless CCTV Bulb Camera",
        rating:"3.6/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNDEzXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Bluedio Bluetooth Earphone",
        rating:"4.5/5",
        price: 1899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTg1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Meizu POP TW50 Bluetooth",
        rating:"5.0/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMjUwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USAMS 10000mAh Powerbank",
        rating:"4.4/5",
        price: 1099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTc3XC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"DBT02 TWS Earburds",
        rating:"4.9/5",
        price: 2399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDA2XC9SZWRfbl8xXzUuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"i7s TWS Wireless Bluetooth Earphone With Box",
        rating:"5.0/5",
        price: 799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTc4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"DBT04 TWS Earburds",
        rating:"4.7/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxOTc5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"DBT05 TWS Earburds",
        rating:"4.5/5",
        price: 1999,
        para:"Free Shipping"
    }
]
localStorage.setItem("electronics", JSON.stringify(electronics))


var giftUp=[
    {img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/home/19021922230951_Untitled-4-01.jpg"},
    {img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/home/14021422133434_a089c153-4eb7-42cb-9887-5ea6607cc623%20-%20Copy.jpg"},
    {img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/home/19021922231002_SL-100321-45940-06%20[Converted]-01.jpg"}
]
localStorage.setItem("giftUp", JSON.stringify(giftUp))


var giftDown=[
    {img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/home/19021922231030_home-01.jpg"},
    {img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/home/19021922231011_Untitled-11-01.jpg"},
    {img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/home/19021922231021_Untitled-10-01.jpg"}
]
localStorage.setItem("giftDown", JSON.stringify(giftDown))


var newArrivals=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTI4XC9QaW5rX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Pro8s Bluetooth Earphones",
        rating:"4.0/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"KS08 Gaming Earbud",
        rating:"4.8/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTMwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Hifi Bass In-ear Gaming Headset",
        rating:"4.6/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTMxXC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"P7 In-ear Binaural Earbuds",
        rating:"4.0/5",
        price: 14999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTMyXC9TbGF0ZStHcmF5X25fMV8zLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"P9 In-ear Deep Bass Earbuds",
        rating:"4.1/5",
        price: 22999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTIwXC9QaW5rX25fMV8zLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"U shape Kids Electric Toothbrush",
        rating:"4.4/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTIxXC9ZZWxsb3dfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Avocado LED Lamp",
        rating:"4.4/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTIyXC9XaGl0ZV9uXzFfNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Mini-Foldable PGG Neck Massager",
        rating:"3.6/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTIzXC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Mini TWS Subwoofer Speaker",
        rating:"3.6/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTA4XC9HcmVlbl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Burger Shaped Backpack",
        rating:"4.8/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTA5XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Cream Cake Backpack",
        rating:"4.0/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTEwXC9Ccm93bl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Brown Bear Backpack",
        rating:"4.5/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTExXC9Ccm93bl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Cute Bunny Backpack",
        rating:"4.0/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTEyXC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Kitty Backpack",
        rating:"4.5/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTAxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Amazfit X Smartwatch",
        rating:"3.9/5",
        price: 48999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTAyXC9XaGl0ZV9uXzFfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Amazfit Verge Lite Smartwatch",
        rating:"4.7/5",
        price: 8999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDkxXC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Donut Shape Rainbow",
        rating:"3.7/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDkyXC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Space Battleship Backpack",
        rating:"4.7/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDkzXC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Shiny Angel Backpack",
        rating:"3.8/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDk0XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"D-Shape Backpack",
        rating:"3.6/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDk1XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"D-Shape Rainbow Backpack",
        rating:"3.8/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDc0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"SYLLABLE 101 TWS Earphones",
        rating:"3.9/5",
        price: 6599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDc1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"T1 TWS Bluetooth Earphones",
        rating:"3.9/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDc2XC9PcmFuZ2Vfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Basketball Bluetooth Earphone",
        rating:"4.6/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDc3XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseball Bluetooth Earphone",
        rating:"3.7/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDc4XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Football Bluetooth Earphone",
        rating:"4.9/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDY0XC9QaW5rX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Earbuds with Makeup Mirror",
        rating:"4.3/5",
        price: 6999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDY1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"S19 MIni Bluetooth Earbuds",
        rating:"4.8/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDY2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"M5 TWS Gaming Earphone",
        rating:"3.8/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDY3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"SYLLABLE S115 Strong Bass Earphone",
        rating:"4.1/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDY4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Mifa X19 TWS Bluetooth Earphone",
        rating:"3.8/5",
        price: 3399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDUwXC9Ccm93bl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"LFTE03 Bluetooth Headset",
        rating:"5.0/5",
        price: 6299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDUxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"MONSTER AirLinks Headphone",
        rating:"4.4/5",
        price: 39999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDUyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Monster Inspire ANC Headphones",
        rating:"3.6/5",
        price: 45999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDUzXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"MONSTER Champion AirLinks Earphones",
        rating:"4.5/5",
        price:  21999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDU0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Avengers Neckband Earphones",
        rating:"4.3/5",
        price:3299,
        para:"Free Shipping"
    }
]
localStorage.setItem("newArrivals", JSON.stringify(newArrivals))


var asSeenOn=[
    {
        img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/as_seen_on/chainmag.jpg",
        h4:"Chain Magazine",
        a:"MeanBuy-An Indian StartUp eCommerce Market Place"
    },
    {
        img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/as_seen_on/sillicon.jpg",
        h4:"Sillicon India",
        a:"10 Most Promising E-Commerce Startup"
    },
    {
        img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/as_seen_on/medium.jpg",
        h4:"FLair Explorer",
        a:"E-commerce Inside the Startup Ecosystem in India"
    },
    {
        img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/as_seen_on/sillicon.jpg",
        h4:"Sillicon India",
        a:"Meanbuy: The future of online shopping"
    },
    {
        img:"https://meanbuyassets.s3.ap-south-1.amazonaws.com/img/as_seen_on/chainmag.jpg",
        h4:"Chain Magazine",
        a:"Experience the THRILL of the PRICE SLIDER at MeanBuy!"
    }
]
localStorage.setItem("asSeenOn", JSON.stringify(asSeenOn))


var trendingEarphones=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNzc4XC9TaWx2ZXJfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"TWS 6D Stereo Earphones",
        rating:"4.6/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTQxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Haylou GT1 Touch Bluetooth",
        rating:"4.6/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODM0XC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"ES01 TWS Earphone",
        rating:"4.7/5",
        price: 2199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNzcwXC9HcmF5X25fMV8zLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Q67 TWS Earphone",
        rating:"5.0/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTYxXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"F6 Wireless Earphone",
        rating:"5.0/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNzU1XC9TaWx2ZXJfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Wireless Earhook Earphones",
        rating:"4.8/5",
        price: 1749,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNjg1XC9CbGFja19uXzNfMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"JHO-A9 Earphones",
        rating:"5.0/5",
        price: 1899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNzk1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Touch Control Earbuds",
        rating:"4.8/5",
        price: 2899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNDgyXC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Wired 6D Bass Earphone",
        rating:"4.7/5",
        price: 799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTc3XC9SZWRfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mifa Waterproof Earphones",
        rating:"4.2/5",
        price:3099,
        para:"Free Shipping"
    }
]
localStorage.setItem("trendingEarphones", JSON.stringify(trendingEarphones))


var trendingWatches=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MzQzXC9Db2ZmZWVfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Dual Movt Quartz Wristwatch",
        rating:"4.6/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MzQwXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mens LED Digitl Wristwatch",
        rating:"4.6/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMDM3XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"TWS LT04 Smart Watch",
        rating:"4.7/5",
        price: 4799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mjg0XC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mens Digital Smart Watches",
        rating:"4.8/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNDQ4XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Mens Waterproof Watch",
        rating:"4.8/5",
        price: 2599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNzc0XC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Waterproof Smart Watch",
        rating:"4.4/5",
        price: 2399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MjgzXC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Leather Sport Quartz Watch",
        rating:"4.9/5",
        price: 2199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjkzXC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"VIBE 5 Smart Watch",
        rating:"4.9/5",
        price: 6999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDQ1XC9QdXJwbGVfbl8xXzQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Fitness Wrist Watch",
        rating:"4.6/5",
        price: 1299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjk4XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Hybrid Smart Watch",
        rating:"4.6/5",
        price: 4199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNDQ3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"X6 Smartwatch",
        rating:"4.6/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NTk3XC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Oriando Steel Wristwatch",
        rating:"4.8/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MTU4XC9CbGFja19uXzFfVW50aXRsZWQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"T91 Smart Watch",
        rating:"3.7/5",
        price: 4799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMDM1XC9SZWRfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"LEMFO T5 Smart Watch",
        rating:"4.5/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjg5XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"VIBE 3S HD Smart Watch",
        rating:"4.8/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTc3XC9Ccm93bl9uXzFfMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Mens Watch With Luminous Display",
        rating:"4.6/5",
        price: 1899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTc0XC9TaWx2ZXJfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mens LED Wrist Watch",
        rating:"4.5/5",
        price: 1699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyODI4XC9Db2ZmZWVfbl8xXzUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"SKMEI Digital Watch",
        rating:"4.7/5",
        price: 1899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyMDY5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Dragon Pattern Wristwatch",
        rating:"4.8/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDYwXC9QaW5rX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"S9 Smart Watch",
        rating:"4.5/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyODI0XC9QdXJwbGVfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mens Sports Band",
        rating:"4.8/5",
        price: 1899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNjkwXC9SZWRfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mens Luxury Wooden Watch",
        rating:"4.8/5",
        price: 2399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNTg0XC9Hb2xkX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Q18 Bluetooth Watch",
        rating:"3.9/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDQyXC9QdXJwbGVfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"V11 Smart Watch",
        rating:"4.5/5",
        price: 2499,
        para:"Free Shipping"
    },
]
localStorage.setItem("trendingWatches", JSON.stringify(trendingWatches))


var trendingOthers=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQxXC9PcmFuZ2VfU18xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Multifunctional Seal Cap",
        rating:"4.0/5",
        price: 999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTQ1XC9HcmF5X25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Bluetooth Fashion Cap",
        rating:"4.6/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"M8 Bluetooth Speaker",
        rating:"4.7/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwNTkwXC9HcmF5X25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Avengers Figure Models Toy",
        rating:"4.4/5",
        price: 2899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzMxXC9XaGl0ZV9uXzFfNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"5000mAh Wireless Magnetic Power Bank",
        rating:"4.5/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNzg2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus 3in1 Charging Pad",
        rating:"4.5/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTM4XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Scale 2",
        rating:"4.8/5",
        price: 5599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMDY4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Wi-Fi Range Extender Pro",
        rating:"4.3/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyOTQ2XC9HcmF5X25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Bluetooth Winter Cap",
        rating:"4.7/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMDY4XC9HcmVlbl9uXzFfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Magnetic Toothbrush Holder",
        rating:"4.6/5",
        price: 1799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Qi Wireless Charger",
        rating:"4.6/5",
        price: 3199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMDMyXC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Case For iPhone 8 Plus",
        rating:"4.9/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5NDA1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"T1 TWS Earbuds",
        rating:"5.0/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjQ3XC9SZWRfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Remote Control Ferrari Car",
        rating:"4.0/5",
        price: 2199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDYyXC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"G2000 Wried Headphones",
        rating:"5.0/5",
        price:1899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMDIzXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Bluetooth Sunglasses",
        rating:"4.3/5",
        price:2599,
        par:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMzYyXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"7in1 Quick Charge",
        rating:"4.7/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjk3XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Baseus 7in1 Charger",
        rating:"4.5/5",
        price: 3299,
        para:"Free Shipping"
    }
]
localStorage.setItem("trendingOthers", JSON.stringify(trendingOthers))


var keyboards_Mouse =[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MzM5XC9CbGFja19uXzFfTGFwdG9wSG9sZGVyMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Laptop Holder Stand",
        rating:"4.3/5",
        price: 1699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTQ4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Computer Glasses",
        rating:"3.6/5",
        price:2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MzQwXC9CbGFja19uXzFfTGFwdG9wSG9sZGVyMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Folding Laptop Stand",
        rating:"4.7/5",
        price: 2599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MzQxXC9CbGFja19uXzFfTGFwdG9wSG9sZGVyMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Mini Portable Laptop Cooling Pad",
        rating:"4.7/5",
        price: 1299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0Mzg5XC9CbGFja19uXzFfV2lyZWRLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"LED Gaming Keyboard",
        rating:"4.6/5",
        price: 2599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MzkwXC9CbGFja19uXzFfV2lyZWRLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Luminous Wired Keyboard",
        rating:"4.7/5",
        price: 3699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MzkxXC9Hb2xkX25fMV9XaXJlbGVzc0tleWJvYXJkMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Wireless Keyboard and Mouse",
        rating:"4.7/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MzkyXC9CbGFja19uXzFfV2lyZWxlc3NLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Keyboard With Touchpad",
        rating:"4.9/5",
        price: 3299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MzkzXC9CbGFja19uXzFfV2lyZWxlc3NLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Bluetooth Folding Keyboard",
        rating:"4.9/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NzM4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"3D Wirelss Mouse",
        rating:"4.0/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0Mzk0XC9Hb2xkX25fMV9XaXJlbGVzc0tleWJvYXJkMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Folding Keyboard",
        rating:"4.7/5",
        price: 2899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0Mzk1XC9CbGFja19uXzFfV2lyZWRLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mechanical Wired Keyboard",
        rating:"4.8/5",
        price: 3699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NzQwXC9CbGFja19uXzFfNC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"World Map Mousepad",
        rating:"4.5/5",
        price: 3299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0Mzk2XC9XaGl0ZV9uXzFfV2lyZWxlc3NLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Wireless Keyboard With Stand",
        rating:"4.9/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0Mzk3XC9CbGFja19uXzFfV2lyZWRLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Profesional Keyboard",
        rating:"4.9/5",
        price: 4299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0Mzk4XC9CbGFja19uXzFfV2lyZWRLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Backlight Wired Keyboard",
        rating:"5.0/5",
        price: 2099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjAxXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Portable Laptop Table",
        rating:"4.1/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDI5XC9CbGFja19uXzFfV2lyZWRLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Wired Keyboard Mouse",
        rating:"4.9/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTQ4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Computer Glasses",
        rating:"3.6/5",
        price:2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MzQwXC9CbGFja19uXzFfTGFwdG9wSG9sZGVyMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Folding Laptop Stand",
        rating:"4.7/5",
        price: 2599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDMwXC9CbGFja19uXzFfV2lyZWxlc3NLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Wireless Keyboard",
        rating:"4.7/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDMxXC9XaGl0ZV9uXzFfV2lyZWxlc3NLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Wireless Laser Keyboard",
        rating:"4.7/5",
        price: 4699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDMyXC9CbGFja19uXzFfV2lyZWxlc3NLZXlib2FyZDEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mini Foldable Keybord",
        rating:"5.0/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDMzXC9NdWx0aX5Db2xvcl9uXzFfV2lyZWRNb3VzZTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Multicolor Wired Mouse",
        rating:"4.8/5",
        price: 1599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDM0XC9CbGFja19uXzFfV2lyZWRNb3VzZTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ergonomic Wired Mouse",
        rating:"5.0/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDM1XC9CbGFja19uXzFfV2lyZWRNb3VzZTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Wired Gaming Mouse",
        rating:"4.6/5",
        price: 3699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDM2XC9CbGFja19uXzFfV2lyZWRNb3VzZTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Adjustable Wired Mouse",
        rating:"5.0/5",
        price: 1299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDM3XC9CbGFja19uXzFfV2lyZWRNb3VzZTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"X16 Profession Mouse",
        rating:"4.5/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4MDU4XC9CbGFja19uXzFfMS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Foldable Wireless Keyboard",
        rating:"4.6/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTM3XC9Sb3NlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Xiaomi Mi Portable Mouse",
        rating:"5.0/5",
        price: 2999,
        para:"Free Shipping"
    }, 
]
localStorage.setItem("keyboards_Mouse",JSON.stringify(keyboards_Mouse))


var Wall_art=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzkzXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Wolves Painting 28 x 21 cm",
        rating:"4.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzQ3XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rapunzel Princesses Painting",
        rating:"3.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzQ4XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Jasmine Princesses Painting",
        rating:"4.5/5",
        price:2999,
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzQ5XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Tinker Beli Princesses Painting",
        rating:"3.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzUwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Frozen Princesses Painting",
        rating:"4.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzUxXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ariel Disnet Princesses Painting",
        rating:"3.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzUyXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Snow White Painting",
        rating:"4.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzUzXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mulan Princesses Painting",
        rating:"3.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzU0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Tiana Princesses Painting",
        rating:"4.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzU1XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Cindrella Painting",
        rating:"3.5/5",
        price:2599,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzU2XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Tree Painting 20 x 30 cm",
        rating:"4.5/5",
        price:2299,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzU2XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Tree Painting 20 x 30 cm",
        rating:"3.5/5",
        price:2299,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzU2XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Tree Painting 20 x 30 cm",
        rating:"4.5/5",
        price:2299,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzU2XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Tree Painting 20 x 30 cm",
        rating:"3.5/5",
        price:2299,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },

    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzY0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Swans Painting 53 x 33 cm ",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzY0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Swans Painting 53 x 33 cm ",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjk4XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rose Girl Painting 20 x 25 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjk4XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rose Girl Painting 20 x 25 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjk4XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rose Girl Painting 20 x 25 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjk4XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rose Girl Painting 20 x 25 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzAyXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Butterfly Painting 20 x 25 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzAyXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Butterfly Painting 20 x 25 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzAyXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Butterfly Painting 20 x 25 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzAyXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Butterfly Painting 20 x 25 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzA2XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Butterfly Art Painting 20 x 25 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzA2XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Butterfly Art Painting 20 x 25 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzA2XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Butterfly Art Painting 20 x 25 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzA2XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Butterfly Art Painting 20 x 25 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzEwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Red Lips Painting 20 x 20 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzEwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Red Lips Painting 20 x 20 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzEwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Red Lips Painting 20 x 20 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzEwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Red Lips Painting 20 x 20 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzE0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rose Painting 20 x 20 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzE0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rose Painting 20 x 20 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzE0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rose Painting 20 x 20 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzE0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rose Painting 20 x 20 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjY3XC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Letter Pattern Wall Sticker",
        rating:"4.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjY5XC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Sakura Flower Wall Sticker",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjcwXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Cartoon Wall Sticker",
        rating:"4.5/5",
        price:5999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjcxXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Star Wars Art Size-1",
        rating:"3.5/5",
        price:4499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjcxXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Star Wars Art Size-2",
        rating:"4.5/5",
        price:4499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjcxXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Star Wars Art Size-3",
        rating:"3.5/5",
        price:4499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjcxXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Star Wars Art Size-4",
        rating:"4.5/5",
        price:4499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjc1XC9NdWx0aX5jb2xvcl9uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Couple Wall Art Size-1",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjc1XC9NdWx0aX5jb2xvcl9uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Couple Wall Art Size-2",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjc1XC9NdWx0aX5jb2xvcl9uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Couple Wall Art Size-3",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjc4XC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Modern Wall Art Size-1",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",

    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjc4XC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Modern Wall Art Size-2",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjc4XC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Modern Wall Art Size-3",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjgxXC9NdWx0aX5jb2xvcl9uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Islamic Decor Size-1",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjgxXC9NdWx0aX5jb2xvcl9uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Islamic Decor Size-2",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjgxXC9NdWx0aX5jb2xvcl9uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Islamic Decor Size-3",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjg0XC9NdWx0aX5jb2xvcl9uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Jesus Decor Size-1",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjg0XC9NdWx0aX5jb2xvcl9uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Jesus Decor Size-2",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjg0XC9NdWx0aX5jb2xvcl9uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Jesus Decor Size-3",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjIyXC9NdWx0aX5Db2xvcl9uXzFfbWVhbmJ1eTEuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Peacock Numbers Paint 40 x 50",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjIyXC9NdWx0aX5Db2xvcl9uXzFfbWVhbmJ1eTEuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Peacock Numbers Paint 40 x 50",
        rating:"3.5/5",
        price:1499,
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjIyXC9NdWx0aX5Db2xvcl9uXzFfbWVhbmJ1eTEuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Peacock Numbers Paint 40 x 50",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjI1XC9NdWx0aX5Db2xvcl9uXzFfbWVhbmJ1eTEuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Peonies Paint By Numbers ",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjI2XC9NdWx0aX5Db2xvcl9uXzFfbWVhbmJ1eTEuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Car Paint By Numbers",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjI3XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"River Paints By Numbers",
        rating:"3.5/5",
        price:3499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTA1XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Geometric Art 24 x 24 inches",
        rating:"4.5/5",
        price:6999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTA1XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Geometric Art 24 x 24 inches",
        rating:"3.5/5",
        price:6999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTA1XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Geometric Art 24 x 24 inches",
        rating:"4.5/5",
        price:6999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTA1XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Geometric Art 24 x 24 inches",
        rating:"3.5/5",
        price:6999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTA5XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Women Wall Art 50 x 60",
        rating:"4.5/5",
        price:6999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTEzXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"BullPainting 60 x 120",
        rating:"3.5/5",
        price:17999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTEzXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"BullPainting 60 x 120",
        rating:"4.5/5",
        price:17999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTEzXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"BullPainting 60 x 120",
        rating:"3.5/5",
        price:17999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTEzXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"BullPainting 60 x 120",
        rating:"4.5/5",
        price:17999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTE3XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Abstract Painting 110 x 60",
        rating:"3.5/5",
        price:2499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTE3XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Abstract Painting 110 x 60",
        rating:"4.5/5",
        price:2499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTE3XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Abstract Painting 110 x 60",
        rating:"4.5/5",
        price:2499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTE3XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Abstract Painting 110 x 60",
        rating:"3.5/5",
        price:2499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTIxXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Red Tree Art Size-1",
        rating:"4.5/5",
        price:"2,299",
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTIxXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Red Tree Art Size-1",
        rating:"4.5/5",
        price:2299,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTIxXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Red Tree Art Size-1",
        rating:"3.5/5",
        price:2299,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTIxXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Red Tree Art Size-1",
        rating:"4.5/5",
        price:2299,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDk0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ocean View Art Size-1",
        rating:"3.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDk0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ocean View Art Size-1",
        rating:"4.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDk0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ocean View Art Size-1",
        rating:"3.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDk0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ocean View Art Size-1",
        rating:"4.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDk4XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Spices Wall Art Size-1",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDk4XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Spices Wall Art Size-1",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDk4XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Spices Wall Art Size-1",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTAxXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mystery Art 20 x 40",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTAxXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mystery Art 20 x 40",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTAxXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mystery Art 20 x 40",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDcwXC9CbGFja19uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Arnold Schwarzenegger Poster",
        rating:"3.5/5",
        price:2299,
        para:"Free Shipping",
    },

    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDM2XC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Abstract Cows Art 50 x 60 cm",
        rating:"4.5/5",
        price:3999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDM2XC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Abstract Cows Art 50 x 60 cm",
        rating:"3.5/5",
        price:3999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDM2XC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Abstract Cows Art 50 x 60 cm",
        rating:"4.5/5",
        price:3999,
        para:"Free Shipping",
    },

    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDM5XC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Bhudha Art @0 x 45 cm",
        rating:"3.5/5",
        price:3499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDM5XC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Bhudha Art @0 x 45 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDM5XC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Bhudha Art @0 x 45 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDM5XC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Bhudha Art @0 x 45 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },

    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDQzXC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Guitar Cord Art Size-1",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDQzXC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Guitar Cord Art Size-1",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDQzXC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Guitar Cord Art Size-1",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDQ3XC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Guitar Cord Art Size-1",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },

    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDQ3XC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Audrey Hepburn Art 21 x 30 cm ",
        rating:"3.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDQ3XC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Audrey Hepburn Art 21 x 30 cm ",
        rating:"3.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDQ3XC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Audrey Hepburn Art 21 x 30 cm ",
        rating:"4.5/5",
        price:3999,
        para:"Free Shipping",
    },

    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDUwXC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Inspiration Art 21 x 30 cm",
        rating:"3.5/5",
        price:1399,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDUwXC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Inspiration Art 21 x 30 cm",
        rating:"4.5/5",
        price:2399,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDUwXC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Inspiration Art 21 x 30 cm",
        rating:"3.5/5",
        price:2399,
        para:"Free Shipping",
    },

   {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NTMwXC9NdWx0aX5jb2xvcl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"3D Wall Sticker",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
]
localStorage.setItem("Wall_art", JSON.stringify(Wall_art))


var schoolBackpacks=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTA4XC9HcmVlbl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Burger Shaped Backpack",
        rating:"4.8/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTA5XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Cream Cake Backpack",
        rating:"4.0/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTEwXC9Ccm93bl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Brown Bear Backpack",
        rating:"4.5/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTExXC9Ccm93bl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Cute Bunny Backpack",
        rating:"4.0/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTEyXC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Kitty Backpack",
        rating:"4.5/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDkxXC9QaW5rX25fMl8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Donut Shap Rainbow Backpack",
        rating:"3.7/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDkyXC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Space Battleship Backpack",
        rating:"4.7/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDkzXC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Shiny Angel Backpack",
        rating:"3.8/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTA4XC9HcmVlbl9uXzRfNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Burger Shaped Backpack",
        rating:"4.9/5",
        price:4599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDk0XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"D-Shape Backpack",
        rating:"3.6/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDk1XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"D-Shape Rainbow Backpack",
        rating:"3.8/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTA4XC9HcmVlbl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Burger Shaped Backpack",
        rating:"4.8/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTA5XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Cream Cake Backpack",
        rating:"4.0/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTEwXC9Ccm93bl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Brown Bear Backpack",
        rating:"4.5/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTExXC9Ccm93bl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Cute Bunny Backpack",
        rating:"4.0/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTEyXC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Kitty Backpack",
        rating:"4.5/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDkxXC9QaW5rX25fMl8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Donut Shap Rainbow Backpack",
        rating:"3.7/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDkyXC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Space Battleship Backpack",
        rating:"4.7/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDkzXC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Shiny Angel Backpack",
        rating:"3.8/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTA4XC9HcmVlbl9uXzRfNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Burger Shaped Backpack",
        rating:"4.9/5",
        price:4599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDk0XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"D-Shape Backpack",
        rating:"3.6/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDk1XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"D-Shape Rainbow Backpack",
        rating:"3.8/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTA4XC9HcmVlbl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Burger Shaped Backpack",
        rating:"4.8/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTA5XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Cream Cake Backpack",
        rating:"4.0/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTEwXC9Ccm93bl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Brown Bear Backpack",
        rating:"4.5/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTExXC9Ccm93bl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Cute Bunny Backpack",
        rating:"4.0/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTEyXC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Kitty Backpack",
        rating:"4.5/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDkxXC9QaW5rX25fMl8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Donut Shap Rainbow Backpack",
        rating:"3.7/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDkyXC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Space Battleship Backpack",
        rating:"4.7/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDkzXC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Shiny Angel Backpack",
        rating:"3.8/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTA4XC9HcmVlbl9uXzRfNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Burger Shaped Backpack",
        rating:"4.9/5",
        price:4599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDk0XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"D-Shape Backpack",
        rating:"3.6/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDk1XC9QaW5rX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"D-Shape Rainbow Backpack",
        rating:"3.8/5",
        price: 3999,
        para:"Free Shipping"
    },
]
localStorage.setItem("schoolBackpacks", JSON.stringify(schoolBackpacks))


var gamingAccessories=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjY3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"PUBG Mobile Gamepad Grip With Joystick Trigger",
        rating:"4.1/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Two-Seater PS4 Charging Base",
        rating:"4.2/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"PS4 Slim Pro Charging Base",
        rating:"5.0/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTM5XC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wired Joystick For PC",
        rating:"4.8/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQwXC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wireless Gaming Controller",
        rating:"4.6/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQxXC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"PG-9089 Wireless Joystick",
        rating:"4.9/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQyXC9HcmVlbl9uXzFfSm95c3RpY2syLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wireless Joystick For Nintendo",
        rating:"4.3/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQzXC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wireless Gaming Joypad",
        rating:"4.7/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ0XC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"ix Finger Mobile Gamepad",
        rating:"4.8/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ1XC9CbHVlX25fMV9Kb3lzdGljazIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ps4 Wireles Vibration Joystick",
        rating:"5.0/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ2XC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wireless Gamepad for Xbox",
        rating:"4.5/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ3XC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Multi controller for PS4/PS3",
        rating:"4.7/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ4XC9NdWx0aX5jb2xvcl9uXzFfSm95c3RpY2szLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Switch Controller for Nintendo",
        rating:"4.9/5",
        price: 4299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjY3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"PUBG Mobile Gamepad Grip With Joystick Trigger",
        rating:"4.1/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Two-Seater PS4 Charging Base",
        rating:"4.2/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"PS4 Slim Pro Charging Base",
        rating:"5.0/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTM5XC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wired Joystick For PC",
        rating:"4.8/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQwXC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wireless Gaming Controller",
        rating:"4.6/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQxXC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"PG-9089 Wireless Joystick",
        rating:"4.9/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQyXC9HcmVlbl9uXzFfSm95c3RpY2syLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wireless Joystick For Nintendo",
        rating:"4.3/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQzXC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wireless Gaming Joypad",
        rating:"4.7/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ0XC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"ix Finger Mobile Gamepad",
        rating:"4.8/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ1XC9CbHVlX25fMV9Kb3lzdGljazIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ps4 Wireles Vibration Joystick",
        rating:"5.0/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ2XC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wireless Gamepad for Xbox",
        rating:"4.5/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ3XC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Multi controller for PS4/PS3",
        rating:"4.7/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ4XC9NdWx0aX5jb2xvcl9uXzFfSm95c3RpY2szLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Switch Controller for Nintendo",
        rating:"4.9/5",
        price: 4299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjY3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"PUBG Mobile Gamepad Grip With Joystick Trigger",
        rating:"4.1/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Two-Seater PS4 Charging Base",
        rating:"4.2/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"PS4 Slim Pro Charging Base",
        rating:"5.0/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTM5XC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wired Joystick For PC",
        rating:"4.8/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQwXC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wireless Gaming Controller",
        rating:"4.6/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQxXC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"PG-9089 Wireless Joystick",
        rating:"4.9/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQyXC9HcmVlbl9uXzFfSm95c3RpY2syLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wireless Joystick For Nintendo",
        rating:"4.3/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQzXC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wireless Gaming Joypad",
        rating:"4.7/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ0XC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"ix Finger Mobile Gamepad",
        rating:"4.8/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ1XC9CbHVlX25fMV9Kb3lzdGljazIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ps4 Wireles Vibration Joystick",
        rating:"5.0/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ2XC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wireless Gamepad for Xbox",
        rating:"4.5/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ3XC9CbGFja19uXzFfSm95c3RpY2sxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Multi controller for PS4/PS3",
        rating:"4.7/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTQ4XC9NdWx0aX5jb2xvcl9uXzFfSm95c3RpY2szLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Switch Controller for Nintendo",
        rating:"4.9/5",
        price: 4299,
        para:"Free Shipping"
    },
]
localStorage.setItem("gamingAccessories", JSON.stringify(gamingAccessories))


var laptop=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI1XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Dual-Use Laptop and Desktop Stand",
        rating:"4.4/",
        price: 12999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Lenovo Pad Plus 11 inch Tablet (6GB+128GB)",
        rating:"4.5/5",
        price: 29999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTk4XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"HUAWEI MatBook X Pro i5 16GB 512G",
        rating:"4.2/5",
        price: 249999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTk5XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"HUAWEI MateBook X Pro i7 16Gb 512G",
        rating:"3.6/5",
        price: 299999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjAwXC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"HUAWEI MateBook X Pro i7 16GB 1TB",
        rating:"3.7/5",
        price: 349999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI1XC9TaWx2ZXJfbl8yXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Dual-Use Laptop & Desktop Stand",
        rating:"4.4/5",
        price:12999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI1XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Dual-Use Laptop and Desktop Stand",
        rating:"4.4/",
        price: 12999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Lenovo Pad Plus 11 inch Tablet (6GB+128GB)",
        rating:"4.5/5",
        price: 29999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTk4XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"HUAWEI MatBook X Pro i5 16GB 512G",
        rating:"4.2/5",
        price: 249999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTk5XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"HUAWEI MateBook X Pro i7 16Gb 512G",
        rating:"3.6/5",
        price: 299999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjAwXC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"HUAWEI MateBook X Pro i7 16GB 1TB",
        rating:"3.7/5",
        price: 349999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI1XC9TaWx2ZXJfbl8yXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Dual-Use Laptop & Desktop Stand",
        rating:"4.4/5",
        price:12999,
        para:"Free Shipping"
    },
]
localStorage.setItem("laptop",JSON.stringify(laptop))


var wiredHeadphone=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzIyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"QKZ AK6 PRO Wried Headset",
        rating:"3.7/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMDYwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Dual Driver Earphones Type-C",
        rating:"3.9/5",
        price: 5299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MzI1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Stereo Wried Earphone",
        rating:"4.0/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MTYwXC9Hb2xkX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"OPENHEART Wried Earphones",
        rating:"4.1/5",
        price: 5599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MTYxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"OPENHEART Metal Earphones",
        rating:"3.5/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MTYyXC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"OPENHEART Resin Earphone",
        rating:"3.9/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDczXC9CbGFja19uXzFfd2lyZWRlYXJwaG9uZTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Stereo Wried Earphones",
        rating:"3.6/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTYyXC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Fanbiya Wried Earphone",
        rating:"4.3/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDU1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Whizzer Wried Earphone",
        rating:"4.7/5",
        price: 12999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDYyXC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"G2000 Wried Headphones",
        rating:"5.0/5",
        price: 1899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDYzXC9QaW5rX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"G4000 Wried Headphones",
        rating:"4.7/5",
        price: 1899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzk2XC9CbHVlX25fMV80LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Edifier Desktop Headset",
        rating:"4.5/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzgxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Edifier Wired Earphone",
        rating:"4.3/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNzc1XC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"QKZ Wried Earphones",
        rating:"4.5/5",
        price: 2599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMDc5XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Kuabe Sports Earphones",
        rating:"4.2/5",
        price: 699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMDE2XC9XaGl0ZV9uXzFfNC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Sport Wried Earphone with Mic",
        rating:"4.6/5",
        price: 499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMDIxXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"SADES Gaming Headset",
        rating:"4.8/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTYyXC9SZWRfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"3.5mm Stereo Wried earphone",
        rating:"4.3/5",
        price: 499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwNTg0XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Honor Wried earphones",
        rating:"3.9/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwNTg4XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"3.5mm Wried Earphone",
        rating:"4.4/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjk1XC9CbGFja19uXzFfNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USAMS Hi-Fi Headset",
        rating:"4.2/5",
        price: 799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5NDAwXC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Wried Sports Earphone",
        rating:"5.0/5",
        price: 399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MzcwXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Wried HiFi Earphones",
        rating:"4.5/5",
        price: 499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mjg4XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"WIWU Wried Earphones",
        rating:"5.0/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mjk0XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"X7 Wried Earphones",
        rating:"4.4/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mjk1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"FMJ Wried earphones",
        rating:"4.4/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mjk2XC9QaW5rX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Langsdom D4C Earphones",
        rating:"4.5/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5Mjk5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"QCY HiFi Earphones",
        rating:"4.9/5",
        price: 2599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MjcyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"QCY Magnetic Earphone",
        rating:"4.6/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4MDY4XC9SZWRfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Dual Drive Stereo Wried In-Ear Earphone",
        rating:"4.5/5",
        price: 449,
        para:"Free Shipping"
    },
]
localStorage.setItem("wiredHeadphone", JSON.stringify(wiredHeadphone))


var WomenWatch=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NDI5XC9QaW5rX25fMV80LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Women Quicksand Rhinestone Wrist Watch",
        rating:"4.2/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NDI3XC9SZWRfbl8xXzYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Women Fashion Bracelet Wrist Watch",
        rating:"4.6/5",
        price: 1199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjMzXC9Hb2xkX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Women Quartz Wheel Watch",
        rating:"5.0/5",
        price: 7299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDA5XC9SZWRfbl8xX1dhdGNoZXMzLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Women Luxury Watch",
        rating:"4.9/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDEwXC9SZWRfbl8xX1dhdGNoZXM0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"5pcs Luxury Watch Set",
        rating:"5.0/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDExXC9HcmVlbl9uXzFfV2F0Y2hlczIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Women's Casual Watch",
        rating:"4.8/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDEyXC9QaW5rX25fMV9XYXRjaGVzNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Women Bracelet Watch Set",
        rating:"4.7/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDEzXC9CbHVlX25fMV9XYXRjaGVzMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Stainless Steel Wristwatch",
        rating:"4.8/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDE0XC9Hb2xkX25fMV9XYXRjaGVzMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Women Quartz Watch",
        rating:"4.8/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDE1XC9SZWRfbl8xX1dhdGNoZXM0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Women Luxury Watch",
        rating:"4.7/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDE2XC9SZWRfbl8xX1dhdGNoZXM0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Women Classic Watch",
        rating:"4.6/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDE3XC9Sb3NlX25fMV9XYXRjaGVzMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Women Crystal Wristwatch",
        rating:"4.8/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0NDE4XC9Hb2xkX25fMV9XYXRjaGVzMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Ultra Thin Steel Watch",
        rating:"4.7/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMjUwXC9QaW5rX25fMV8zLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Womens Stainless Steel Btracelet Watch",
        rating:"4.8/5",
        price: 1549,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMjUxXC9Ccm93bl9uXzFfMy5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Analog Quartz Watch",
        rating:"4.4/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMjUyXC9XaGl0ZV9uXzFfNy5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Analog Casual Watch",
        rating:"4.4/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMjUzXC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Leather Wrist Watch",
        rating:"4.3/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMjU0XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Women Butterfly Wristwatch",
        rating:"4.6/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMjU1XC9SZWRfbl8xXzUuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Women Luxury Rhinestone Wrist Watch",
        rating:"5.0/5",
        price: 1399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMjU2XC9SZWRfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Leather Wristwatch",
        rating:"4.7/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMjU3XC9XaGl0ZV9uXzFfNy5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Women Canvas Belt Watch",
        rating:"4.5/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMjU4XC9QdXJwbGVfbl8xXzcuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Womens Multi-Dial Watch",
        rating:"4.4/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxMjU5XC9TaWx2ZXJfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"steel Strap Watch",
        rating:"4.5/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5NDAxXC9QdXJwbGVfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Silicon Strap Watch",
        rating:"4.6/5",
        price: 2599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5NDA0XC9Sb3NlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Leather Vintage Watch",
        rating:"4.5/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5NDA2XC9Hb2xkX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Curren Luxury Watch",
        rating:"4.4/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5NDA3XC9HcmF5X25fMV80LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Womens Waterproof Watch",
        rating:"4.4/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5NDA5XC9TaWx2ZXJfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Womens Rhineston Bracelet",
        rating:"4.8/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NDkxXC9TaWx2ZXJfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Women Luxury Stainless Steel Quartz Watch",
        rating:"4.5/5",
        price: 1699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NDYzXC9SZWRfbl8xXzcuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Women Star Sky Dial Clock Bracelet Wrist Watch",
        rating:"4.5/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NDM3XC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Women Top Nylon Strap Quartz Watch",
        rating:"4.5/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NDM4XC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Women Top Brand Nylon Strap Quartz Watch",
        rating:"4.7/5",
        price: 899,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NDI1XC9HcmVlbl9uXzFfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Women Leather Quartz Wrist Watch",
        rating:"4.5/5",
        price: 1199,
        para:"Free Shipping"
    },
]
localStorage.setItem("WomenWatch", JSON.stringify(WomenWatch))

var MeanBuyDeal=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzIzXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"mini Handheld Printer",
        rating:"4.0/5",
        price: 16999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIyNjE2XC9HcmVlbl9uXzFfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Mens luxury Quartz watch",
        rating:"5.0/5",
        price: 2599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDE4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Mask With Bluetooth",
        rating:"3.7/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTIyXC9XaGl0ZV9uXzFfNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Mini_Foldable PGG Neck",
        rating:"3.6/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTAxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Amazfit X Smartwatch",
        rating:"4.8/5",
        price: 48999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTAyXC9XaGl0ZV9uXzFfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Amazfit Verge Lite Smartwatch",
        rating:"4.7/5",
        price: 8999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDU2XC9XaGl0ZV9uXzFfNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"IWO W17 Smartwatch",
        rating:"4.3/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDQ2XC9CbHVlX25fMV8yLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"LOKMAT Attack 2 Smart Watch",
        rating:"4.5/5",
        price: 5599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDQ3XC9QaW5rX25fMV8yLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"LOKMAT Attack 3Smart Watch",
        rating:"4.0/5",
        price: 6999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDIwXC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Huawai Mate 40 Ring Light Cover",
        rating:"4.7/5",
        price: 3999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Haylou RT2 LS10 Smartwatch",
        rating:"4.1/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzY4XC9CbHVlX25fMV8yLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"LOKMAT Attack Smart Wartch",
        rating:"4.3/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzAyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Vehicle Type Inflator Pump",
        rating:"5.0/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzAzXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"1080P Wireles CCTV Buklb Camera",
        rating:"3.6/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzA1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"13.3'' Portable Monitor for Laptop",
        rating:"4.1/5",
        price: 59999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzEwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"CARGO 02 TWS Earbuds",
        rating:"3.9",
        price: 15999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzExXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"3 in 1 USB Charging Cable",
        rating:"3.7/5",
        price: 2699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTUwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"XZiaomi Mi Electric Shaver S500",
        rating:"4.3/5",
        price: 8299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTUxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Electric Toothbrush T500",
        rating:"3.8/5",
        price: 8999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTU1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi QiCYCLE Smart Electric Bike",
        rating:"3.8/5",
        price: 199999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTU2XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"XiaoMi Mi Electric Scooter Pro 2",
        rating:"4.0/5",
        price: 79999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMDcwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"XiaoMi Mi Alo T Router AC2350",
        rating:"3.7/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMwOTk1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Projected Screen 100",
        rating:"3.8/5",
        price: 299999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMwOTk2XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Smart Compact Projecter",
        rating:"4.8/5",
        price: 49999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTAxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Amazfit X Smartwatch",
        rating:"4.8/5",
        price: 48999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNTAyXC9XaGl0ZV9uXzFfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Amazfit Verge Lite Smartwatch",
        rating:"4.7/5",
        price: 8999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxNDU2XC9XaGl0ZV9uXzFfNC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"IWO W17 Smartwatch",
        rating:"4.3/5",
        price: 2999,
        para:"Free Shipping"
    },
]
localStorage.setItem("MeanBuyDeal",JSON.stringify(MeanBuyDeal))



var Home_And_Living=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTQxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Light Detection Sensor",
        rating:"4.5/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Monitor Light Bar",
        rating:"3.8/5",
        price: 5799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjA1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"BOTMI Silicone Night Light",
        rating:"5.0/5",
        price: 3445,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjgxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Silicone LED Lamp",
        rating:"4.2/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzA0XC9SZWRfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Water Stopper Flood Barrier",
        rating:"4.7/5",
        price: 11999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3ODY3XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USB Drawing Board",
        rating:"3.9/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ0XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Mosquito Killer Lamp",
        rating:"4.1/5",
        price: 3399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3ODU4XC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"LED Digital Alarm",
        rating:"4.3/5",
        price: 1799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ2XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Touch Switch LED Lamp",
        rating:"4.4/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMDA0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Smart Antibacterial Humidifier",
        rating:"4.4/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4MDQ4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Smart Fingerprint Lock",
        rating:"4.2/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTQxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Light Detection Sensor",
        rating:"4.5/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Monitor Light Bar",
        rating:"3.8/5",
        price: 5799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjA1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"BOTMI Silicone Night Light",
        rating:"5.0/5",
        price: 3445,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjgxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Silicone LED Lamp",
        rating:"4.2/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzA0XC9SZWRfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Water Stopper Flood Barrier",
        rating:"4.7/5",
        price: 11999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3ODY3XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USB Drawing Board",
        rating:"3.9/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ0XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Mosquito Killer Lamp",
        rating:"4.1/5",
        price: 3399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3ODU4XC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"LED Digital Alarm",
        rating:"4.3/5",
        price: 1799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ2XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Touch Switch LED Lamp",
        rating:"4.4/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMDA0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Smart Antibacterial Humidifier",
        rating:"4.4/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4MDQ4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Smart Fingerprint Lock",
        rating:"4.2/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTQxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Light Detection Sensor",
        rating:"4.5/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Monitor Light Bar",
        rating:"3.8/5",
        price: 5799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjA1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"BOTMI Silicone Night Light",
        rating:"5.0/5",
        price: 3445,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjgxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Silicone LED Lamp",
        rating:"4.2/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzA0XC9SZWRfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Water Stopper Flood Barrier",
        rating:"4.7/5",
        price: 11999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3ODY3XC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USB Drawing Board",
        rating:"3.9/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzkzXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Wolves Painting 28 x 21 cm",
        rating:"4.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzQ3XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rapunzel Princesses Painting",
        rating:"3.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzQ4XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Jasmine Princesses Painting",
        rating:"4.5/5",
        price:2999,
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzQ5XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Tinker Beli Princesses Painting",
        rating:"3.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzUwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Frozen Princesses Painting",
        rating:"4.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzUxXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ariel Disnet Princesses Painting",
        rating:"3.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzUyXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Snow White Painting",
        rating:"4.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzUzXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mulan Princesses Painting",
        rating:"3.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzU0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Tiana Princesses Painting",
        rating:"4.5/5",
        price:2999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzU1XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Cindrella Painting",
        rating:"3.5/5",
        price:2599,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzU2XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Tree Painting 20 x 30 cm",
        rating:"4.5/5",
        price:2299,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzU2XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Tree Painting 20 x 30 cm",
        rating:"3.5/5",
        price:2299,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzU2XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Tree Painting 20 x 30 cm",
        rating:"4.5/5",
        price:2299,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzU2XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Tree Painting 20 x 30 cm",
        rating:"3.5/5",
        price:2299,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },

    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzY0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Swans Painting 53 x 33 cm ",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzY0XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Swans Painting 53 x 33 cm ",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"4.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzYwXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Ship Painting 20 x 30 cm",
        rating:"3.5/5",
        price:1999,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjk4XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rose Girl Painting 20 x 25 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjk4XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rose Girl Painting 20 x 25 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjk4XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rose Girl Painting 20 x 25 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNjk4XC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Rose Girl Painting 20 x 25 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzAyXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Butterfly Painting 20 x 25 cm",
        rating:"4.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNzAyXC9NdWx0aX5jb2xvcl9uXzFfbWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Butterfly Painting 20 x 25 cm",
        rating:"3.5/5",
        price:1499,
        para:"Free Shipping",
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ0XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Mosquito Killer Lamp",
        rating:"4.1/5",
        price: 3399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3ODU4XC9SZWRfbl8xXzQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"LED Digital Alarm",
        rating:"4.3/5",
        price: 1799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ2XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Touch Switch LED Lamp",
        rating:"4.4/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMDA0XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Xiaomi Mi Smart Antibacterial Humidifier",
        rating:"4.4/5",
        price: 5999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4MDQ4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Smart Fingerprint Lock",
        rating:"4.2/5",
        price: 2799,
        para:"Free Shipping"
    }
]
localStorage.setItem("Home_And_Living",JSON.stringify(Home_And_Living))


var Mobile_And_Tab=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"M8 Bluetooth Speaker",
        rating:"4.7/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Qi Wireles Charger",
        rating:"4.6/5",
        price: 3199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MTA5XC9TaWx2ZXJfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Car Mount Charger",
        rating:"4.2/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMzYyXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"7in1 Quick Charge",
        rating:"4.7/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4OTk3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Charging Case",
        rating:"4.6/5",
        price: 1799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3OTcyXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"3in1 Charging Dock",
        rating:"4.4/5",
        price:2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NzEzXC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"3in1 Charge Stand",
        rating:"4.3/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDgwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USB Cable Organizer Holder",
        rating:"4.1/5",
        price: 499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MTAzXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USB Dashboard Pad",
        rating:"4.8/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDc5XC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"3in1 Charging Cable",
        rating:"4.5/5",
        price: 699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"M8 Bluetooth Speaker",
        rating:"4.7/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Qi Wireles Charger",
        rating:"4.6/5",
        price: 3199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MTA5XC9TaWx2ZXJfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Car Mount Charger",
        rating:"4.2/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMzYyXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"7in1 Quick Charge",
        rating:"4.7/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NzEzXC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"3in1 Charge Stand",
        rating:"4.3/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDgwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USB Cable Organizer Holder",
        rating:"4.1/5",
        price: 499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4OTk3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Charging Case",
        rating:"4.6/5",
        price: 1799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI1XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Dual-Use Laptop and Desktop Stand",
        rating:"4.4/",
        price: 12999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Lenovo Pad Plus 11 inch Tablet (6GB+128GB)",
        rating:"4.5/5",
        price: 29999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTk4XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"HUAWEI MatBook X Pro i5 16GB 512G",
        rating:"4.2/5",
        price: 249999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTk5XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"HUAWEI MateBook X Pro i7 16Gb 512G",
        rating:"3.6/5",
        price: 299999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMjAwXC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"HUAWEI MateBook X Pro i7 16GB 1TB",
        rating:"3.7/5",
        price: 349999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI1XC9TaWx2ZXJfbl8yXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Dual-Use Laptop & Desktop Stand",
        rating:"4.4/5",
        price:12999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzI1XC9TaWx2ZXJfbl8xXzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyOTUsImhlaWdodCI6Mjk1LCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Dual-Use Laptop and Desktop Stand",
        rating:"4.4/",
        price: 12999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzg1XC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5NSwiaGVpZ2h0IjoyOTUsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Lenovo Pad Plus 11 inch Tablet (6GB+128GB)",
        rating:"4.5/5",
        price: 29999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMTk4XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mjk1LCJoZWlnaHQiOjI5NSwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"HUAWEI MatBook X Pro i5 16GB 512G",
        rating:"4.2/5",
        price: 249999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3OTcyXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"3in1 Charging Dock",
        rating:"4.4/5",
        price:2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NzEzXC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"3in1 Charge Stand",
        rating:"4.3/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDgwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USB Cable Organizer Holder",
        rating:"4.1/5",
        price: 499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MTAzXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USB Dashboard Pad",
        rating:"4.8/5",
        price: 1999,
        para:"Free Shipping"
    },
]
localStorage.setItem("Mobile_And_Tab",JSON.stringify(Mobile_And_Tab))


var Accessories=[
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"M8 Bluetooth Speaker",
        rating:"4.7/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Qi Wireles Charger",
        rating:"4.6/5",
        price: 3199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MTA5XC9TaWx2ZXJfbl8xXzMuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Car Mount Charger",
        rating:"4.2/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMzYyXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"7in1 Quick Charge",
        rating:"4.7/5",
        price: 2499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4OTk3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Charging Case",
        rating:"4.6/5",
        price: 1799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3OTcyXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"3in1 Charging Dock",
        rating:"4.4/5",
        price:2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE4NzEzXC9XaGl0ZV9uXzFfMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"3in1 Charge Stand",
        rating:"4.3/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDgwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USB Cable Organizer Holder",
        rating:"4.1/5",
        price: 499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MTAzXC9CbGFja19uXzFfMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USB Dashboard Pad",
        rating:"4.8/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDc5XC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"3in1 Charging Cable",
        rating:"4.5/5",
        price: 699,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"M8 Bluetooth Speaker",
        rating:"4.7/5",
        price: 2299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxNjQ1XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Qi Wireles Charger",
        rating:"4.6/5",
        price: 3199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMwNDk5XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"JBL T280 TWS Bluetooth",
        rating:"4.5/5",
        price: 10999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMwNTU5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Huawei FreeLace Pro Earphones",
        rating:"5.0/5",
        price: 8999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Bluetooth Headset with Smart Watch",
        rating:"4.5/5",
        price: 4299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"OT1 TWS Airdots",
        rating:"4.7/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MjU5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Magnetic Charger",
        rating:"4.4/5",
        price: 2799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwMjk4XC9HcmF5X25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Basues Multi Charger",
        rating:"4.7/5",
        price: 3599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjYyXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Qi Wireless Charger",
        rating:"4.3/5",
        price: 1499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NTA3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USAMS Charging Pad",
        rating:"4.9/5",
        price: 1299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NTA0XC9CbGFja19uXzFfMTAyMDAwNzM0fjEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"USAMS CD30 Charger",
        rating:"4.7/5",
        price: 999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NDM2XC9CbGFja19uXzFfQ1c4XzEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"HOCO CW8 Charger",
        rating:"4.8/5",
        price: 999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjU2XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Baseus Qi Charger",
        rating:"4.6/5",
        price: 1199,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE1NTA3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"USAMS Charging Pad",
        rating:"4.9/5",
        price: 1299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ5XC9SZWRfbl8xXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"True Wireless Dynamic Earbuds",
        rating:"4.5/5",
        price: 12999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODMxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Awei T85 TWS Earbuds",
        rating:"4.5/5",
        price: 3599,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MzYxXC9XaGl0ZV9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Huawein FreeBuds 3 Earphone",
        rating:"3.7/5",
        price: 17999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMjQ5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Q9S TWS Earphones",
        rating:"4.5/5",
        price: 2999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODI5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"6D Sport Stereo Headset",
        rating:"4.7/5",
        price: 3099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTgwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Bluetooth Earbuds",
        rating:"4.6/5",
        price: 3399,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMwNDk5XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"JBL T280 TWS Bluetooth",
        rating:"4.5/5",
        price: 10999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMwNTU5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Huawei FreeLace Pro Earphones",
        rating:"5.0/5",
        price: 8999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIxODI3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Bluetooth Headset with Smart Watch",
        rating:"4.5/5",
        price: 4299,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDU3XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"OT1 TWS Airdots",
        rating:"4.7/5",
        price: 4499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQ5XC9SZWRfbl8xXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"True Wireless Dynamic Earbuds",
        rating:"4.5/5",
        price: 12999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNDI2XC9QaW5rX25fMV8zLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Whizzer Bluetooth Earphones",
        rating:"4.6/5",
        price: 7999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzk3XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Edifier Bluetooth Earphone",
        rating:"4.9/5",
        price: 7999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjQxXC9CbGFja19uXzFfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Wirless Stereo Headset",
        rating:"5.0/5",
        price: 999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTY1XC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"8GB Bluetooth Headset",
        rating:"4.5/5",
        price: 11499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjUxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Marvel Bluetooth Speakers",
        rating:"4.3/5",
        price: 4799,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI1MzYxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Mini Speaker",
        rating:"4.9/5",
        price: 4425,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI0MDA1XC9NdWx0aX5jb2xvcl9uXzFfQmx1ZXRvb3RoU3BlYWtlcjEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mifa i8 Speaker",
        rating:"4.7/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQwXC9SZWRfbl8xXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Smart Bluetooth Speaker with Alexa",
        rating:"4.5/5",
        price: 14999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQxXC9SZWRfbl8xXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Neck Speaker with Google Assitant",
        rating:"4.7/5",
        price: 17999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzkwXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Lenovo K3 Wireless Speaker",
        rating:"3.7/5",
        price: 4999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzOTk5XC9SZWRfbl8xX0JsdWV0b290aFNwZWFrZXIxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Iron Man Bluetooth Speaker",
        rating:"4.7/5",
        price: 1999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMxMzQyXC9CbGFja19uXzFfMS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Smart 360 Degree Speaker",
        rating:"3.5/5",
        price: 29999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI3MjU5XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"MIFA F10 Bluetooth Speakers",
        rating:"4.3/5",
        price: 3499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjI1MzYxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"TWS Mini Speaker",
        rating:"4.9/5",
        price: 4425,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTU2XC9SZWRfbl8xX01lYW5idXkyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Honor Pro 5.0 Earphone",
        rating:"4.3/5",
        price: 6499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTUxXC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"X9 Wireless Earphone",
        rating:"4.5/5",
        price: 3099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE5MDI5XC9SZWRfbl8xXzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Langsdom L9 Bluetooth",
        rating:"4.4/5",
        price: 3099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTc3XC9SZWRfbl8xXzIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"Mifa Waterproof Earphones",
        rating:"4.2/5",
        price: 3099,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzMzk3XC9CbHVlX25fMV8yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Edifier Bluetooth Earphone",
        rating:"4.9/5",
        price: 7999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjE3NjQxXC9CbGFja19uXzFfMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Wirless Stereo Headset",
        rating:"5.0/5",
        price: 999,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTY1XC9CbGFja19uXzFfTWVhbmJ1eTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMjAsImhlaWdodCI6MzIwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
        name:"8GB Bluetooth Headset",
        rating:"4.5/5",
        price: 11499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIzNTU2XC9SZWRfbl8xX01lYW5idXkyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"Honor Pro 5.0 Earphone",
        rating:"4.3/5",
        price: 6499,
        para:"Free Shipping"
    },
    {
        image:"https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjIwOTUxXC9CbHVlX25fMV8xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
        name:"X9 Wireless Earphone",
        rating:"4.5/5",
        price: 3099,
        para:"Free Shipping"
    },
]
localStorage.setItem("Accessories",JSON.stringify(Accessories))