const headline = document.querySelectorAll(".headline")

var slideUp = {
  distance: '150%',
  origin: 'left',
  opacity: null
};


ScrollReveal().reveal('.headline',slideUp, { 

  delay: 3375,
  duration: 5500,
  reset: true,

});




window.onload = swal("This modal will disappear soon!", {
  buttons: false,
  timer: 3000,
});


wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

new WOW().init();