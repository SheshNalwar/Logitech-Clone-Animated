gsap.from("#page1 h1,#page1 p, #page1 button", {
    x:80,
    duration:1,
    delay:0.1,
    opacity:0,
    stagger:0.1,
})

gsap.from ("#page2 h1, #page2 p, #page2 h2", {
    y:-20,
    duration:0.5,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger: "#page2 h1",
        scroller: "body",
        // markers:true,
        start:"top 90%",
    }
})

gsap.from ("#page2 img", {
    scale:1.5,
    duration:0.6,
    opacity:0,
    scrollTrigger:{
        trigger: "#page2 #grid",
        scroller: "body",
        // markers:true,
        start:"top 70%"
    }
})

gsap.from ("#page3 h1", {
    y:100,
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger: "#page3 h1",
        scroller: "body",
        // markers:true,
        start:"top 80%"
    }
})

gsap.from ("#page3 #shop img", {
    y:200,
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger: "#page3 #shop img",
        scroller: "body",
        // markers:true,
        start:"top 90%"
    }
})


gsap.from (" #page3 #shop p, #page3 #shop h2", {
    y:-20,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger: " #page3 #shop p, #page3 #shop h2",
        scroller: "body",
        // markers:true,
        start:"top 90%"
    }
})


gsap.from (" #page4 h1, #page4 p", {
    y:100,
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger: " #page4 h1,  #page4 p",
        scroller: "body",
        // markers:true,
        start:"top 90%"
    }
})

gsap.from ("#page4 #product1 , #page4 #product2 ", {
    x:-200,
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger: "#page4 #product1 , #page4 #product2 ",
        scroller: "body",
        // markers:true,
        start:"top 60%"
    }
})


gsap.from ("#page4 #product3 , #page4 #product4 ", {
    x:200,
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger: "#page4 #product3 , #page4 #product4 ",
        scroller: "body",
        // markers:true,
        start:"top 60%"
    }
})


gsap.from ("#page5 #page5-text h1", {
    x:-200,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page5 #page5-text h1",
        scroller: "body",
        // markers:true,
        start:"top 80%"
    }
})

gsap.from ("#page5 #page5-text p", {
    x:200,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page5 #page5-text p",
        scroller: "body",
        // markers:true,
        start:"top 80%"
    }
})


gsap.from ("#page5 #page5-text button", {
    x:-200,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page5 #page5-text button",
        scroller: "body",
        // markers:true,
        start:"top 80%",
    }
})

gsap.to("#nav", {
    backgroundColor: "#fff",
    height: "80px",
    top:0,
    duration: 0.5,
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start : "top -10%",
        end: "top -11",
        scrub : 2
    }
})