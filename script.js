function downloadCV() {
    Swal.fire({
        title: "Download CV",
        text: "CV akan didownload sekarang!",
        icon: "success",
        confirmButtonText: "OK"
    }).then(() => {
        window.location.href = "c:\Users\LENOVO thinkpad\OneDrive\Documents\Nirmala_CV.pdf";
    });
}

document.querySelector('#contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Message Sent!',
        text: 'Your message has been successfully sent.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});


