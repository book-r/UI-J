class Carousel {
    constructor(object) {
        this.carousel = object;
        this.images = this.carousel.getElementsByTagName('img')
        this.curIndex = this.images.length - 1
        console.log(this.curIndex)
        this.left = this.carousel.querySelector('.left-button')
        this.right = this.carousel.querySelector('.right-button')
        console.log(this.left)
        this.images[this.curIndex].classList.add('show')
        this.left.addEventListener('click', () => this.clickLeft(this.images))
        this.right.addEventListener('click', () => this.clickRight(this.images))
    }
    clickLeft(object) {
        Array.from(object).forEach(object => {
            object.classList.remove('show')
            object.classList.add('hide')
        })
        if (this.curIndex === 0) {
            this.curIndex = this.images.length - 1;
        } else {
            this.curIndex -= 1
        };
        this.images[this.curIndex].classList.add('show')
        this.images[this.curIndex].classList.remove('hide')
        fadeIn(this.images[this.curIndex])
        console.log(this.curIndex)
    }
    clickRight(object) {
        Array.from(object).forEach(object => {
            object.classList.remove('show')
            object.classList.add('hide')
        })
        if (this.curIndex === (this.images.length - 1)) {
            this.curIndex = 0;
        } else {
            this.curIndex += 1
        };
        this.images[this.curIndex].classList.add('show')
        this.images[this.curIndex].classList.remove('hide')
        fadeIn(this.images[this.curIndex])
        console.log(this.curIndex)
    }
}
let carousel = document.querySelector('.carousel')
new Carousel(carousel)

function fadeIn(el) {
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.01;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 8)
        }
    };
    tick();
}

