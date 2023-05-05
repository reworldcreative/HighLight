import * as functions from "./modules/functions.js";

functions.isWebp();

function closemenu() {
  document.body.classList.remove("stopscroll");
  document.getElementById("menu").style.display = "none";
}

function openmenu() {
  document.body.classList.add("stopscroll");
  document.getElementById("menu").style.display = "block";
}
const elclose = document.getElementById("close-btn");
elclose.addEventListener("click", closemenu);
const elopen = document.getElementById("openmenu");
elopen.addEventListener("click", openmenu);

function select() {
  $(".news-dropdown-item").click(function () {
    $(".news-dropdown-btn").html($(this).text());
    $(".news-dropdown-item").removeClass("active");
  });

  $(".projects-dropdown-item").click(function () {
    $(".projects-dropdown-btn").html($(this).text());
    $(".projects-dropdown-item").removeClass("active");
  });
}

function loader(_success) {
  document.body.classList.add("stopscroll");
  var inner = document.querySelector(".preloader__text");
  var w = 0;
  if (inner) {
    var t = setInterval(function () {
      w = w + 1;
      inner.textContent = "HI " + w + "%";
      if (w === 80) {
        inner.textContent = "HI" + "LIGHT";
      }
      if (w === 100) {
        inner.textContent = "HI" + "LIGHT";

        clearInterval(t);
        w = 0;
        setTimeout(function () {
          document.body.classList.add("loaded");
          document.body.classList.remove("stopscroll");
        }, 300);

        if (_success) {
          return _success();
        }
      }
    }, 20);
  }
}

window.onload = select();
window.onload = function () {
  loader();
};

const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 5;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 4300);
}

let requestanim = document.getElementById("requestanim");
let requestitem = document.querySelectorAll(".request__item");
requestanim.addEventListener("mouseover", () => {
  requestitem.forEach((element) => element.classList.remove("_anim-stop"));
  requestitem.forEach((element) => element.classList.add("_anim"));
});

requestanim.addEventListener("mouseout", () => {
  requestitem.forEach((element) => element.classList.remove("_anim"));
  requestitem.forEach((element) => element.classList.add("_anim-stop"));
});

document.addEventListener("mousemove", function (evt) {
  gsap.to(".request__item._anim", {
    x: evt.clientX,
    y: evt.clientY,
    stagger: -0.1,
  });
});

const mainSwiper = new Swiper(".main-swiper", {
  //   slidesPerView: 1.174,
  loop: true,
  slidesPerView: "auto",

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    // type: "fraction",
    type: "progressbar",
  },
});

const latestSwiper = new Swiper(".latest-swiper", {
  slidesPerView: 3.5,
  spaceBetween: 48,
  // loop: true,

  breakpoints: {
    300: {
      slidesPerView: 1.2,
      spaceBetween: 26,
    },
    500: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },

    730: {
      slidesPerView: 1.6,
      spaceBetween: 20,
    },

    800: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    900: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1100: {
      slidesPerView: 2.5,
      spaceBetween: 45,
    },

    1400: {
      slidesPerView: 3.5,
      spaceBetween: 48,
    },
  },
});

const aboutSwiper = new Swiper(".about-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 13,
  // loop: true,

  // breakpoints: {
  //   300: {
  //     slidesPerView: 1.2,
  //     spaceBetween: 26,
  //   },
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // pagination: {
  //   el: ".swiper-pagination",
  //   // type: "fraction",
  //   type: "progressbar",
  // },
});

const aboutControlSwiper = new Swiper(".about-swiper", {
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    // type: "fraction",
    type: "progressbar",
  },
});

aboutControlSwiper.controller.control = aboutSwiper;
aboutSwiper.controller.control = aboutControlSwiper;

let mainSwiperAll = document.querySelector(".main-swiper__total");
if (mainSwiperAll) {
  mainSwiperAll.innerHTML = "0" + mainSwiper.slides.length;
}
let mainSwiperCurrent = document.querySelector(".main-swiper__current");

let aboutSwiperAll = document.querySelector(".about-swiper__total");
if (aboutSwiperAll) {
  aboutSwiperAll.innerHTML = "0" + aboutSwiper.slides.length;
}
let aboutSwiperCurrent = document.querySelector(".about-swiper__current");

mainSwiper.on("slideChange", function () {
  let currentSlide = ++mainSwiper.realIndex;
  if (mainSwiperCurrent) {
    mainSwiperCurrent.innerHTML = "0" + currentSlide;
  }
});

aboutSwiper.on("slideChange", function () {
  console.log(mainSwiperAll);
  let currentSlide = ++aboutSwiper.realIndex;
  if (aboutSwiperCurrent) {
    aboutSwiperCurrent.innerHTML = "0" + currentSlide;
  }
});

// $(".countrypicker").countrypicker();

// $(function () {
//   $(".selectpicker").selectpicker();
// });

document.getElementById("form-submit").addEventListener("click", function (e) {
  // $("#interierModal").hide();
  // $("#successModal").modal("show");
  // e.preventDefault();
});
