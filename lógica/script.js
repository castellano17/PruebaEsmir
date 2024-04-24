// Data
const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 },
  { artist: "Chris Stapleton", name: "Traveller", sales: 1085000 },
  { artist: "Pentatonix", name: "A Pentatonix Christmas", sales: 904000 },
  {
    artist: "Original Broadway Cast Recording",
    name: "Hamilton: An American Musical",
    sales: 820000,
  },
  { artist: "Twenty One Pilots", name: "Blurryface", sales: 738000 },
  { artist: "Prince", name: "The Very Best of Prince", sales: 668000 },
  { artist: "Rihanna", name: "Anti", sales: 603000 },
  { artist: "Justin Bieber", name: "Purpose", sales: 554000 },
];

// 1. Filtrar los álbumes y mostrar los artistas
const albumDiv = document.getElementById("albums");
const bestSellingAlbums = musicData.filter((album) => album.sales > 1000000);
bestSellingAlbums.forEach((album) => {
  const card = document.createElement("div");
  card.className = "card";
  const p = document.createElement("p");
  p.textContent = `${album.artist} es un gran artista`;
  card.appendChild(p);
  albumDiv.appendChild(card);
});

// 2. Sumar las ventas y guardarlo en la variale totalAlbumSales
const totalAlbumSales = musicData.reduce(
  (total, album) => total + album.sales,
  0
);
//console.log("Ventas totales:", totalAlbumSales);

// 3. Filtrar los nombres largos y mostrar los artistas
const nameSelect = document.getElementById("names-long");
const longNames = musicData.filter((album) => album.name.length > 8);
longNames.forEach((album) => {
  const card = document.createElement("div");
  card.className = "card long-name";
  const p = document.createElement("p");
  p.textContent = `${album.artist} tiene un nombre muy grande`;
  card.appendChild(p);
  nameSelect.appendChild(card);
});

// 4. Funciones para agregar, borrar y buscar
function addAlbum(artist, name, sales) {
  musicData.push({ artist, name, sales });
}

function deleteAlbum(artist) {
  const index = musicData.findIndex((album) => album.artist === artist);
  if (index !== -1) {
    musicData.splice(index, 1);
  }
}

function searchAlbum(name) {
  const lowerCaseName = name.toLowerCase();
  return musicData.filter((album) =>
    album.name.toLowerCase().includes(lowerCaseName)
  );
}

// 5. Funciones creadas
// 5.1. Borrar artistas
deleteAlbum("Adele");
deleteAlbum("Prince");
deleteAlbum("Justin Bieber");

// 5.2. Agregar un artista
addAlbum("Radiohead", "Ok Computer", 5000000);

// 5.3. Agregar un campo de búsqueda
const resultsDiv = document.getElementById("search");

const searchInput = document.createElement("input");
const searchButton = document.createElement("button");
searchButton.textContent = "Buscar";
searchButton.addEventListener("click", () => {
  const searchResults = searchAlbum(searchInput.value);
  searchResults.forEach((album) => {
    const p = document.createElement("p");
    p.className = "search";
    p.textContent = `El álbum ${album.name} del artista ${album.artist} vendió aproximadamente ${album.sales} copias`;
    resultsDiv.appendChild(p);
  });
});
resultsDiv.appendChild(searchInput);
resultsDiv.appendChild(searchButton);
