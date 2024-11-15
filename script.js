window.addEventListener('load', () => {
    const days = document.querySelector('.days')
    // const hours = document.querySelector('.hours')
    // const minutes = document.querySelector('.minutes')
    // const seconds = document.querySelector('.seconds')

    let timeLeft = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
    }

    let totalSeconds;

    function init() {
        // totalSeconds = Math.floor((new Date('11/10/2024') - new Date()) / 1000);
        // setTimeLeft();
        let interval = setInterval(() => {
            // if (totalSeconds < 0) {
            // }
            countTime();
            clearInterval(interval);
        }, 700);
        // countTime();
    }

    function countTime() {
        // if (totalSeconds > 0) {
        //     --timeLeft.s;
        //     if (timeLeft.m >= 0 && timeLeft.s < 0) {
        //         timeLeft.s = 59;
        //         --timeLeft.m;
        //         if (timeLeft.h >= 0 && timeLeft.m < 0) {
        //             timeLeft.m = 59;
        //             --timeLeft.h;
        //             if (timeLeft.d >= 0 && timeLeft.h < 0) {
        //                 timeLeft.h = 23;
        //                 --timeLeft.d;
        //             }
        //         }
        //     }
        // }
        // --totalSeconds;
        printTime();
    }

    function printTime() {
        animateFlip(days);
        // animateFlip(days, timeLeft.d);
        // animateFlip(hours, timeLeft.h);
        // animateFlip(minutes, timeLeft.m);
        // animateFlip(seconds, timeLeft.s);
    }

    function animateFlip(element) {
        // const stopValue = element.querySelector('.stop').innerText;
        // if (stopValue == value) return;
        // console.log(stopValue)
        // element.querySelector('.stop').innerText = value;

        // const topBack = element.querySelector('.top-back').innerHTML;
        // const bottomBack = element.querySelector('.bottom-back').innerHTML;
        // const currentValue = value < 10 ? '0' + value : '' + value;

        // if (valueInDom === currentValue) return;

        // element.querySelector('.top-back span').innerText = currentValue;
        // element.querySelector('.bottom-back span').innerText = currentValue;


        gsap.to(element.querySelector('.top'), 0.7, {
            rotationX: '-180deg',
            transformPerspective: 300,
            ease: Quart.easeOut
            // onComplete: function() {
            //     // element.querySelector('.top').innerText = topBack;
            //     // element.querySelector('.bottom').innerHTML = bottomBack;
            //     // gsap.set(element.querySelector('.top'), {rotationX: '-180deg'});
            //     // gsap.set(element.querySelector('.bottom'), {rotationX: '-180deg'});
            // }
        }).delay(4.15);

        gsap.to(element.querySelector('.top-back'), 0.7, {
            rotationX: 0,
            transformPerspective: 300,
            ease: Quart.easeOut
        }).delay(4.15);
    }

    // function setTimeLeft() {
    //     timeLeft.d = Math.floor(totalSeconds / (60 * 60 * 24));
    //     timeLeft.h = Math.floor(totalSeconds / (60 * 60) % 24);
    //     timeLeft.m = Math.floor(totalSeconds / (60) % 60);
    //     timeLeft.s = Math.floor(totalSeconds % 60);
    // }

    init();
});