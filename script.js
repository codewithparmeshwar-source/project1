let name = prompt("Enter your name:");
if (name) {
    alert("Hello " + name + ", welcome to our Parmeshwar's Coding Platform.");
} else {
    alert("Welcome!")
}

const toggle = document.getElementById("themeToggle");
const body = document.body;

// load saved theme
const saved = localStorage.getItem("data-theme");
if (saved) {
    body.setAttribute("data-theme", saved);
    toggle.value = saved;
}

// change theme
toggle.addEventListener("change", function () {
    const theme = this.value;

    body.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
});
