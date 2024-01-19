function showContent(event, sectionId) {
  event.preventDefault();

  // Hide all content sections
  var contentSections = document.querySelectorAll(".content-section");
  contentSections.forEach(function (section) {
    section.classList.remove("active");
  });

  // Show the selected content section
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add("active");

  // Remove 'active' class from all links
  var links = document.querySelectorAll("nav a");
  links.forEach(function (link) {
    link.classList.remove("active");
  });

  // Add 'active' class to the clicked link
  event.target.classList.add("active");
}

// for testimonials

var touchstartX = 0;
var touchendX = 0;
var currentIndex = 0;

function handleSwipe() {
  var minSwipeDistance = 50;

  if (touchendX < touchstartX - minSwipeDistance) {
    // Swipe left
    navigate(1);
  } else if (touchendX > touchstartX + minSwipeDistance) {
    // Swipe right
    navigate(-1);
  }
}

function navigate(direction) {
  var links = document.querySelectorAll(".testimonials nav a"); // Move links inside navigate function
  var currentIndex = Array.from(links).findIndex((link) =>
    link.classList.contains("actives")
  );
  var nextIndex = (currentIndex + direction + links.length) % links.length;

  links[nextIndex].click();
}

function handleTouchStart(event) {
  touchstartX = event.changedTouches[0].screenX;
}

function handleTouchEnd(event) {
  touchendX = event.changedTouches[0].screenX;
  handleSwipe();
}

function showTestimonials(event, sectionId) {
  event.preventDefault();

  // Hide all content sections
  var contentSections = document.querySelectorAll(".testify");
  contentSections.forEach(function (section) {
    section.classList.remove("actives");
  });

  // Show the selected content section
  var selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add("actives");

  // Remove 'active' class from all links
  var links = document.querySelectorAll(".testimonials nav a");
  links.forEach(function (link) {
    link.classList.remove("actives");
  });

  // Add 'active' class to the clicked link
  event.target.classList.add("actives");
}

// Check if it's a mobile device (viewport width less than 600 pixels)
if (window.innerWidth > 600) {
  // Automatic cycling every 5 seconds
  var links = document.querySelectorAll(".testimonials nav a"); // Move links inside the mobile check
  setInterval(function () {
    // Trigger click event for the next link in order
    links[currentIndex].click();

    // Increment the index for the next iteration
    currentIndex = (currentIndex + 1) % links.length;
  }, 5000);
}

// Add event listeners for touch events
var content = document.querySelector(".testimonials");
content.addEventListener("touchstart", handleTouchStart, false);
content.addEventListener("touchend", handleTouchEnd, false);

// couting

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
const aboutSection = document.querySelector(".contacts");
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

// for nav bar clicking off and on
const menuInput = document.getElementById("menu"); // input
const mainUl = document.querySelector(".second_header nav .phone_hide"); // links holder
const navLink = mainUl.querySelectorAll("li a");

// Function to close the menu
const closeMenu = () => {
  mainUl.style.display = "none"; // Hide the main-ul
  menuInput.checked = false; // Uncheck the .menu input
  console.log("Close Menu function working");
};

// Function to handle the menu behavior for larger screens
const handleLargeScreens = () => {
  if (window.innerWidth >= 1000) {
    mainUl.style.display = "block"; // Show the main-ul
  } else {
    mainUl.style.display = menuInput.checked ? "block" : "none"; // Show if checked, hide if not
  }
};

// Initially handle the menu behavior for larger screens
handleLargeScreens();

// Add event listeners to the navigation links to close the menu
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 1000) {
      closeMenu();
    }
  });
});

// Add an event listener to the .menu input for toggling visibility
menuInput.addEventListener("change", () => {
  handleLargeScreens();
});

// Add an event listener to the window resize event for larger screens
window.addEventListener("resize", handleLargeScreens);

// numbers counting
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".numberz");
  const duration = 7000; // Set the total duration for counting in milliseconds
  const animationInterval = 10; // Set the interval for updating the count in milliseconds

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-count");
    const count = +counter.innerText;
    const steps = Math.ceil(duration / animationInterval);
    const inc = (target - count) / steps;

    let currentCount = count;
    let step = 0;

    const updateCount = () => {
      currentCount += inc;
      counter.innerText = Math.ceil(currentCount);

      if (++step < steps) {
        setTimeout(updateCount, animationInterval);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});

// date

$(function () {
  var datepickerInput = $("#datepicker-input");
  var datepicker = $("#datepicker");

  datepickerInput.datepicker({
    onSelect: function (date) {
      datepickerInput.val(date);
      datepicker.hide();
    },
  });

  datepickerInput.on("click", function () {
    datepicker.datepicker("show");
  });

  $(document).on("click", function (event) {
    if (
      !datepickerInput.is(event.target) &&
      !datepicker.is(event.target) &&
      datepicker.has(event.target).length === 0
    ) {
      datepicker.hide();
    }
  });
});

