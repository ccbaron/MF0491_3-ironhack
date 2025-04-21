async function getPuzzle(wordCount) {

    // 1. Construimos la URL de la API con el parámetro wordCount
    const apiUrl = `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`;

    // 2. Hacemos la petición GET a la API usando fetch. Usamos await para esperar hasta que recibamos la respuesta del servidor
    const response = await fetch(apiUrl);

    // 3. Convertimos la respuesta de formato JSON a objeto JavaScript
    // La API devuelve datos en formato JSON que debemos parsear
    const data = await response.json();

    // 4. Extraemos y devolvemos la propiedad 'puzzle' del objeto recibido
    // Esta propiedad contiene la palabra aleatoria que nos envía la API
    return data.puzzle;
}