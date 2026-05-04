const comicImage = document.getElementById("comic-image");
const comicAlt = document.getElementById("comic-alt");

function fetchComic() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      if (!response.ok) {
        // Error handeling
        throw new Error("Network fetch was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      comicImage.src = data.img;
      comicImage.alt = data.alt;
      comicAlt.textContent = data.alt;
    })
    .catch((error) => {
      // Error handeling
      console.error("Fetch error:", error);
      alert("Failed to load comic. Check console for details."); // Extra error handeling popup on screen
    });
}

fetchComic();
