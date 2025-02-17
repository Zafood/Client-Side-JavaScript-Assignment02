document.addEventListener("DOMContentLoaded", function () {
  // Constants for query selectors
  const colorInput = document.getElementById("customNumber");
  const customColorButton = document.querySelector(".custColor");
  const randomColorButton = document.querySelector(".randColor");
  const studentID = document.getElementById("myStudentId");
  const selectList = document.getElementById("imageSelect");
  const imageElement = document.getElementById("images");

  // Image array
  const imageArray = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
  ];

  // Function to change bg color from user input and add student id
  function changeCustomColor() {
    const colorInputValue = parseInt(colorInput.value);
    studentID.textContent = `${studentID.textContent}`;

    if (colorInputValue < 0 || colorInputValue > 100) {
      document.body.style.backgroundColor = "red";
    } else if (colorInputValue >= 0 && colorInputValue < 20) {
      document.body.style.backgroundColor = "green";
    } else if (colorInputValue >= 20 && colorInputValue < 40) {
      document.body.style.backgroundColor = "blue";
    } else if (colorInputValue >= 40 && colorInputValue < 60) {
      document.body.style.backgroundColor = "orange";
    } else if (colorInputValue >= 60 && colorInputValue < 80) {
      document.body.style.backgroundColor = "purple";
    } else if (colorInputValue >= 80 && colorInputValue <= 100) {
      document.body.style.backgroundColor = "yellow";
    }
  }

  // Function to change bg color from random number
  function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 101);

    if (randomValue < 0 || randomValue > 100) {
      document.body.style.backgroundColor = "red";
    } else if (randomValue >= 0 && randomValue < 20) {
      document.body.style.backgroundColor = "green";
    } else if (randomValue >= 20 && randomValue < 40) {
      document.body.style.backgroundColor = "blue";
    } else if (randomValue >= 40 && randomValue < 60) {
      document.body.style.backgroundColor = "orange";
    } else if (randomValue >= 60 && randomValue < 80) {
      document.body.style.backgroundColor = "purple";
    } else if (randomValue >= 80 && randomValue <= 100) {
      document.body.style.backgroundColor = "yellow";
    }
  }

  // Function to generate options for select list
  function addList() {
    selectList.innerHTML = "";

    imageArray.forEach((imageSrc, index) => {
      const optionElement = document.createElement("option");
      optionElement.textContent = `Image ${index + 1}`;
      optionElement.value = imageSrc;
      selectList.appendChild(optionElement);
    });
  }

  // Function to change image when select list is changed
  function changeImage() {
    const selectedImage = selectList.value;
    if (selectedImage) {
      imageElement.src = selectedImage;
    }
  }

  // Event listeners
  randomColorButton.addEventListener("click", changeRandomColor);
  customColorButton.addEventListener("click", changeCustomColor);
  selectList.addEventListener("change", changeImage);
  addList(); // Populate the select list on page load
});
