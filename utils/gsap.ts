import gsap from "gsap"

var tl = gsap.timeline();

async function pageTransitionIn() {

 await new Promise((resolve) => {
  tl.set(".loading-screen", {
   top: "100%"
  });

  if (window.innerWidth > 540) {
   tl.set(".loading-screen .rounded-div-wrap.bottom", {
    height: "10vh",
   });
  } else {
   tl.set(".loading-screen .rounded-div-wrap.bottom", {
    height: "5vh",
   });
  }

  tl.to(".loading-screen", {
   duration: .5,
   top: "0%",
   ease: "Power4.easeIn",
   onComplete() {
    resolve('mount router')
   }

  })

  tl.to(".loading-screen .rounded-div-wrap.top", {
   duration: .4,
   height: "10vh",
   ease: "Power4.easeIn",
  }, "=-.5");

  tl.to(".loading-words", {
   duration: .8, //0.8
   opacity: 1,
   y: -50,
   ease: "Power4.easeOut",
   delay: .05
  });

  tl.set(".loading-screen .rounded-div-wrap.top", {
   height: "0vh"
  });

  tl.to(".loading-screen", {
   duration: .8,
   top: "-100%",
   ease: "Power3.easeInOut"
  }, "=-.2");

  tl.to(".loading-words", {
   duration: .6,
   opacity: 0,
   ease: "linear"
  }, "=-.8");

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
   duration: .85,
   height: "0",
   ease: "Power3.easeInOut"
  }, "=-.6");

  tl.set("html", {
   cursor: "auto"
  }, "=-0.6");

  if (window.innerWidth > 540) {
   tl.set(".loading-screen .rounded-div-wrap.bottom", {
    height: "10vh"
   });
  } else {
   tl.set(".loading-screen .rounded-div-wrap.bottom", {
    height: "5vh"
   });
  }

  tl.set(".loading-screen", {
   top: "100%"
  });

  tl.set(".loading-words", {
   opacity: 0,
  });
 })

}

async function pageTransitionInBeforeMount() {
 await new Promise((resolve) => {
  var tl = gsap.timeline();

  tl.set(".loading-screen", {
   top: "0%"
  });


  if (window.innerWidth > 540) {
   tl.set(".loading-screen .rounded-div-wrap.bottom", {
    height: "10vh",
   });
  } else {
   tl.set(".loading-screen .rounded-div-wrap.bottom", {
    height: "5vh",
   });
  }
  resolve('mounted route')

  tl.to(".loading-words", {
   duration: .5,
   opacity: 1,
   y: -50,
   ease: "Power4.easeOut",
  });

  tl.set(".loading-screen .rounded-div-wrap.top", {
   height: "0vh"
  });

  tl.to(".loading-screen", {
   duration: 1,
   top: "-100%",
   ease: "Power3.easeInOut"
  }, "=-.2");

  tl.to(".loading-words", {
   duration: .6,
   opacity: 0,
   ease: "linear"
  }, "=-.8");

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
   duration: .75,
   height: "0",
   ease: "Power3.easeInOut"
  }, "=-.6");

  tl.set("html", {
   cursor: "auto"
  }, "=-0.6");
  if (window.innerWidth > 540) {
   tl.set(".loading-screen .rounded-div-wrap.bottom", {
    height: "10vh"
   });
  } else {
   tl.set(".loading-screen .rounded-div-wrap.bottom", {
    height: "5vh"
   });
  }

  tl.set(".loading-screen", {
   top: "100%"
  });

  tl.set(".loading-words", {
   opacity: 0,
  });

 })
}
function contentAnimation() {
 // tl.to('.animate-this', { duration: .8, top: 0, ease: "Power4.easeInOut" })
 tl.to('.animate-this', { duration: .6, top: 0, ease: 'power4.out', })
}

export { pageTransitionIn, pageTransitionInBeforeMount, contentAnimation }