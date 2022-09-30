


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';


$(document).ready(function ($) {
	$body = $('body');

	// if (devStatus) {
	// 	pageWidget(['index']);
	// 	getAllClasses('html', '.elements_list');
	// }
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	if(windowWidth < mediaPoint1) {
		burgerMobile();
		topCart([25, 35]);
	} else {
		topCart([48, 66]);
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		// var vh2 = document.documentElement.clientHeight * 0.01;

		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}


document.addEventListener('DOMContentLoaded', () => {
	popupFormCall();
	popupWork();
	allPopup();
})

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function close(closes) {
	$(closes).toggleClass('active');
		setTimeout(function() {
			$(closes).removeClass('active')
		}, 3000)
}
function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: transparent'].join(';');
var message = 'Developed by KotoFeelGood https://api.whatsapp.com/send?phone=79615311386&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0';
console.info('%c%s', styles, message);

async function topCart(size) {

	function init() {
		var myMap = new ymaps.Map('map', {
			center: [60.144095, 29.930985],
			zoom: 16,
			scroll: false,
		}, {
			searchControlProvider: 'yandex#search'
		}),

		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			balloonContent: 'ул. Петровская, 53 Санкт-Петербург, Россия'
		}, {
			iconLayout: 'default#image',
			iconImageHref: '/i/global/map.svg',
			iconImageSize: size,
			iconImageOffset: [-5, -38]
		});

	myMap.geoObjects
		.add(myPlacemark)
	}
	await ymaps.ready(init);
}

const heroSlider = new Swiper('.hero_slider', {
	speed: 700,
	spaceBetween: 20,
	pagination: {
		el: '.hero_slider_pug '
	}
})

const aboutSlider = new Swiper('.about_slider', {
	speed: 700,
	pagination: {
		el: '.about_nav_fraction',
		type: 'fraction'
	},
	navigation: {
		nextEl: '.about_right',
		prevEl: '.about_left'
	},
	scrollbar: {
    el: '.about_nav_scrollbar',
    draggable: true,
  },
})

const workSlider = new Swiper('.work_popup_slider', {
	speed: 700,
	observer: true,
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 19
    }
  },
	pagination: {
		el: '.work_popup_slider_pug',
	},
	navigation: {
		nextEl: '.work_right',
		prevEl: '.work_left'
	},
})



function popupFormCall() {
	
	const popupForms = document.querySelector('.popup_form')
	const btnTriggerPopup = document.querySelectorAll('.btn_trigger');
	const popupCloser = popupForms.querySelectorAll('.popup_closer')
	
	Array.from(btnTriggerPopup).map((item) => {
		item.addEventListener('click', () => {
			popupForms.classList.add('active');
			document.body.style.overflow = "hidden"; 
			document.body.style.paddingRight = "15px"; 
		})
	})

	Array.from(popupCloser).map((item) => {
		item.addEventListener('click', () => {
			popupForms.classList.remove('active');
			document.body.style.overflow = "";
			document.body.style.paddingRight = ""; 
		})
	})
}


tabs
function tabs(link) {
	let linkSelector = $(link)
	$(linkSelector).on('click', function (e) {
		e.preventDefault();
		let $this = $(this)
		$(linkSelector).removeClass('active');
		$this.addClass('active');
	});
}

tabs('.work_link_item');

$(document).ready(function() {

	const linkItem = document.querySelectorAll('.work_link_item>a')
	linkItem.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			activeEl =  el;
			activeEl.classList.remove('active')
			activeEl.classList.add('active')
		})
	})
})


function popupWork() {
	const popupWorks = document.querySelector('.work_popup')
	const btnTriggerWork = document.querySelectorAll('.work_trigger');
	const popupCloserWork = popupWorks.querySelectorAll('.work_closer')
	
	Array.from(btnTriggerWork).map((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			popupWorks.classList.add('active');
			document.body.style.overflow = "hidden"; 
			document.body.style.paddingRight = "15px"; 
			workSlider.init();
			workSlider.update();
		})
	})

	Array.from(popupCloserWork).map((item) => {
		item.addEventListener('click', () => {
			popupWorks.classList.remove('active');
			document.body.style.overflow = "";
			document.body.style.paddingRight = ""; 
		})
	})
}


function allPopup() {
	const submit = document.querySelectorAll('.btn_submit');
	const popupCall = document.querySelector('.popup_form')

	Array.from(submit).map((item) => {
		item.addEventListener('click', () => {
			popupCall.classList.remove('active')
			document.body.style.overflow = "";
			document.body.style.paddingRight = "";
			succes('.succes')
		})
	})
}
var lastId;
var topMenu = $(".header_menu>li>a");
var topMenuHeight = topMenu.outerHeight();
var menuItems = topMenu.find("a");
var scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight - 150;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 100);
  e.preventDefault();
});
$(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight + 300;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});

function burgerMobile() {
	const burgerWindow = document.querySelector('.burger')
	const btnTriggerBurger = document.querySelectorAll('.header_burger');
	const closeBurger = burgerWindow.querySelectorAll('.burger_closer')
	
	Array.from(btnTriggerBurger).map((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			burgerWindow.classList.add('active');
			document.body.style.overflow = "hidden"; 
		})
	})

	Array.from(closeBurger).map((item) => {
		item.addEventListener('click', () => {
			burgerWindow.classList.remove('active');
			document.body.style.overflow = "";
		})
	})
}




































