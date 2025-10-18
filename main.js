const scrollRevealoptions = {
    distance: '60px',
    duration: 2500,
   // delay: 400,
    //reset: true
    origin:"bottom"

};

// header container
ScrollReveal().reveal('.header__container h1', {scrollRevealoptions,
    delay:500,
});

ScrollReveal().reveal('.header__container h2', {scrollRevealoptions,
    delay:1000,
});

ScrollReveal().reveal('.header__container .btn', {scrollRevealoptions,
    delay:1500,
});

ScrollReveal().reveal('.header__container img', {scrollRevealoptions,
    origin:"right",
});

// why container
ScrollReveal().reveal('.why__container .section__header', {scrollRevealoptions,
    delay:300,
});

ScrollReveal().reveal('.why__container  p', {scrollRevealoptions,
    delay:400,
});

ScrollReveal().reveal('.why__container li', {scrollRevealoptions,
    dealay:1000,
    interval:500,});

    ScrollReveal().reveal('.why__container img', {scrollRevealoptions,
        origin:"left",
    });

    // hero container
    ScrollReveal().reveal(".hero__card", {
        ...scrollRevealoptions,
        interval:500,
    });

    // classes container
    ScrollReveal().reveal(".classes__image", {
        duration:1000,
        interval:500,
    });

    // membership container
    ScrollReveal().reveal(".membership__card", {
        ...scrollRevealoptions,
        interval:500,
    });

    //stories container
    ScrollReveal().reveal(".stories__card", {
        ...scrollRevealoptions,
        interval:500,
    });

    // posts container
    ScrollReveal().reveal(".posts__card", {
        ...scrollRevealoptions,
        interval:500,
    });

    //photos
    scrollReveal().reveal(".photos__img", {
        duration:1000,
        interval:500,
    });