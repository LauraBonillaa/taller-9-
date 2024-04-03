const digimones = [
    "https://digimon.shadowsmith.com/img/koromon.jpg",
    "https://digimon.shadowsmith.com/img/tsunomon.jpg",
    "https://digimon.shadowsmith.com/img/yokomon.jpg",
    "https://digimon.shadowsmith.com/img/motimon.jpg",
    "https://digimon.shadowsmith.com/img/patamon.jpg",
    "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
    "https://digimon.shadowsmith.com/img/greymon.jpg",
    "https://digimon.shadowsmith.com/img/tanemon.jpg"
];

function crearImagen(url) {
    
    const img = document.createElement("img");
    img.src = url;
    img.addEventListener("click", function() {
        alert("Joshi");
    });
    return img;
}

const contenedor = document.getElementById("digimones-container");

digimones.forEach(digimonUrl => {
    const img = crearImagen(digimonUrl);
    contenedor.appendChild(img);
});
