let crsr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.clientX + "px"
    crsr.style.top = dets.clientY + "px"
    blur.style.left = dets.clientX - 200 + "px"
    blur.style.top = dets.clientY - 200 + "px"

})

gsap.to("#nav", {
    backgroundColor: '#000',
    height: "110px",
    duration: 0.4,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})

let h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function (params) {
        crsr.style.scale = 4;
        crsr.style.border = "0.1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function (params) {
        crsr.style.scale = 1;
        crsr.style.border = 'none';
        crsr.style.backgroundColor = '#95c11E';
    })
})

gsap.from("#about-us img, #about-us-in", {
    y: 90, 
    opacity: 0,
    duraion: 1,
    scrollTrigger: {
        trigger: '#about-us',
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub: 3,
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 50%",
        scrub: 1,
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 45%",
        scrub: 1,
    }
})