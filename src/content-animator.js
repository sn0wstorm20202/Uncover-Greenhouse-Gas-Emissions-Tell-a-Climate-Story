function toggleMenu(name, value) {
    document.getElementById(`${name}-menu-item-id`).className = value ? "cursor-pointer rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" : "cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white";
    document.getElementById(`${name}-mobile-menu-item-id`).className = value ? "cursor-pointer block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" : "cursor-pointer block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white";
}

gsap.registerPlugin(ScrollTrigger);

gsap.to("#navbar", {
    scrollTrigger: {
        trigger: ".header-text",
        toggleActions: "play none none reverse",
        start: "50% 50%",
    },
    backgroundColor: "rgba(31,41,55,1)",
    boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.7)",
    duration: 0.2,
});

ScrollTrigger.create({
    trigger: ".header-text",
    start: "0 0",
    end: "50% 0",
    onEnter: function() {
        toggleMenu('home', true);
    },
    onLeave: function() {
        toggleMenu('home', false);
    },
    onEnterBack: function() {
        toggleMenu('home', true);
    },
    onLeaveBack: function() {
        toggleMenu('home', false);
    },
});

ScrollTrigger.create({
    trigger: ".text-section-container",
    start: "0 5%",
    // end: "50% 0",
    onEnter: function() {
        toggleMenu('reference', true);
    },
    onLeave: function() {
        toggleMenu('reference', false);
    },
    onEnterBack: function() {
        toggleMenu('reference', true);
    },
    onLeaveBack: function() {
        toggleMenu('reference', false);
    },
});

gsap.timeline()
    .to(".header-title", {
        marginTop: 0,
        opacity: 1,
        duration: 0.3,
        ease: "expo.out",
        delay: 0.4,
    })
    .to(".header-subtitle", {
        marginTop: 0,
        opacity: 1,
        duration: 0.3,
        ease: "expo.out",
        delay: 0.2,
    });

gsap.to(".img-section-1", {
    scrollTrigger: {
        trigger: ".img-section-1",
        start: "top 50%",
        scrub: true,
    },
    backgroundPosition: "50% 100%",
    duration: 1,
});

gsap.to(".img-section-2", {
    scrollTrigger: {
        trigger: ".img-section-2",
        start: "top 50%",
        scrub: true,
    },
    backgroundPosition: "50% 100%",
    duration: 1,
});

// const tl = gsap.timeline()
//     .from('.intro-text-1', {
//         opacity: 1,
//         marginLeft: 20,
//         marginRight: -20,
//         duration: 0.3,
//     })
//     .from('.intro-text-2', {
//         opacity: 1,
//         marginLeft: -20,
//         marginRight: 20,
//         duration: 0.3,
//     });

// ScrollTrigger.create({
//     animation: tl,
//     trigger: '.content-text-1',
//     start: 'top 50%',
//     toggleActions: "restart reverse restart reverse",
//     pin: true,
//     onEnter: function() {
//         toggleMenu('introduction', true);
//     },
//     onLeave: function() {
//         toggleMenu('introduction', false);
//     },
//     onEnterBack: function() {
//         toggleMenu('introduction', true);
//     },
//     onLeaveBack: function() {
//         toggleMenu('introduction', false);
//     },
// });

gsap.timeline({
    scrollTrigger: {
        trigger: ".content-text-1",
        start: "top 50%",
        end: "+=500% top",
        scrub: true,
        toggleActions: "restart reverse restart reverse",
        pin: true,
        onEnter: function() {
            toggleMenu('introduction', true);
        },
        onEnterBack: function() {
            toggleMenu('introduction', true);
        },
        onLeave: function() {
            toggleMenu('introduction', false);
        },
        onLeaveBack: function() {
            toggleMenu('introduction', false);
        },
    }
}).to(".intro-text-1", {
    opacity: 1,
    marginLeft: 0,
    marginRight: 0,
    duration: 1,
}).to(".intro-text-1", {
    opacity: 0,
    marginLeft: 20,
    marginRight: -20,
    zIndex: 0,
    duration: 1,
    delay: 4,
}).to(".intro-text-2", {
    opacity: 1,
    marginLeft: 0,
    marginRight: 0,
    duration: 1,
}).to(".intro-text-2", {
    opacity: 0,
    marginLeft: -20,
    marginRight: 20,
    duration: 1,
    delay: 4,
});

