const animationList = [
    { name: "Bounce", class: "animate__bounce", code: "animate__bounce" },
    { name: "Zoom In", class: "animate__zoomIn", code: "animate__zoomIn" },
    { name: "Fade In", class: "animate__fadeIn", code: "animate__fadeIn" },
    { name: "Rotate 3D", class: "rotate3D", code: "rotate3D" },
    { name: "Morph Circle", class: "morphCircle", code: "morphCircle" },
    { name: "Fade & Scale", class: "fadeAndScale", code: "fadeAndScale" },
    { name: "Swing", class: "swing", code: "swing" },
    { name: "Flip Card", class: "flipCard", code: "flipCard" },
    { name: "Bounce In & Out", class: "bounceInOut", code: "bounceInOut" },
    { name: "Glow Effect", class: "glow", code: "glow" },
    { name: "Slide & Fade", class: "slideFadeIn", code: "slideFadeIn" },
    { name: "Heartbeat", class: "heartbeat", code: "heartbeat" },
    { name: "Spiral Rotate", class: "spiralRotate", code: "spiralRotate" },
    { name: "Shake", class: "shake", code: "shake" },
    { name: "Ripple Effect", class: "ripple", code: "ripple" },
    { name: "Zoom Bounce", class: "zoomBounce", code: "zoomBounce" }
];

// Populate animation buttons
const animationListDiv = document.getElementById("animation-list");
animationList.forEach((animation) => {
    const button = document.createElement("button");
    button.textContent = animation.name;
    button.setAttribute('aria-label', `Apply ${animation.name} animation`);

    button.addEventListener("click", (event) => applyAnimation(animation.class, animation.code, event));

    animationListDiv.appendChild(button);
});

// Apply animation to the preview box
function applyAnimation(animationClass, animationCode, event) {
    const previewBox = document.querySelector(".preview-box");
    const buttons = document.querySelectorAll("#animation-list button");

    // Remove existing animation classes except custom ones
    previewBox.className = "preview-box";

    // Remove active class from all buttons
    buttons.forEach(button => button.classList.remove('active'));

    // Add the selected animation class
    previewBox.classList.add(animationClass);

    // Add animate__animated class if using Animate.css
    if (animationClass.startsWith("animate__")) {
        previewBox.classList.add("animate__animated");
    }

    // Add active class to the clicked button
    event.currentTarget.classList.add('active');

    // Update the description text for clarity
    const explanation = document.getElementById("animation-description");
    if (explanation) {
        explanation.textContent = `To use this animation, add the class "${animationClass}" to your element.`;
    }
}