(function ($) {
	"use strict";

	jQuery('.dropdown-icon2').on('click', function () {
        jQuery(this).toggleClass('active').next('.submenu-list').slideToggle();
        jQuery(this).parent().siblings().children('.submenu-list').slideUp();
        jQuery(this).parent().siblings().children('.active').removeClass('active');
    });

	  // Menu Text Animation
	  document.querySelectorAll('.main-menu > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');

	  setTimeout(() => {
		var menu_text = document.querySelectorAll(".menu-text span")
		menu_text.forEach((item) => {
		  var font_sizes = window.getComputedStyle(item, null);
		  let font_size = font_sizes.getPropertyValue("font-size");
		  let size_in_number = parseInt(font_size.replace("px", ""));
		  let new_size = parseInt(size_in_number / 3)
		  new_size = new_size + "px"
		  if (item.innerHTML == " ") {
			item.style.width = new_size
		  }
		})
	  }, 1000)
  	  

	// sidebar
	$('.sidebar-btn2').on("click", function () {
		$('.header-sidebar').addClass('slide');
	});
	$('.close-btn').on("click", function () {
		$('.header-sidebar').removeClass('slide');
	});

	$('.sidebar-btn').on("click", function () {
        $('.sidebar-menu').addClass('active');
    });
	$('.sidebar-menu-close').on("click", function () {
        $('.sidebar-menu').removeClass('active');
    });


	//Counter up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


	var swiper = new Swiper(".portfolio-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 3,
			},
		}
	});

	//wow js 
    jQuery(window).on('load', function () {
        new WOW().init();
        window.wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            offset: 80
        })
        window.wow.init();
    });

	$(".single-selector").on("click", function () {
		$(this).addClass("selected").siblings().removeClass("selected");
	});


	// ====================
	// Progrees Bar
	// ====================
	var skillPers = document.querySelectorAll(".skill-bar-per");

	skillPers.forEach(function(skillPer) {
	var per = parseFloat(skillPer.getAttribute("data-per"));
	skillPer.style.width = per + "%";
	
	var animatedValue = 0; 
	var startTime = null;
	
	function animate(timestamp) {
		if (!startTime) startTime = timestamp;
		var progress = timestamp - startTime;
		var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)
		
		if (stepPercentage < 1) {
		animatedValue = per * stepPercentage;
		skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
		requestAnimationFrame(animate);
		} else {
		animatedValue = per;
		skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
		}
	}
	requestAnimationFrame(animate);
	});

	// services Images
	const serviceImgItem = document.querySelectorAll(".sevices-wrap .single-services ");
	console.log(serviceImgItem);
	function followImageCursor(event, serviceImgItem) {
	  const contentBox = serviceImgItem.getBoundingClientRect();
	  const dx = event.clientX - contentBox.x;
	  const dy = event.clientY - contentBox.y;
	  serviceImgItem.children[2].style.transform = `translate(${dx}px, ${dy}px)`;
	}
  
	serviceImgItem.forEach((item, i) => {
	  item.addEventListener("mousemove", (event) => {
		setInterval(followImageCursor(event, item), 100);
	  });
	});

	$(".portfolio-list .single-portfolio").on("mouseenter", function (e) {
		// // Get the index of the hovered content list item
		var index = $(this).index();
		// Remove the 'active' class from all image list items
		$(".portfolio-img-group li").removeClass("active");
		// Add the 'active' class to the corresponding image list item
		$(".portfolio-img-group li:eq(" + index + ")").addClass("active");
	});



	// Button Bounce animation
	let arr1 = gsap.utils.toArray("#btn_wrapper")
	let arr2 = gsap.utils.toArray(".btn_wrapper")
	const all_buttons = arr1.concat(arr2);
	all_buttons.forEach((btn) => {
	if (!(btn.classList.contains("banner-btn"))) {
		gsap.from(btn, {
		scrollTrigger: {
			trigger: btn,
			start: "top center+=150",
			markers: false,
		},
		opacity: 0,
		y: -70,
		ease: "bounce",
		duration: 1.5,
		})
	}
	})

	// Dark Light
	const dayNightSwitches = document.querySelectorAll(".tt-style-switch");

	const toggleDarkMode = () => {
		const body = document.body;
		body.classList.toggle("dark");

		localStorage.setItem("brodie_theme", body.classList.contains("dark") ? "dark" : "");
	};

	// Add click event to all .tt-style-switch elements
	dayNightSwitches.forEach(switchElement => {
		switchElement.addEventListener("click", toggleDarkMode);
	});

	// Apply saved theme on page load
	window.addEventListener("load", () => {
		const savedTheme = localStorage.getItem("brodie_theme");
		if (savedTheme === "dark") {
			toggleDarkMode();
		}
	});
	

}(jQuery));


