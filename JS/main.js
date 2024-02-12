
// function submitForm() {
//     // Retrieve form data
//     var formData = new FormData(document.getElementById("contactForm"));

//     // Perform form validation (optional)
//     if (!validateForm()) {
//         return; // Exit function if form validation fails
//     }

//     // Send form data asynchronously using fetch API
//     fetch("submit_form.php", {
//         method: "POST",
//         body: formData
//     })
//     .then(response => {
//         if (response.ok) {
//             // Show success message using SweetAlert
//             Swal.fire({
//                 title: "Success!",
//                 text: "Your message has been submitted successfully.",
//                 icon: "success",
//                 timer: 2000, // Close the alert after 2 seconds
//                 timerProgressBar: true, // Display timer progress bar
//                 showConfirmButton: false // Hide "OK" button
//             });

//             // Clear form fields after successful submission
//             document.getElementById("contactForm").reset();
//         } else {
//             throw new Error("Network response was not ok");
//         }
//     })
//     .catch(error => {
//         console.error("There was a problem with your fetch operation:", error);
//     });
// }

// function validateForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;

//     // Your validation logic here
//     // Example: Check if fields are not empty

//     if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
//         // Show error message using SweetAlert
//         Swal.fire({
//             title: "Error!",
//             text: "Please fill out all fields.",
//             icon: "error"
//         });
//         return false; // Validation failed
//     }

//     return true; // Validation passed
// }
// // Function to validate email format
// function validateEmail(email) {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }
// practice