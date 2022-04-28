const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelector('.indicators button')];

let currentTestimonial = 0;

indicators.forEach((item, i)=>{
    item.addEventListiner('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.getElementsByClassName.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})