fetch("https://api.thedogapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        document.getElementById("dog-image").src = data[0].url;
    })
    .catch(error => {
        console.error(error);
    });

    fetch("https://api.thedogapi.com/v1/breeds")
    .then(response => response.json())
    .then(data => {

        const breedList = document.getElementById("breed-list");

        for (let i = 0; i < 10; i++) {

            const breed = document.createElement("li");

            breed.innerText = data[i].name;

            breedList.appendChild(breed);
        }
    })
    .catch(error => {
        console.error(error);
    });