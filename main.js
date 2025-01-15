const navIcon = document.querySelector(".nav i");
navIcon.addEventListener("click", () => {
  navIcon.classList.toggle("open-nav");
});
const landing = document.querySelector(".landing");
let images = ["01.jpg", "07.jpg", "03.jpg", "04.jpg", "05.jpg"];
let interval = setInterval(() => {
  let randomImage = images[Math.floor(Math.random() * images.length)];
  landing.style.backgroundImage = `url("../imgs/${randomImage}")`;
}, 10000);
const colorSpans = Array.from(
  document.querySelectorAll(".options .color span")
);
colorSpans.forEach((x) => {
  x.addEventListener("click", () => {
    document.documentElement.style.setProperty("--mainColor", x.dataset.color);
    localStorage.setItem("color", x.dataset.color);
    colorSpans.forEach((x) => {
      x.classList.remove("active");
    });
    x.classList.add("active");
  });
});
const btnsSpan = Array.from(
  document.querySelectorAll(".change-background .btns span")
);
btnsSpan.forEach((x) => {
  x.addEventListener("click", () => {
    localStorage.setItem("background", x.textContent);
    btnsSpan.forEach((x) => {
      x.classList.remove("active");
    });
    x.classList.add("active");
    if (x.textContent === "No") {
      clearInterval(interval);
    }
    if (x.textContent === "Yes") {
      interval = setInterval(() => {
        let randomImage = images[Math.floor(Math.random() * images.length)];
        landing.style.backgroundImage = `url("../imgs/${randomImage}")`;
      }, 10000);
    }
  });
});
const showBulletsSpan = Array.from(
  document.querySelectorAll(".show-bullets .btns span")
);
showBulletsSpan.forEach((x) => {
  x.addEventListener("click", () => {
    localStorage.setItem("showBullets", x.textContent);
    if (x.textContent === "No") {
      document.querySelector(".bullets").style.display = "none";
    }
    if (x.textContent === "Yes") {
      document.querySelector(".bullets").style.display = "block";
    }
    showBulletsSpan.forEach((x) => {
      x.classList.remove("active");
    });
    x.classList.add("active");
  });
});
window.addEventListener("load", () => {
  if (localStorage.getItem("color")) {
    document.documentElement.style.setProperty(
      "--mainColor",
      localStorage.getItem("color")
    );
    colorSpans.forEach((x) => {
      x.classList.remove("active");
      if (x.dataset.color === localStorage.getItem("color")) {
        x.classList.add("active");
      }
    });
  }
  if (localStorage.getItem("background")) {
    btnsSpan.forEach((x) => {
      x.classList.remove("active");
      if (x.textContent === localStorage.getItem("background")) {
        x.classList.add("active");
      }
    });
    if (localStorage.getItem("background") === "No") {
      clearInterval(interval);
    }
    if (localStorage.getItem("background") === "Yes") {
      interval = setInterval(() => {
        let randomImage = images[Math.floor(Math.random() * images.length)];
        landing.style.backgroundImage = `url("../imgs/${randomImage}")`;
      }, 10000);
    }
  }
  if (localStorage.getItem("showBullets")) {
    showBulletsSpan.forEach((x) => {
      x.classList.remove("active");
      if (x.textContent === localStorage.getItem("showBullets")) {
        x.classList.add("active");
      }
    });
    if (localStorage.getItem("showBullets") === "No") {
      document.querySelector(".bullets").style.display = "none";
    }
    if (localStorage.getItem("showBullets") === "Yes") {
      document.querySelector(".bullets").style.display = "block";
    }
  }
});
const restBtn = document.querySelector(".options button");
restBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
const optionsIcon = document.querySelector(".options .icon");
optionsIcon.addEventListener("click", () => {
  document.querySelector(".options").classList.toggle("open");
  document.querySelector(".options .icon i").classList.toggle("fa-spin");
});
const skillsSection = document.querySelector(".our-skills");
const skillsSpan = Array.from(
  document.querySelectorAll(".our-skills .skill span")
);
window.addEventListener("scroll", () => {
  if (window.scrollY >= skillsSection.offsetTop - 300) {
    skillsSpan.forEach((x) => {
      x.style.width = x.dataset.progress;
    });
  }
});
const imgCards = Array.from(
  document.querySelectorAll(".gallery .container .card")
);
const imgPopUp = document.querySelector(".img-popUp");
const imgSrc = document.querySelector(".img-popUp > div img");
imgCards.forEach((x) => {
  x.addEventListener("click", () => {
    imgPopUp.style.display = "block";
    imgSrc.src = x.children[0].src;
  });
});
imgPopUp.addEventListener("click", () => {
  imgPopUp.style.display = "none";
});
