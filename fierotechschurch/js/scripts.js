const homeElement = document.querySelector(".home");
const h2Element = document.querySelector(".home_content h2");
const onesElement = document.querySelector(".home .ones");
const twosElement = document.querySelector(".home .twos");

const images = ["../images/home_img.jpg", "../images/home_image.jpg"];

const texts = [
  "We love <span id='special'>God</span> we believe in God",
  "Following <span id='special'>Jesus</span> wherever we are",
];

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  homeElement.style.backgroundImage = `url(${images[currentIndex]})`;
  h2Element.innerHTML = texts[currentIndex];

  // Toggle background-color for .ones and .twos
  if (currentIndex === 0) {
    onesElement.style.backgroundColor = "var(--primary-color)";
    twosElement.style.backgroundColor = "";
  } else {
    onesElement.style.backgroundColor = "";
    twosElement.style.backgroundColor = "var(--primary-color)";
  }
}, 5000);


// changing the background color of the nav-setion when home section is done

const homeSection = document.querySelector(".home"); //grab the home section
const navSection = document.querySelector(".nav-section"); // grab the nav bar
const navLinks = document.querySelectorAll(".nav-links li a"); //grab the navLinks
const navliks = document.querySelectorAll(
  "header nav .nav-links .tablet-hide li a"
);
const companyName = document.querySelector("header nav h1"); //grab the main title

window.addEventListener("scroll", () => {
  if (homeSection.getBoundingClientRect().bottom <= 30) {
    navSection.style.backgroundColor = "#f8f8f8";
    navLinks.forEach((link) => (link.style.color = "#212529"));
    companyName.style.color = "#707070";
  } else {
    navSection.style.backgroundColor = "transparent";
    navLinks.forEach((link) => (link.style.color = "#ffd615"));

    companyName.style.color = "#ffd615";
    navLinks.forEach((link) => (link.style.fontWeight = "normal"));
  }
});

// numbers counting

// Function to start the counting effect
function startCounting(element) {
  const targetNumber = parseInt(element.getAttribute("data-count"));
  let currentNumber = 0;
  const duration = 10000; // Increase the duration to slow down the counting
  const step = (targetNumber / duration) * 10;

  function updateCount() {
    if (currentNumber < targetNumber) {
      currentNumber += step;
      if (currentNumber > targetNumber) {
        currentNumber = targetNumber;
      }

      // Format the number with commas and append 'k'
      element.textContent = Math.round(currentNumber).toLocaleString();

      requestAnimationFrame(updateCount);
    }
  }

  updateCount();
}

// Intersection Observer to trigger counting effect
const aboutSection = document.querySelector(".about");
const numbersElements = aboutSection.querySelectorAll(".numbers");

// start counting again if the section is out of view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      numbersElements.forEach((element) => {
        startCounting(element);
      });
      observer.unobserve(aboutSection); // Stop observing once started
    }
  });
});

observer.observe(aboutSection);

//

// counting for the dotation part

// JavaScript
// JavaScript
const amountElement = document.getElementById("amount");
const targetCount = parseInt(amountElement.getAttribute("data-counts"), 10);

let currentCount = 0;

// Function to update the count
function updateCount() {
  if (currentCount < targetCount) {
    currentCount += 1;

    // Format the number with commas and append 'k'
    amountElement.textContent = "k" + currentCount.toLocaleString();

    // Call the function again after a delay to create a counting effect
    setTimeout(updateCount, 10);
  }
}

// Call the function to start the counting process
updateCount();

//opening video in a new window without leacving gthe current window

function openVideo(videoLink) {
  window.open(videoLink, "VideoPlayer", "height=400,width=400");
  return false; // Prevents the default behavior of the link
}

//  adding the border bottom of the current page

const links = document.querySelectorAll(".nav-section ul a");
const sections = document.querySelectorAll("section");
const headerHeight = 60; // Adjust this value according to your header height

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + headerHeight; // Add the header height to the scroll position

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      links.forEach((link, i) => {
        // Check if the width is 815px or above
        if ((link.offsetWidth = 815)) {
          link.style.borderBottom = "2px solid transparent";
          link.style.backgroundColor = "transparent"; // Reset background color

          link.addEventListener("mouseover", () => {
            // Reset styles for all links
            links.forEach((resetLink) => {
              resetLink.style.borderBottom = "2px solid transparent";
              resetLink.style.backgroundColor = "transparent";
            });

            // Apply styles for the hovered link
            link.style.borderBottom = "2px solid transparent";
            link.style.backgroundColor = "#insert";

            // Update the index to the one you're hovering over
            index = i;
          });
        } else {
          // Reset styles for links with width below 815px
          link.style.borderBottom = "none";
          link.style.backgroundColor = "transparent";
        }
      });

      // Apply styles for the currently active link
      links[index].style.borderBottom = "2px solid #ffd615";
      links[index].style.color = "#ffd615";
      links[index].style.padding = "10px 15px";
      links[index].style.backgroundColor = "#insert";
    }
  });
});

// for nav bar clicking off and on
const menuInput = document.getElementById("check"); // input
const mainUl = document.querySelector(".nav-links"); // nav holder
const navLink = mainUl.querySelectorAll(".nav-links li a");

// Function to close the menu
function closeMenu() {
  menuInput.checked = false; // Uncheck the .menu input
}

// Function to handle the menu behavior for larger screens
function handleLargeScreens() {
  if (window.innerWidth <= 815) {
    mainUl.style.display = "flex"; // Show the main-ul
  }
}

// Initially handle the menu behavior for larger screens
handleLargeScreens();

// Add event listeners to the navigation links to close the menu
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 815) {
      closeMenu();

      const label = document.querySelector(".checked");
      label.classList.remove("active");
    }
  });
});

// adding animation

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 500;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("slids");
      // sec.classList.add("animate");
    } else {
      sec.classList.remove("slids");
      // sec.classList.remove("animate")
    }
  });
};




// animate home 


document.addEventListener("DOMContentLoaded", function() {
  var homeContent = document.querySelector('.home_content');

  // Set initial position and opacity
  homeContent.style.transform = 'translateY(0)';
  homeContent.style.opacity = 1;

  // You can use a timeout to delay the animation if needed
  setTimeout(function() {
      homeContent.style.transform = 'translateY(0)';
      homeContent.style.opacity = 1;
  }, 100);

});

// ti animate


// document.addEventListener("DOMContentLoaded", function() {
//   var ti = document.querySelector('.ti');
//   var tiPosition = ti.getBoundingClientRect().top;

//   function handleScroll() {
//       var scrollPosition = window.scrollY;

//       if (scrollPosition >= tiPosition) {
//           ti.style.opacity = 1;
//           ti.style.transform = 'translateY(0)';
//       } else {
//           ti.style.opacity = 0;
//           ti.style.transform = 'translateY(100%)';
//       }
//   }

//   // Listen for the scroll event
//   window.addEventListener('scroll', handleScroll);

//   // Call handleScroll once to set initial state
//   handleScroll();
// });