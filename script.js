// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.hash && this.hash.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Simple sign-up form action
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("✅ Form submitted successfully! (This is demo only)");
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const cells = document.querySelectorAll('.hex-cell');
  setInterval(() => {
    cells.forEach(cell => {
      if (Math.random() > 0.6) {
        cell.classList.toggle('active');
      }
    });
  }, 1000);
});
