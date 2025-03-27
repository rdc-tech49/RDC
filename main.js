//small screen menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("side-menu");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "fas fa-times" : "fas fa-bars");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
//end of small screen menu

// typed js
const typed = new Typed('.multiple-text', {
  strings: ['Sub Inspector of Police (Technical)','Electronics and Communication Engineer','Full Stack Developer','Template Designer'],
  typeSpeed:70,
  backSpeed:50,
  backDelay:1000,
  loop:true,
});
//end of typed js

// image slideshow
let slideIndex = 1;
showSlides(slideIndex);
// Function to change slides (prev/next)
function changeSlide(n) {
  showSlides(slideIndex += n);
}
// Function to show the current slide based on index
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Auto slide (Optional: Uncomment to enable automatic slideshow)
 setInterval(() => { changeSlide(1); }, 3000);
// end of image slideshow


// contact google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzsTqnGCtMNxxdtUUSNEYxUFHfvD_BNjSEaIVHFmgelo5DNPWwvYSD49Mo3XXLwWISQAA/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")    
    const loadingScreen = document.getElementById("loading-screen"); // Reference to the loading screen  
    form.addEventListener('submit', e => {
      e.preventDefault()
// Show the loading screen
loadingScreen.style.display = "flex";
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          // Hide loading screen
            loadingScreen.style.display = "none";
          msg.innerHTML = "Message sent successfully"
          setTimeout(function(){
            msg.innerHTML=""
          },5000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
//end of google sheets



///scroll animation
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  // hero section 
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-h4",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
      markers: false, // Set true for debugging
    },
  });
  // Sequential animations with reduced delay
  tl.from(".hero-h4", { y: 100, opacity: 0, duration: 0.8, ease: "power2.out" })
    .from(".hero-h1", { y: 100, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5") // Start 0.5s before previous animation ends
    .from(".hero-h3", { y: 100, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
    .from(".hero-social-icons a i", { 
      y: 50, 
      opacity: 0, 
      duration: 0.6, 
      ease: "power2.out", 
      stagger: 0.2 // Animates each icon one by one
    }, "-=0.3"); // Icons start slightly before hero-h3 finishes

  // about section 
  let t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro-container",
      start: "top 60%",
      end: "bottom 30%",
      toggleActions: "play reverse play reverse",
      markers: false, // Set true for debugging
    },
  });
  // Sequential animations with reduced delay
  t2.from(".intro-image", { x: -500, opacity: 0, duration: 1.5, ease: "power2.out" })
    .from(".intro-content .section-header", { y: 100, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=1") // Start 0.5s before previous animation ends
    .from(".intro-content h2", { y: 100, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
    .from(".intro-description", { y: 100, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
    .from(".intro-grid", { y: 100, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
    .from(".my-interest", { y: 100, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
    .from(".interest-flex p ", { 
      y: 50, 
      opacity: 0, 
      duration: 0.6, 
      ease: "power2.out", 
      stagger: 0.2 // Animates each icon one by one
    }, "-=0.3"); // Icons start slightly before hero-h3 finishes

  // skills section 
  let t6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".skill-container",
      start: "top 60%",
      end: "bottom 30%",
      toggleActions: "play reverse play reverse",
      markers: false, // Set true for debugging
    },
  });
  // Sequential animations with reduced delay
  t6.from(".skill-container .section-header", { x: -500, opacity: 0, duration: 1.5, ease: "power2.out" })
    .from(".skill-container .section-subheader", { y: 100, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=1"); // Start 0.5s before previous animation ends
  gsap.to(".skills-logo", {
      opacity: 1,
      scale: 1,
      duration: 2,
      stagger: 0.2, // Delay between each icon
      ease: "elastic.out(1, 0.5)", // Bounce effect
      scrollTrigger: {
          trigger: ".skill-container", // Starts animation when skills section is in view
          start: "top 50%", // Triggers when the section enters 80% of the viewport
          end: "bottom 30%", // Animation resets when scrolled past 20%
          toggleActions: "play reverse play reverse", // Plays when entering, reverses when leaving
          markers: false, // Set true for debugging
      }
  });
  // Hover Effect (Optional)
  document.querySelectorAll(".skills-logo").forEach(icon => {
      icon.addEventListener("mouseenter", () => {
          gsap.to(icon, { scale: 1.3, duration: 0.2 });
      });

      icon.addEventListener("mouseleave", () => {
          gsap.to(icon, { scale: 1, duration: 0.2 });
      });
  });

  // resume section 
let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".resume-container",
    start: "top 60%",
    end: "bottom 10%",
    toggleActions: "play reverse play reverse",
    markers: false, // Set true for debugging
  },
});
// Sequential animations with reduced delay
t3.from(".resume-container p:nth-of-type(1)", { y: 100, opacity: 0, duration: 0.8, ease: "power2.out" })
  .from(".resumess1", { y: 100, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5") // Start 0.5s before previous animation ends
  .from(".ji1 .journey-grid-header", { x: -100, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5")
  .from(".ji1 .journey-card", { 
    x: -100, 
    opacity: 0, 
    duration: 1, 
    ease: "power2.out", 
    stagger: 0.2 // Animates each icon one by one
  }, "-=0.3") // Icons start slightly before hero-h3 finishes
  .from(".ji2 .journey-grid-header", { x: 1000, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
  .from(".ji2 .journey-card", { 
    x: 1000, 
    opacity: 0, 
    duration: 0.8, 
    ease: "power2.out", 
    stagger: 0.2 // Animates each icon one by one
  }, "-=0.3") // Icons start slightly before hero-h3 finishes
  .from(".download-btn", { y: 100, opacity: 0, duration: 1, ease: "power2.out" });
  
  let t7 = gsap.timeline({
    scrollTrigger: {
      trigger: ".slideshow-container",
      start: "top 80%",
      end: "bottom 30%",
      toggleActions: "play reverse play reverse",
      markers: false, // Set true for debugging
    },
  });
  t7.from(".resumess2", { y: 100, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5")
  .from(".slideshow-container", { y: 100, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5")
  .from(".slideshow-dot", { y: 100, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5");

  // project  section 
let t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services-container ",
    start: "top 60%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
    markers: false, // Set true for debugging
  },
});
// Sequential animations with reduced delay
t4.from(".services-container .section-header", { y: 100, opacity: 0, duration: 0.8, ease: "power2.out" })
  .from(".services-container .section-subheader", { y: 100, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5") // Start 0.5s before previous animation ends
  .from(".work-list .work", { 
    y: 100, 
    opacity: 0, 
    duration: 1, 
    ease: "power2.out", 
    stagger: 0.2 // Animates each icon one by one
  }, "-=0.3");

  // contact  section 
let t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-container ",
    start: "top 60%",
    end: "bottom 48%",
    toggleActions: "play reverse play reverse",
    markers: false, // Set true for debugging
  },
});
// Sequential animations with reduced delay
t5.from(".contact-container .section-header", { y: 100, opacity: 0, duration: 1, ease: "power2.out" })
  .from(".contact-container .section-subheader", { y: 100, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5") // Start 0.5s before previous animation ends
  .from(".contact-content-left .info-item", { 
    x: -200, 
    opacity: 0, 
    duration: 1, 
    ease: "power2.out", 
    stagger: 0.2 // Animates each icon one by one
  }, "-=0.3")
  .from(".contact-social-icons a i", { 
    x: -200, 
    opacity: 0, 
    duration: 1, 
    ease: "power2.out", 
    stagger: 0.2 // Animates each icon one by one
  }, "-=0.3")
  .from(".cont-btn", { x: -200, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5") 
  .from(".contact-content-right form div", { 
    x: 1000, 
    opacity: 0, 
    duration: 2, 
    ease: "power2.out", 
    stagger: 0.2 // Animates each icon one by one
  }, "-=1");
});

