// ===============================
// Typing Effect
// ===============================
const titles = [
  "Computer Science Engineer",
  "Java Full Stack Developer",
  "WordPress Developer",
  "Software Developer"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const titleElement = document.getElementById("typing-text");

function typeEffect() {
  if (!titleElement) return;

  const currentTitle = titles[titleIndex];

  if (isDeleting) {
    titleElement.textContent = currentTitle.substring(0, charIndex--);
  } else {
    titleElement.textContent = currentTitle.substring(0, charIndex++);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentTitle.length + 1) {
    isDeleting = true;
    speed = 1500;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
  }

  setTimeout(typeEffect, speed);
}

// ===============================
// Smooth Scrolling
// ===============================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===============================
// Scroll Reveal Animation
// ===============================
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// ===============================
// Active Navigation Highlight
// ===============================
window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===============================
// Back to Top Button
// ===============================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (!backToTop) return;

  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===============================
// Contact Form Validation
// ===============================
function validateForm() {
  alert("Thank you! Your message has been sent successfully.");
  return false;
}

// ===============================
// Start Typing Effect
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
});

/* ================= PARTICLE BACKGROUND ================= */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: ["#4f46e5", "#7c3aed", "#06b6d4", "#ffffff"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.6,
      random: true
    },
    size: {
      value: 4,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#67e8f9",
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 180,
        line_linked: {
          opacity: 0.8
        }
      },
      push: {
        particles_nb: 6
      }
    }
  },
  retina_detect: true
});
// emailjs.init({
//   publicKey: "3V9loDzSU_RhWTwOI",
// });

// const contactForm = document.getElementById("contact-form");
// const formStatus = document.getElementById("form-status");

// if (contactForm) {
//   contactForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     formStatus.textContent = "Sending message...";

//     emailjs
//       .sendForm(
//         "service_73s",
//         "template_3shsxpr",
//         contactForm
//       )
//       .then(
//         function () {
//           formStatus.textContent = "Message sent successfully!";
//           contactForm.reset();
//         },
//         function (error) {
//           console.error("EmailJS error:", error);
//           formStatus.textContent =
//             "Message failed. Please try again later.";
//         }
//       );
//   });
// }
