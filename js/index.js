
document.addEventListener("DOMContentLoaded", (event) => {
    if (window.innerHeight * 16 / window.innerWidth < 9) {
        document.body.overflow = 'auto'
    }
    const tl = gsap.timeline({
        default: {
            ease: "linear"
        }
    })

    tl.to('.video__bg', {
        background: 'rgba(0, 0, 0, 0.5)',
        delay: 1,
        duration: 1
    })
    tl.from('.header,.footer', {
        opacity: 0,
        duration: 1
    })
    tl.from('.title', {
        y: 50,
        opacity: 0,
        duration: 1
    }, "<")
    tl.from('.desc,.timer', {
        y: 80,
        opacity: 0,
        duration: 1
    }, "<")
    const timeNum = document.querySelectorAll('[data-time]')
    const video = document.querySelector('.video video')
    video.play()
    function timerFn() {
        const endDate = new Date("2025-06-05T00:00:00");
        const timer = setInterval(() => {
            const now = new Date();
            const diff = endDate - now;
            if (diff <= 0) {
                clearInterval(timer);
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            timeNum.forEach(num => {
                switch (num.getAttribute('data-time')) {
                    case 'day-1':
                        num.innerHTML = sep(zeroAdd(days))[0]
                        break;
                    case 'day-2':
                        num.innerHTML = sep(zeroAdd(days))[1]
                        break;
                    case 'hour-1':
                        num.innerHTML = sep(zeroAdd(hours))[0]
                        break;
                    case 'hour-2':
                        num.innerHTML = sep(zeroAdd(hours))[1]
                        break;
                    case 'min-1':
                        num.innerHTML = sep(zeroAdd(minutes))[0]
                        break;
                    case 'min-2':
                        num.innerHTML = sep(zeroAdd(minutes))[1]
                        break
                    case 'sec-1':
                        num.innerHTML = sep(zeroAdd(seconds))[0]
                        break;
                    case 'sec-2':
                        num.innerHTML = sep(zeroAdd(seconds))[1]
                        break;
                    default:
                        break;
                }
            })
        }, 1000);
    }
    timerFn()
    function zeroAdd(num) {
        return num < 10 ? "0" + num : num
    }
    function sep(num) {
        let str = num.toString()
        return [str[0], str[1]]
    }
})
