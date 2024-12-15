$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });


function submit(name,email,message) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate input (optional)
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Construct the mailto link
    const subject = encodeURIComponent("Contact Form Submission from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
    const mailtoLink = `mailto:millecious2024@gmail.com?subject=${subject}&body=${body}`;

    // Open the default mail client
    window.location.href = mailtoLink;

    // Optionally reset the form
    document.getElementById("contact-form").reset();
});
