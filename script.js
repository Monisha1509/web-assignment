document.addEventListener("DOMContentLoaded", function () {

  /* ================= APPLICATIONS SLIDER ================= */

  const track = document.querySelector(".applications-track");
  const nextBtn = document.querySelector(".app-next");
  const prevBtn = document.querySelector(".app-prev");

  if (track && nextBtn && prevBtn) {

    const cards = document.querySelectorAll(".app-card");
    const slider = document.querySelector(".applications-slider");

    const gap = 30;
    const cardWidth = cards[0].offsetWidth + gap;
    const visibleArea = slider.offsetWidth;
    const maxScroll = track.scrollWidth - visibleArea;

    let scrollPosition = 0;

    nextBtn.addEventListener("click", () => {
      scrollPosition += cardWidth;
      if (scrollPosition > maxScroll) scrollPosition = maxScroll;
      track.style.transform = `translateX(-${scrollPosition}px)`;
    });

    prevBtn.addEventListener("click", () => {
      scrollPosition -= cardWidth;
      if (scrollPosition < 0) scrollPosition = 0;
      track.style.transform = `translateX(-${scrollPosition}px)`;
    });

  }


  /* ================= PROCESS TABS ================= */

  const tabs = document.querySelectorAll(".tab");

  if (tabs.length > 0) {

    const processData = {
      raw: {
        title: "High-Grade Raw Material Selection",
        desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness.",
        points: [
          "PE100 grade material",
          "Optimal molecular weight distribution"
        ],
        img: "assets/hero1.jpg"
      },
      extrusion: {
        title: "Precision Extrusion Process",
        desc: "Advanced extrusion machinery shapes molten polymer into precise pipe dimensions.",
        points: [
          "Uniform wall thickness",
          "Automated monitoring systems"
        ],
        img: "assets/hero2.jpg"
      },
      cooling: {
        title: "Controlled Cooling",
        desc: "Cooling tanks stabilize pipe dimensions and prevent deformation.",
        points: [
          "Temperature controlled system",
          "High-speed production"
        ],
        img: "assets/hero3.jpg"
      }
    };

    tabs.forEach(tab => {

      tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const key = tab.dataset.tab;
        if (!processData[key]) return;

        document.getElementById("processTitle").textContent = processData[key].title;
        document.getElementById("processDesc").textContent = processData[key].desc;
        document.getElementById("processImg").src = processData[key].img;

        const list = document.getElementById("processPoints");
        list.innerHTML = "";

        processData[key].points.forEach(point => {
          const li = document.createElement("li");
          li.textContent = point;
          list.appendChild(li);
        });

      });

    });

  }


  /* ================= TESTIMONIAL AUTO SLIDER ================= */

  const testimonialTrack = document.querySelector(".testimonial-track");
  const testimonialCards = document.querySelectorAll(".testimonial-card");

  if (testimonialTrack && testimonialCards.length > 0) {

    const gap = 30;
    const cardWidth = testimonialCards[0].offsetWidth + gap;
    const visibleArea = document.querySelector(".testimonial-slider").offsetWidth;
    const maxScroll = testimonialTrack.scrollWidth - visibleArea;

    let scrollPosition = 0;

    setInterval(() => {

      scrollPosition += cardWidth;

      if (scrollPosition > maxScroll) {
        scrollPosition = 0;
      }

      testimonialTrack.style.transform = `translateX(-${scrollPosition}px)`;

    }, 4000);

  }


  /* ================= PRODUCT IMAGE CAROUSEL ================= */

  const images = [
    "assets/hero1.jpg",
    "assets/hero2.jpg",
    "assets/hero3.jpg",
    "assets/hero.jpg"
  ];

  let index = 0;

  const mainImage = document.getElementById("mainImage");
  const nextImageBtn = document.getElementById("nextBtn");
  const prevImageBtn = document.getElementById("prevBtn");

  if (mainImage && nextImageBtn && prevImageBtn) {

    nextImageBtn.addEventListener("click", () => {

      index++;

      if (index >= images.length) {
        index = 0;
      }

      mainImage.src = images[index];

    });

    prevImageBtn.addEventListener("click", () => {

      index--;

      if (index < 0) {
        index = images.length - 1;
      }

      mainImage.src = images[index];

    });

  }

});


/* ================= STICKY HEADER ================= */

window.addEventListener("scroll", function () {

  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  if (window.scrollY > 150) {

    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.left = "0";
    navbar.style.width = "100%";
    navbar.style.zIndex = "1000";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

  } else {

    navbar.style.position = "relative";
    navbar.style.boxShadow = "none";

  }

});