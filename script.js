document.addEventListener("DOMContentLoaded", function () {
    const details = document.querySelectorAll("details");

    details.forEach((detail) => {
        detail.addEventListener("toggle", function () {
            if (this.open) {
                details.forEach((other) => {
                    if (other !== this) {
                        other.removeAttribute("open");
                    }
                });
            }
        });
    });
});
