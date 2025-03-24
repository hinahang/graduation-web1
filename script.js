document.addEventListener("DOMContentLoaded", function () {
    const envelop = document.getElementById("envelop");

    envelop.addEventListener("click", function () {
        envelop.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
        envelop.style.opacity = "0";
        envelop.style.transform = "translateY(-30px)";

        setTimeout(() => {
            window.location.href = "Main.html";
        }, 1500);
    });
});
