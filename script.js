// List of animations (basic + custom)
const animationList = [
    { name: "Bounce", class: "animate__bounce", code: "animate__bounce" },
    { name: "Zoom In", class: "animate__zoomIn", code: "animate__zoomIn" },
    { name: "Fade In", class: "animate__fadeIn", code: "animate__fadeIn" },
    { name: "Rotate 3D", class: "rotate3D", code: "rotate3D" },
    { name: "Morph Circle", class: "morphCircle", code: "morphCircle" },
    { name: "Fade & Scale", class: "fadeAndScale", code: "fadeAndScale" },
  ];
  
  // Populate animation buttons
  const animationListDiv = document.getElementById("animation-list");
  animationList.forEach((animation) => {
    const button = document.createElement("button");
    button.textContent = animation.name;
  
    // Button functionality
    button.addEventListener("click", () =>
      applyAnimation(animation.class, animation.code)
    );
  
    animationListDiv.appendChild(button);
  });
  
  // Apply animation to the preview box
  function applyAnimation(animationClass, animationCode) {
    const previewBox = document.querySelector(".preview-box");
    previewBox.className = "preview-box"; // Reset classes
    previewBox.classList.add("animate__animated", animationClass);
  
    // Update explanation text
    const explanation = document.getElementById("animation-description");
    explanation.textContent = `To use this animation, add the class "${animationCode}" to the element in your HTML. For example: <div class="${animationCode}">Your Content</div>.`;
  }
  