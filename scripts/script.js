// script for menu button

function rotateLabel() {
    const label = document.querySelector('.menu-label');
    label.classList.toggle('active');
}

// scrolling effects

const links = document.querySelectorAll('ul a');
const sections = document.querySelectorAll('section');
const headerHeight = 120; // Adjust this value according to your header height

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + headerHeight; // Add the header height to the scroll position

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

       if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            links.forEach((link, i) => {
                link.style.borderBottom = '2px solid transparent';
                link.style.backgroundColor = 'transparent'; // Reset background color
        
                link.addEventListener('mouseover', () => {
                    // Remove the border-bottom from the currently highlighted section
                    links[index].style.borderBottom = '2px solid transparent';
                    links[index].style.backgroundColor = 'transparent';
        
                    // Add the border-bottom to the section you're hovering over
                    link.style.borderBottom = '2px solid hsl(260, 100%, 51%)';
                    link.style.backgroundColor = '#insert';
                    
                    // Update the index to the one you're hovering over
                    index = i;
                });
            });
        
            links[index].style.borderBottom = '2px solid hsl(260, 100%, 51%)';
            links[index].style.backgroundColor = '#insert'; // Set the background color for the initial section
        }
  

        
    });
});


// scrolling to the respective section 

document.querySelectorAll('ul a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetClass = this.getAttribute('href').substring(1); // Get the target class name
        const targetSection = document.querySelector('.' + targetClass);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 50; // Subtract 50px for the header
            window.scroll({
                top: offsetTop,
                behavior: 'smooth' // Add smooth scrolling behavior
            });
        }
    });
});



// closing this link-container


//for nav bar clicking of and on
const menuInput = document.getElementById('menu-bar'); //input
const mainUl = document.querySelector('.link-container'); //nav holder
const navLink = mainUl.querySelectorAll('li a');

// Function to close the menu
function closeMenu() {
mainUl.style.display = 'none'; // Hide the main-ul
menuInput.checked = false;     // Uncheck the .menu input
}

// Function to handle the menu behavior for larger screens
function handleLargeScreens() {
if (window.innerWidth >= 650) {
    mainUl.style.display = 'flex';  // Show the main-ul
} else {
    mainUl.style.display = menuInput.checked ? 'block' : 'none'; // Show if checked, hide if not
}
}

// Initially handle the menu behavior for larger screens
handleLargeScreens();

// Add event listeners to the navigation links to close the menu
navLink.forEach(link => {
link.addEventListener('click', () => {
    if (window.innerWidth < 650) {
    closeMenu();

    const label = document.querySelector('.menu-label');
    // label.classList.toggle('active');
    
    // Add this code to remove the .active class when a link is clicked

        label.classList.remove('active');
    
    }
});
});

// Add an event listener to the .menu input for toggling visibility
menuInput.addEventListener('change', () => {
handleLargeScreens();
});

// Add an event listener to the window resize event for larger screens
window.addEventListener('resize', handleLargeScreens);


// email js 

const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput =document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

// get needed datafrom email JS

const publicKey = "WubvjL_oM6fI2e3yx";
const serviceID =  "service_ss1fufl";
const templateID = "template_c8idzek";

// initialize email JS with public key
emailjs.init(publicKey);


// add submit event to the form

contactForm.addEventListener("submit", e => {
    // prevent form default behaviour
    e.preventDefault();

    // Change button text

    submitBtn.innerText = "Just A Moment...";

    // get all input field values

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }

    /*send the email (adding service , template id and input fields)
    */ 

    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
        // changing button text
        submitBtn.innerText = "Message Sent Successfully";
        
        // let clear all inputs 
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        setTimeout(() => {
            submitBtn.innerText = "Send";
        }, 2000);

    }, (error) => {
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
    });
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
