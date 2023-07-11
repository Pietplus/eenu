// Get the .container elements
const container = document.querySelectorAll('.container');

// Function to update the flex-basis property of the container
const updateContainerLayout = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth < 600) {
    containers.forEach(container => {
      container.style.flexBasis = '100%';
    });
  } else if (windowWidth >= 600 && windowWidth < 900) {
    containers.forEach(container => {
      container.style.flexBasis = '50%';
    });
  } else {
    containers.forEach(container => {
      container.style.flexBasis = '33.33%';
    });
  }
}

updateContainerLayout();

// Event listener to update the container layout whenever the window is resized
window.addEventListener('resize', updateContainerLayout);


// Get the elements whose font size needs to be adjusted
const elements = document.querySelectorAll('.adjust-font');

// Function to update the font size of the elements
const updateFontSize = () => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  // Calculate the desired font size based on the window height and width
  const fontSize = Math.min(windowHeight, windowWidth) * 0.02; // Adjust the factor (0.02) according to your preference

  // Apply the font size to each element
  elements.forEach(element => {
    element.style.fontSize = `${fontSize}px`;
  });
}

updateFontSize();

// Event listener to update the font size whenever the window is resized
window.addEventListener('resize', updateFontSize);


