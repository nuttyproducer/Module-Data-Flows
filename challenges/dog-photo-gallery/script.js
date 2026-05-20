// API URL
const url = "https://dog.ceo/api/breeds/image/random";

// Get the elements from the HTML

const addButton = document.getElementById("add-btn");
const resetButton = document.getElementById("clear-btn");
const dogGallery = document.getElementById("dog-gallery");

// Write a function that fetches a dog image and appends it to the gallery

function addDogsImages() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const dogImage = document.createElement("img");
      dogImage.src = data.message;

      const li = document.createElement("li");
      li.append(dogImage);
      dogGallery.append(li);
    });
}

// Loads the first dog directly when page loads.
addDogsImages();

// Add a click listener to the add button
addButton.addEventListener("click", addDogsImages);

// Add a click listener to the clear button
resetButton.addEventListener("click", () => {
  dogGallery.innerHTML = "";
});
