const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

// get needed datafrom email JS

//    const publicKey = "WubvjL_oM6fI2e3yx";
//     const serviceID =  "service_p3xk076";
//     const templateID = "template_r8eigx6"; 

const publicKey = "WubvjL_oM6fI2e3yx";
const serviceID = "service_ss1fufl";
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
                submitBtn.innerText = "Send Message";
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


