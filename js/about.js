gsap.timeline({
scrollTrigger:{
trigger:".second-container",
start:"center center", // Animation starts at this point 
end:"bottom top",        // Animation End at this point
markers: false, 
scrub: true ,
pin: true
}

})
.from('.second-header' ,{x : innerWidth * 1})
.from('.text2' ,{x : innerWidth * -1})
.from('.text3' ,{x : innerWidth * 1})
.from('.guitar' , {
y : innerHeight * 2 ,
rotate : 360 })
    
    
    
    
gsap.timeline({
scrollTrigger:{
trigger:".third-container",
start:"center center", // Animation starts at this point 
end:"bottom center",        // Animation End at this point
markers: false, 
scrub: true ,
pin: true
}

})
.from('.third-container' ,{opacity: 0})
.from(".third-header" ,{x: innerWidth * 1})
.from(".text4" ,{x: innerWidth * -1})
.from('.motorcycle' , {
y : innerHeight * 2 ,
rotate : 360 })
    



gsap.timeline({
scrollTrigger:{
trigger:".container4",
start:"top top", // Animation starts at this point 
end:"bottom top",        // Animation End at this point
markers: false, 
scrub: true ,
pin: true
}

})
.from('.container4' ,{opacity: 0})
.from(".header4" ,{x: innerWidth * 1})
.from(".text5" ,{x: innerWidth * -1})
.from(".text6" ,{x: innerWidth * 1})
.from(".text7" ,{x: innerWidth * -1})
.from('.clibming' , {opacity: 0})



gsap.timeline({
    scrollTrigger:{
    trigger:".container5",
    start:"top top", // Animation starts at this point 
    end:"bottom top",        // Animation End at this point
    markers: false, 
    scrub: true ,
    pin: true
    }
    
    })
    .from('.container5' ,{opacity: 0})
    .from(".container5 h2" ,{x: innerWidth * -1})
    .from(".last-text" ,{x: innerWidth * 1})
    







