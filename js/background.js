const images = ["0.jpeg", "1.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `./images/${chosenImage}`;

document.body.appendChild(bgImage);