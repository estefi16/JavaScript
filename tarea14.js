const playlist = [ "cancion A", "cancion B", "cancion C"];
 
//agregar 2 canciones nuevas

playlist.push ("cancion D");
playlist.push("cancion E");

// mostrar la playlist despues de agregar las canciones

console.log("playlist despues de agregar las canciones");
console.log(playlist);

//simular que se reproduce la primer cancion
// guardar la cancion eliminida en una variable

const cancionReproducida = playlist.shift();

//mostrar la cancion que se comenzo a reproducir

console.log("comenzo a reproducirse: " + cancionReproducida);

//eliminar la ultim cancion de la lista
//guardar la cancione eliminada en una variable

const cancionEliminada = playlist.pop();

//mostrar cual fue eliminada
console.log("Cancion eliminada: " + cancionEliminada);

//agregar una nueva cancion

playlist.push("cancion F");

//mostrar play list final

console.log("Playlist final:");
console.log(playlist);

//mostrar cuantas canciones quedan utilizando length

console.log("Cantidad de canciones: " + playlist.length)