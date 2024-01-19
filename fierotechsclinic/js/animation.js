// Animation for boxes

const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxesBoxes);
checkBoxesBoxes();

function checkBoxesBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("animate");
      console.log(window.innerHeight);
    } else {
      box.classList.remove("animate");
    }
  });
}

// Animation for services

const services = document.querySelectorAll(".ani_service");
window.addEventListener("scroll", checkBoxesServices);
checkBoxesServices();

function checkBoxesServices() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  services.forEach((service, index) => {
    const serviceTop = service.getBoundingClientRect().top;

    if (serviceTop < triggerBottom) {
      // Calculate the delay based on the index
      const delay = index * 100; // 2000 milliseconds (2 seconds) delay for each element

      setTimeout(() => {
        service.classList.add("animate_service");
      }, delay);
    } else {
      service.classList.remove("animate_service");
    }
  });
}

// for small boxes

const brahs = document.querySelectorAll(".brah");
window.addEventListener("scroll", checkBrahs);
checkBrahs();

function checkBrahs() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  brahs.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("animate_brah");
      console.log(window.innerHeight);
    } else {
      box.classList.remove("animate_brah");
    }
  });
}

// jQuery to observe the closing and opening of the menu

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("header").css("display", "flex");
    // $("header").css("opacity", "1");
    $("header").css("flex-direction", "column");
  } else {

    $("header").css("display", "none");
    // $("header").css("opacity", "0");
  }
  prevScrollpos = currentScrollPos;
};

