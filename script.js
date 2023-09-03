var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-150+"px"
    blur.style.top=dets.y-150+"px"
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -20%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from(".card",{
    y:90,
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})
gsap.from("#page2-2 img,#page2-2-in",{
    y:90,
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
