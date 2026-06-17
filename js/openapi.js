fetch("https://api.thedogapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        document.getElementById("dog-image").src = data[0].url;
    })
    .catch(error => {
        console.error(error);
    });

const API_KEY = "live_1JkTTgNOAwm7ZVG9tTJC1ISBQplBswc8L9g89O89WyNiRRTxR5Xg8m16wLjWowwR";

fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
        "x-api-key": API_KEY
    }
})
.then(response => response.json())
.then(data => {
    const breedList = document.getElementById("breed-list");

    data.slice(0, 10).forEach(breed => {
        const li = document.createElement("li");
        li.textContent = breed.name;
        breedList.appendChild(li);
    });
})
.catch(error => console.error(error));