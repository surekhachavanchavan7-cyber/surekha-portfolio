// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form from refreshing

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    // Check if fields are empty
    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    // Check if email is valid
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    // Success message
    alert("✅ Thank you, your message has been sent!");
    form.reset(); // Clear the form
  });
});