gsap.timeline( {
    scrollTrigger: {
        trigger: ".content-text-2",
        start: "top 50%",
        end: "+=500% top",
        // markers: true,
        scrub: true,
        toggleActions: "restart reverse restart reverse",
        pin: true,
        onEnter: function() {
            toggleMenu('impact', true);
        },
        onEnterBack: function() {
            toggleMenu('impact', true);
        },
        onLeave: function() {
            toggleMenu('impact', false);
        },
        onLeaveBack: function() {
            toggleMenu('impact', false);
        },
    }
}).to(".impact-text-1", {
    opacity: 1,
    margin: 0,
    duration: 1,
    delay: 3,
}).to(".impact-text-1", {
    opacity: 0,
    margin: 20,
    zIndex: 0,
    duration: 1,
    delay: 4,
}).to(".impact-text-2", {
    opacity: 1,
    margin: 0,
    duration: 1,
}).to(".impact-text-2", {
    opacity: 0,
    margin: -20,
    duration: 1,
    delay: 4,
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".analysis-container",
        start: "top 50%",
        end: "+=650% top",
        scrub: true,
        pin: true,
        onEnter: function() {
            toggleMenu('analysis', true);
        },
        onEnterBack: function() {
            toggleMenu('analysis', true);
        },
        onLeave: function() {
            toggleMenu('analysis', false);
        },
        onLeaveBack: function() {
            toggleMenu('analysis', false);
        },
        // markers: true,
    }
}).to(".img-section-3", {
    borderRadius: 0,
    top: "-50%",
    left: 0,
    width: "100%",
    height: "100%",
    transform: "translate(0, 0)",
    duration: 1,
}).to(".img-section-3", {
    backgroundPosition: "50% 100%",
    duration: 17,
}).set(".img-section-3", {
    pointerEvents: "all",
}, 1).to("#emission-map-analysis-container-id", {
    opacity: 1,
    marginLeft: 0,
    marginRight: 0,
    duration: 1,
    onEnter: function() {
        map.invalidateSize();
    },
}, 1).to("#emission-map-analysis-container-id", {
    opacity: 0,
    marginLeft: 20,
    marginRight: -20,
    zIndex: 0,
    duration: 1,
}, 5).to("#chloropleth-map-analysis-container-id", {
    opacity: 1,
    marginLeft: 0,
    marginRight: 0,
    duration: 1,
}, 6).to("#chloropleth-map-analysis-container-id", {
    opacity: 0,
    marginLeft: -20,
    marginRight: 20,
    duration: 1,
}, 10).to(".analysis-text", {
    opacity: 1,
    marginLeft: 0,
    marginRight: 0,
    zIndex: 0,
    duration: 1,
}, 11).to(".analysis-text", {
    opacity: 0,
    marginLeft: 20,
    marginRight: -20,
    duration: 1,
}, 15).set(".analysis-text", {
    pointerEvents: "none",
}, 16);

gsap.timeline({
    scrollTrigger: {
        trigger: ".section-4-container",
        start: "top top",
        end: "+=500% top",
        scrub: 3,
        pin: true,
        onEnter: function() {
            toggleMenu('solution', true);
        },
        onEnterBack: function() {
            toggleMenu('solution', true);
        },
        onLeave: function() {
            toggleMenu('solution', false);
        },

        onLeaveBack: function() {
            toggleMenu('solution', false);
        },
        ease: "ease-out",
        // markers: true,
    }
}).to(".slide-container", {
    marginLeft: "-100vw",
    duration: 14,
    delay: 12,
}).to(".slide-container", {
    marginLeft: "-200vw",
    duration: 14,
    delay: 12,
}).to(".slide-container", {
    marginLeft: "-300vw",
    duration: 14,
    delay: 12,
}).to(".slide-container", {
    marginLeft: "-400vw",
    duration: 14,
    delay: 12,
}).to(".slide-container", {
    marginLeft: "-500vw",
    duration: 14,
    delay: 12,
})

