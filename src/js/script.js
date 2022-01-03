$(document).ready(function(){
  $('.carousel__inner').slick({
  speed: 500,
	// autoplay: true,
  // autoplaySpeed: 2000,
  // adaptiveHeight: true,
	prevArrow: '<button type="button" class="slick-prev"><img src="../img/leftArrow.png"></button>',
	nextArrow: '<button type="button" class="slick-next"><img src="../img/rightArrow.png"></button>',
	responsive: [
	{
		breakpoint: 992, //брейкпоинт пикселей (0-1024)
      settings: {
        dots: true,
				arrows: false
      }
	},

	]
});
});

//document - html документ (наш)
//$ - библиотека jQuery
//slick() - метод, вызывающий слик-слайдер