// my email js details
// email js

const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#information");

// get needed datafrom email JS

const publicKey = "WubvjL_oM6fI2e3yx";
const serviceID = "service_ss1fufl";
const templateID = "template_c8idzek";

// initialize email JS with public key
emailjs.init(publicKey);

// add submit event to the form

contactForm.addEventListener("submit", (e) => {
  // prevent form default behaviour
  e.preventDefault();

  // Change button text

  submitBtn.innerText = "Just A Moment...";

  // get all input field values

  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  /*send the email (adding service , template id and input fields)
   */

  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      // changing button text
      submitBtn.innerText = "Message Sent Successfully";

      // let clear all inputs
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";

      setTimeout(() => {
        submitBtn.innerText = "Send Message";
      }, 2000);
    },
    (error) => {
      // console erro
      console.log(error);
      // change button  text for error
      submitBtn.innerText = "Something went wrong";

      // addingclearn inputs after error
      // let clear all inputs
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";

      setTimeout(() => {
        submitBtn.innerText = "Send Again";
      }, 2000);

      // ends here
    }
  );
});

// validation

function validateForm() {
  var name = document.getElementById("user_name").value;
  var email = document.getElementById("user_email").value;

  if (name === "" || email === "") {
    alert("Name and email are required fields.");
    return false;
  }

  return true;
}


// form fonr contact
// $(function() {
//   $("#datepicker").datepicker();
//   $("#whatsapp-link").on("click", function(event) {
//       event.preventDefault();
//       submitForm();
//   });
// });

// function submitForm() {
//   var firstName = document.getElementById("firstname").value;
//   var lastName = document.getElementById("lastname").value;
//   var services = document.getElementById("services").value;
//   var date = document.getElementById("datepicker-input").value;
//   var message = document.getElementById("message").value;
//   var phone = document.getElementById("phone").value;
//   var time = document.getElementById("time").value;

//   var whatsappMessage = "Appointment Request:\n\n" +
//                         "Name: " + firstName + " " + lastName + "\n" +
//                         "Services: " + services + "\n" +
//                         "Date: " + date + "\n" +
//                         "Message: " + message + "\n" +
//                         "Phone: " + phone + "\n" +
//                         "Time: " + time;

//   var phoneNumber = "+260974286888";
//   var encodedMessage = encodeURIComponent(whatsappMessage);

//   // Replace the following line with your server-side script to handle the WhatsApp API
//   window.open("https://wa.me/" + phoneNumber + "?text=" + encodedMessage, '_blank').focus();
//   // This is just a placeholder and won't actually send the message
//   alert("WhatsApp message:\n\n" + whatsappMessage);
// }


function sendDetails(event, method) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get input values
  let firstName = document.getElementById("firstname").value.toUpperCase();
  let lastName = document.getElementById("lastname").value.toUpperCase();
  let services = document.querySelector(".services_app").value.toUpperCase();
  let date = document.getElementById("datepicker-input").value.toUpperCase();
  let message = document.getElementById("message").value.toUpperCase();
  let phone = document.getElementById("phone").value.toUpperCase();
  let time = document.querySelector(".time_appo").value.toUpperCase();

  // Basic validation
  if (!firstName || !lastName || !services || !date || !message || !phone || !time) {
    alert("Please fill in all required fields.");
    return false;
  }

  // Construct message
  let messageText =
    "DR.FIERO APPOINTMENT REQUEST" +
    "\n" +
    "Name: " + firstName + " " + lastName + "\n" +
    "Services: " + services + "\n" +
    "Date: " + date + "\n" +
    "Message: " + message + "\n" +
    "Phone: " + phone + "\n" +
    "Time: " + time;

  // Ask for confirmation
  if (confirm("Are the following details correct?\n\n " + messageText)) {
    // If user clicks "OK," then proceed to send via the chosen method
    if (method === 'whatsapp') {
      let whatsappNumber = "+260974286888";
      let whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(messageText);
      window.open(whatsappUrl, '_blank').focus();
    } else if (method === 'email') {
      let email = "fierotechnologies@gmail.com";
      let subject = "DR.FIERO APPOINTMENT REQUEST";
      let emailUrl = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(messageText);
      window.location.href = emailUrl;
    }

    // Reset form values
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.querySelector(".services_app").value = "";
    document.getElementById("datepicker-input").value = "";
    document.getElementById("message").value = "";
    document.getElementById("phone").value = "";
    document.querySelector(".time_appo").value = "";
  } else {
    // If user clicks "Cancel," do nothing or provide feedback
    alert("Operation canceled by the user.");
  }

  // Return false to prevent form submission
  return false;
}

