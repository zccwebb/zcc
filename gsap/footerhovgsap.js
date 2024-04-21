var circle = document.querySelector("#circle");
var footerZe = document.querySelector(".zenith");
var footerCo = document.querySelector(".code");
var footerCr = document.querySelector(".creations");



footerZe.addEventListener("mousemove",function(){    
     gsap.to(footerZe,{
          mixBlendMode: "difference",
          duration: 0.3,
     });
     gsap.to(circle,{
          scale: 5,
     });
});
footerZe.addEventListener("mouseleave",function(){
     gsap.to(footerZe,{
          mixBlendMode: "none",
          duration: 0.3,
     });
     gsap.to(circle,{
          scale: 1,
     });
     document.querySelector(".zenith").style.color = "#fff";
});



footerCo.addEventListener("mousemove",function(){ 
     gsap.to(circle,{
          scale: 5,
     })
     gsap.to(".text",{
          mixBlendMode:"difference",
          color: "#fff",
          duration: 0.3,
     })
})
footerCo.addEventListener("mouseleave",function(){
     gsap.to(circle,{
          scale: 1,
     })
     gsap.to(".text",{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })
     footerCo.style.color = "#fff";
})



footerCr.addEventListener("mousemove",function(){
     gsap.to(circle,{
          scale: 5,
     })
     gsap.to(".text",{
          mixBlendMode:"difference",
          color: "#fff",
          duration: 0.3,
     })
})
footerCr.addEventListener("mouseleave",function(){
     gsap.to(circle,{
          scale: 1,
     })
     gsap.to(".text",{
          mixBlendMode: "none",
          color:"#fff",
          duration: 0.3,
     })
     footerCr.style.color = "#fff";
});