//////////// NAVBAR ////////////

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


//////////// AVIS ////////////

const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("hidden", i !== index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-gold", i === index);
    dot.classList.toggle("bg-gray-400", i !== index);
  });
}

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

showSlide(currentIndex);

//////////// FAQ ////////////

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".faq-icon");

  question.addEventListener("click", () => {
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

    faqItems.forEach((other) => {
      const otherAnswer = other.querySelector(".faq-answer");
      const otherIcon = other.querySelector(".faq-icon");
      otherAnswer.style.maxHeight = "0";
      otherIcon.textContent = "+";
    });

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "−";
    } else {
      answer.style.maxHeight = "0";
      icon.textContent = "+";
    }
  });
});

