const weatherAPIKey = "50771c4e2aed6c29684666650c43f713";
const unsplashAPIKey = "h5NREg7DKQI7R6ev0zxLacw_so_EJoaUeertxD1tldA";

// Start with a default city London

loadWeather("London");

// Search engine function wrapper

function loadWeather(city) {
  // Fetch weather data from OpenWeatherMap

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherAPIKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const conditionsElement = document.getElementById("conditions");

      // Check if the city is found

      if (data.cod === "404") {
        conditionsElement.innerHTML = `City <span class="city-name">${city}</span> not found! Try again!`;
        return;
      }

      const description = data.weather[0].description;

      // Display weather conditions

      conditionsElement.innerHTML = `Current weather conditions in <span class="city-name">${city}</span>: ${description}`;

      // Fetch photos from Unsplash using the weather description

      const unsplashUrl = `https://api.unsplash.com/search/photos?query=${description}&client_id=${unsplashAPIKey}`;

      fetch(unsplashUrl)
        .then((response) => response.json())
        .then((photos) => {
          // Display the main photo

          console.log(photos);
          const photoElement = document.getElementById("photo");
          photoElement.innerHTML = `<img src="${photos.results[0].urls.regular}" alt="${photos.results[0].alt_description}" />`;

          // Display photographer credits for the first picture

          const userCredit = document.getElementById("credit-user");
          userCredit.textContent = photos.results[0].user.name;
          userCredit.href = photos.results[0].user.links.html;

          // Display thumbnails

          const thumbsElement = document.getElementById("thumbs");
          for (const photo of photos.results) {
            const thumbImage = document.createElement("img");
            thumbImage.src = photo.urls.thumb;
            thumbImage.alt = photo.alt_description;

            thumbImage.addEventListener("click", () => {
              photoElement.innerHTML = `<img src="${photo.urls.regular}" alt="${photo.alt_description}" />`;

              // Photographer name and link

              userCredit.textContent = photo.user.name;
              userCredit.href = photo.user.links.html;
            });

            thumbsElement.appendChild(thumbImage);
          }
        });
    });
}

// Handle the search form

const searchForm = document.getElementById("search");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = document.getElementById("search-tf").value;
  document.getElementById("thumbs").innerHTML = "";
  loadWeather(city);
});
